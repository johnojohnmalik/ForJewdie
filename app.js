(function () {
  'use strict';

  if (typeof window.VERBS === 'undefined') {
    console.error('verbs.js not loaded');
    return;
  }

  var VERBS = window.VERBS;

  // ─── Constants ────────────────────────────────────────────────────────────────
  var MASTERY_LEVELS        = ['Beginner', 'Familiar', 'Good', 'Mastered'];
  var REVIEW_MISS_THRESHOLD = 3;
  var CELEBRATE_EVERY       = 5;
  var ROUND_LABELS          = ['Flashcards', 'Type It'];

  // ─── Persistence helpers ──────────────────────────────────────────────────────
  function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  // ─── App state ────────────────────────────────────────────────────────────────
  var nikudOn            = loadJSON('nikudOn', false);
  var tenseFilter        = loadJSON('tenseFilter', 'all');
  var cardOrder          = loadJSON('cardOrder', 'shuffle');
  var studyMode          = 'flashcards';
  var masteryData        = loadJSON('masteryData', {});
  var reviewStore        = loadJSON('reviewStore', []);
  var reviewRound        = loadJSON('reviewRound', 0);   // 0=flashcards 1=typing
  var guideSeen          = loadJSON('guideSeen', false);
  var consecutiveCorrect = 0;

  // ─── DOM refs ─────────────────────────────────────────────────────────────────
  var homeView       = document.getElementById('home-view');
  var flashcardsView = document.getElementById('flashcards-view');
  var typingView     = document.getElementById('typing-view');
  var quizView       = document.getElementById('quiz-view');
  var reviewView     = document.getElementById('review-view');

  var verbFilterSelect = document.getElementById('verb-filter');
  var btnStart         = document.getElementById('btn-start');
  var btnNikudToggle   = document.getElementById('btn-nikud-toggle');
  var nikudStatus      = btnNikudToggle.querySelector('.nikud-status');

  // Flashcard DOM
  var flashcardEl   = document.getElementById('flashcard');
  var cardFrontText = document.getElementById('card-front-text');
  var cardBackText  = document.getElementById('card-back-text');
  var flashProgress = document.getElementById('flash-progress');
  var tenseIndicator= document.getElementById('tense-indicator');
  var verbIndicator = document.getElementById('verb-indicator');
  var btnFlip       = document.getElementById('btn-flip');
  var btnAgain      = document.getElementById('btn-again');
  var btnGotIt      = document.getElementById('btn-got-it');
  var btnBackFlash  = document.getElementById('btn-back-flash');
  var btnInfo       = document.getElementById('btn-info');

  // Typing DOM
  var typingPrompt         = document.getElementById('typing-prompt');
  var typingSubjectHint    = document.getElementById('typing-subject-hint');
  var typingQuestion       = document.getElementById('typing-question');
  var typingFeedback       = document.getElementById('typing-feedback');
  var typingInput          = document.getElementById('typing-input');
  var typingProgress       = document.getElementById('typing-progress');
  var typingTenseIndicator = document.getElementById('typing-tense-indicator');
  var typingVerbIndicator  = document.getElementById('typing-verb-indicator');
  var btnCheck             = document.getElementById('btn-check');
  var btnTypingNext        = document.getElementById('btn-typing-next');
  var btnTypingDontKnow    = document.getElementById('btn-typing-dont-know');
  var btnBackTyping        = document.getElementById('btn-back-typing');
  var btnInfoTyping        = document.getElementById('btn-info-typing');
  var typingHintRow        = document.getElementById('typing-hint-row');
  var typingHintText       = document.getElementById('typing-hint-text');

  // Quiz DOM
  var quizContent    = document.getElementById('quiz-content');
  var quizResult     = document.getElementById('quiz-result');
  var quizProgress   = document.getElementById('quiz-progress');
  var quizPrompt     = document.getElementById('quiz-prompt');
  var quizTerm       = document.getElementById('quiz-term');
  var quizOptions    = document.getElementById('quiz-options');
  var quizGradeTitle = document.getElementById('quiz-grade-title');
  var quizGradeScore = document.getElementById('quiz-grade-score');
  var quizGradePct   = document.getElementById('quiz-grade-pct');
  var btnQuizAgain   = document.getElementById('btn-quiz-again');
  var btnBackQuiz    = document.getElementById('btn-back-quiz');

  // Review DOM
  var reviewList       = document.getElementById('review-list');
  var reviewRoundLabel = document.getElementById('review-round-label');
  var btnStartReview   = document.getElementById('btn-start-review');
  var btnBackReview    = document.getElementById('btn-back-review');
  var btnReviewDeck    = document.getElementById('btn-review-deck');
  var reviewCountBadge = document.getElementById('review-count');

  // Info panel DOM
  var infoPanel         = document.getElementById('info-panel');
  var btnCloseInfo      = document.getElementById('btn-close-info');
  var infoPanelBackdrop = infoPanel.querySelector('.info-panel-backdrop');
  var infoHe            = document.getElementById('info-he');
  var infoHeNikud       = document.getElementById('info-he-nikud');
  var infoEn            = document.getElementById('info-en');
  var infoShoresh       = document.getElementById('info-shoresh');
  var infoTense         = document.getElementById('info-tense');
  var infoExampleHe     = document.getElementById('info-example-he');
  var infoExampleEn     = document.getElementById('info-example-en');
  var btnAudio          = document.getElementById('btn-audio');
  var btnAudioExample   = document.getElementById('btn-audio-example');

  // Mastery DOM
  var masteryDisplay    = document.getElementById('mastery-display');
  var masteryVerbLabel  = document.getElementById('mastery-verb-label');
  var masteryLevelBadge = document.getElementById('mastery-level-badge');

  // Guide modal DOM
  var guideModal    = document.getElementById('guide-modal');
  var btnGuide      = document.getElementById('btn-guide');
  var btnCloseGuide = document.getElementById('btn-close-guide');
  var btnGuideGotIt = document.getElementById('btn-guide-got-it');

  // Celebration DOM
  var celebrationOverlay  = document.getElementById('celebration-overlay');
  var celebrationVideo    = document.getElementById('celebration-video');
  var btnCloseCelebration = document.getElementById('btn-close-celebration');

  // ─── Utility ─────────────────────────────────────────────────────────────────
  function shuffle(arr) {
    var i = arr.length, j, t;
    while (i) { j = Math.floor(Math.random() * i--); t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    return arr;
  }
  function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  function stripNikud(str) {
    return str.replace(/[\u05B0-\u05C7]/g, '');
  }
  function normalizeAnswer(str) {
    return str.trim().toLowerCase();
  }

  // Extract subject pronoun from English translation for typing hint
  function getSubjectHint(en) {
    var e = (en || '').toLowerCase().trim();
    if (/^i /.test(e) || e === 'i') return 'אני';
    if (/^you /.test(e) && /\(m\.p\.\)/.test(e)) return 'אתם';
    if (/^you /.test(e) && /\(f\.p\.\)/.test(e)) return 'אתן';
    if (/^you /.test(e) && /\(m\.s\.\)/.test(e)) return 'אתה';
    if (/^you /.test(e) && /\(f\.s\.\)/.test(e)) return 'את';
    if (/^he /.test(e)) return 'הוא';
    if (/^she /.test(e)) return 'היא';
    if (/^we /.test(e)) return 'אנחנו';
    if (/^they /.test(e)) return 'הם';
    return null;
  }

  // ─── Consecutive-correct streak & celebration ─────────────────────────────────
  function recordCorrectStreak() {
    consecutiveCorrect++;
    if (consecutiveCorrect >= CELEBRATE_EVERY) {
      consecutiveCorrect = 0;
      triggerCelebration();
    }
  }
  function recordWrongStreak() {
    consecutiveCorrect = 0;
  }

  function triggerCelebration() {
    celebrationVideo.currentTime = 0;
    celebrationVideo.play().catch(function () {});
    celebrationOverlay.classList.remove('hidden');
    document.body.classList.add('panel-open');
  }

  btnCloseCelebration.addEventListener('click', function () {
    celebrationVideo.pause();
    celebrationOverlay.classList.add('hidden');
    document.body.classList.remove('panel-open');
  });

  // ─── Guide modal ──────────────────────────────────────────────────────────────
  function openGuide() {
    guideModal.classList.remove('hidden');
    document.body.classList.add('panel-open');
  }
  function closeGuide() {
    guideModal.classList.add('hidden');
    document.body.classList.remove('panel-open');
    if (!guideSeen) { guideSeen = true; saveJSON('guideSeen', true); }
  }

  btnGuide.addEventListener('click', openGuide);
  btnCloseGuide.addEventListener('click', closeGuide);
  btnGuideGotIt.addEventListener('click', closeGuide);
  guideModal.querySelector('.guide-backdrop').addEventListener('click', closeGuide);

  if (!guideSeen) openGuide();

  // ─── Build cards ─────────────────────────────────────────────────────────────
  function buildCards(verbFilter, tense, order) {
    var cards = [];
    var list = verbFilter
      ? VERBS.filter(function (v) { return v.infinitive.he === verbFilter; })
      : VERBS;

    list.forEach(function (verb) {
      function addForm(form, tenseName) {
        var heText  = form.he;
        var heNikud = form.he_nikud || form.he;
        var enText  = form.en;
        cards.push({
          front: heText, frontNikud: heNikud,
          back: enText,  backNikud: enText,
          dir: 'rtl', tense: tenseName,
          verbKey: verb.infinitive.he, verbEn: verb.infinitive.en,
          shoresh: verb.shoresh, example: verb.example,
          formKey: verb.infinitive.he + '_' + tenseName + '_he_' + heText
        });
        cards.push({
          front: enText, frontNikud: enText,
          back: heText,  backNikud: heNikud,
          dir: 'ltr', tense: tenseName,
          verbKey: verb.infinitive.he, verbEn: verb.infinitive.en,
          shoresh: verb.shoresh, example: verb.example,
          formKey: verb.infinitive.he + '_' + tenseName + '_en_' + enText
        });
      }

      if (tense === 'all' || tense === 'present' || !tense) {
        addForm(verb.infinitive, 'infinitive');
        verb.present.forEach(function (f) { addForm(f, 'present'); });
      }
      if (tense === 'all' || tense === 'past') {
        verb.past.forEach(function (f) { addForm(f, 'past'); });
      }
      if (tense === 'all' || tense === 'future') {
        verb.future.forEach(function (f) { addForm(f, 'future'); });
      }
    });

    if (order === 'shuffle') return shuffle(cards.slice());
    return cards;
  }

  // ─── Populate verb filter dropdown ───────────────────────────────────────────
  VERBS.forEach(function (v) {
    var opt = document.createElement('option');
    opt.value = v.infinitive.he;
    opt.textContent = v.infinitive.he + ' — ' + v.infinitive.en;
    verbFilterSelect.appendChild(opt);
  });

  // ─── Nikud toggle ─────────────────────────────────────────────────────────────
  function applyNikudUI() {
    nikudStatus.textContent = nikudOn ? 'ON' : 'OFF';
    btnNikudToggle.classList.toggle('nikud-on', nikudOn);
  }
  btnNikudToggle.addEventListener('click', function () {
    nikudOn = !nikudOn;
    saveJSON('nikudOn', nikudOn);
    applyNikudUI();
    if (flashcardsView.classList.contains('active')) showFlashcard();
    if (typingView.classList.contains('active'))     showTypingCard();
  });
  applyNikudUI();

  // ─── Mode tabs ────────────────────────────────────────────────────────────────
  var modeTabs = document.querySelectorAll('.mode-tab');
  modeTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      modeTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      studyMode = tab.dataset.mode;
      updateStartButton();
    });
  });
  function updateStartButton() {
    var labels = { flashcards: 'Start Flashcards →', typing: 'Start Typing →', quiz: 'Start Quiz →' };
    btnStart.textContent = labels[studyMode] || 'Start →';
  }

  // ─── Tense tabs ───────────────────────────────────────────────────────────────
  var tenseTabs = document.querySelectorAll('.tense-tab');
  tenseTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tenseTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      tenseFilter = tab.dataset.tense;
      saveJSON('tenseFilter', tenseFilter);
    });
  });
  tenseTabs.forEach(function (t) {
    if (t.dataset.tense === tenseFilter) t.classList.add('active');
    else t.classList.remove('active');
  });

  // ─── Order tabs ───────────────────────────────────────────────────────────────
  var orderTabs = document.querySelectorAll('.order-tab');
  orderTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      orderTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      cardOrder = tab.dataset.order;
      saveJSON('cardOrder', cardOrder);
    });
  });
  orderTabs.forEach(function (t) {
    if (t.dataset.order === cardOrder) t.classList.add('active');
    else t.classList.remove('active');
  });

  // ─── Mastery ─────────────────────────────────────────────────────────────────
  function getMasteryEntry(verbKey) {
    if (!masteryData[verbKey]) {
      masteryData[verbKey] = { correct: 0, incorrect: 0, noNikudCorrect: 0, missStreak: 0 };
    }
    return masteryData[verbKey];
  }
  function calcMasteryLevel(entry) {
    var total = entry.correct + entry.incorrect;
    var rate  = total > 0 ? entry.correct / total : 0;
    if (entry.noNikudCorrect >= 10 && rate >= 0.75) return 3;
    if (entry.correct >= 8   && rate >= 0.65)       return 2;
    if (entry.correct >= 3)                          return 1;
    return 0;
  }
  function recordResult(verbKey, isCorrect) {
    var entry = getMasteryEntry(verbKey);
    if (isCorrect) {
      entry.correct++;
      entry.missStreak = 0;
      if (!nikudOn) entry.noNikudCorrect++;
    } else {
      entry.incorrect++;
      entry.missStreak++;
    }
    saveJSON('masteryData', masteryData);
  }
  function updateMasteryDisplay() {
    var vf = verbFilterSelect.value;
    if (!vf) { masteryDisplay.classList.add('hidden'); return; }
    var entry = getMasteryEntry(vf);
    var level = calcMasteryLevel(entry);
    masteryDisplay.classList.remove('hidden');
    masteryVerbLabel.textContent  = vf;
    masteryLevelBadge.textContent = MASTERY_LEVELS[level];
    masteryLevelBadge.className   = 'mastery-badge level-' + level;
  }
  verbFilterSelect.addEventListener('change', updateMasteryDisplay);
  updateMasteryDisplay();

  // ─── Review deck ─────────────────────────────────────────────────────────────
  function updateReviewDeckUI() {
    var count = reviewStore.length;
    if (count > 0) {
      btnReviewDeck.classList.remove('hidden');
      reviewCountBadge.textContent = count;
    } else {
      btnReviewDeck.classList.add('hidden');
    }
  }
  function addToReviewDeck(card) {
    var exists = reviewStore.some(function (c) { return c.formKey === card.formKey; });
    if (!exists) {
      reviewStore.push({
        front: card.front, frontNikud: card.frontNikud,
        back:  card.back,  backNikud:  card.backNikud,
        dir: card.dir, tense: card.tense,
        verbKey: card.verbKey, verbEn: card.verbEn,
        shoresh: card.shoresh, example: card.example,
        formKey: card.formKey
      });
      saveJSON('reviewStore', reviewStore);
      updateReviewDeckUI();
    }
  }
  function checkMissAndReviewDeck(card) {
    var entry = getMasteryEntry(card.verbKey);
    if (entry.missStreak >= REVIEW_MISS_THRESHOLD) {
      addToReviewDeck(card);
      entry.missStreak = 0;
      saveJSON('masteryData', masteryData);
    }
  }
  updateReviewDeckUI();
  btnReviewDeck.addEventListener('click', showReviewView);

  // ─── View navigation ─────────────────────────────────────────────────────────
  function showView(view) {
    [homeView, flashcardsView, typingView, quizView, reviewView].forEach(function (v) {
      v.classList.remove('active');
    });
    view.classList.add('active');
  }

  var TENSE_LABELS = {
    infinitive: 'Infinitive',
    present:    'Present · הווה',
    past:       'Past · עבר',
    future:     'Future · עתיד'
  };

  // ─── START button ─────────────────────────────────────────────────────────────
  btnStart.addEventListener('click', function () {
    if      (studyMode === 'flashcards') startFlashcards();
    else if (studyMode === 'typing')     startTyping();
    else if (studyMode === 'quiz')       startQuiz();
  });

  // ═══════════════════════════════════════════════════════════════════════════════
  // FLASHCARDS
  // ═══════════════════════════════════════════════════════════════════════════════
  var deck = [], deckIndex = 0, missTrack = {};

  function startFlashcards(cards) {
    deck       = cards || buildCards(verbFilterSelect.value || null, tenseFilter, cardOrder);
    deckIndex  = 0;
    missTrack  = {};
    showView(flashcardsView);
    showFlashcard();
  }

  function showFlashcard() {
    if (deck.length === 0) {
      flashProgress.textContent = 'No cards';
      cardFrontText.textContent = 'No cards. Change filter and try again.';
      cardBackText.textContent  = '';
      flashcardEl.classList.remove('flipped');
      tenseIndicator.textContent = '';
      verbIndicator.textContent  = '';
      return;
    }
    if (deckIndex >= deck.length) {
      flashProgress.textContent = 'Done! ' + deck.length + ' cards';
      cardFrontText.textContent = '🎉 Deck complete!';
      cardBackText.textContent  = 'Great work. Keep going or take a quiz.';
      cardFrontText.dir         = 'ltr';
      cardBackText.dir          = 'ltr';
      flashcardEl.classList.remove('flipped');
      tenseIndicator.textContent = '';
      verbIndicator.textContent  = '';
      return;
    }
    var card = deck[deckIndex];
    cardFrontText.textContent = nikudOn ? card.frontNikud : card.front;
    cardBackText.textContent  = nikudOn ? card.backNikud  : card.back;
    cardFrontText.dir = card.dir;
    cardBackText.dir  = card.dir === 'rtl' ? 'ltr' : 'rtl';
    flashcardEl.classList.remove('flipped');
    flashProgress.textContent  = (deckIndex + 1) + ' / ' + deck.length;
    tenseIndicator.textContent = TENSE_LABELS[card.tense] || card.tense;
    verbIndicator.textContent  = card.verbKey + ' — ' + card.verbEn;
    updateMasteryDisplay();
  }

  function nextFlashcard() {
    if (!deck.length) return;
    deckIndex++;
    showFlashcard();
  }

  function insertAgainIn(offset, deckRef, indexRef) {
    if (!deckRef || !deckRef.length) return;
    var insertAt = Math.min(indexRef + offset, deckRef.length);
    deckRef.splice(insertAt, 0, deckRef[indexRef]);
  }

  // ✓ Got it — record correct, advance
  function flashGotIt() {
    if (!deck.length || deckIndex >= deck.length) return;
    var card = deck[deckIndex];
    recordResult(card.verbKey, true);
    recordCorrectStreak();
    updateMasteryDisplay();
    nextFlashcard();
  }

  // ✗ Again — record wrong, reinsert, advance
  function flashAgain() {
    if (!deck.length || deckIndex >= deck.length) return;
    var card = deck[deckIndex];
    recordResult(card.verbKey, false);
    recordWrongStreak();
    missTrack[card.formKey] = (missTrack[card.formKey] || 0) + 1;
    checkMissAndReviewDeck(card);
    insertAgainIn(randomInt(5, 10), deck, deckIndex);
    nextFlashcard();
  }

  flashcardEl.addEventListener('click', function () {
    if (deckIndex < deck.length) flashcardEl.classList.toggle('flipped');
  });
  flashcardEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (deckIndex < deck.length) flashcardEl.classList.toggle('flipped');
    }
  });
  btnFlip.addEventListener('click', function () {
    if (deckIndex < deck.length) flashcardEl.classList.toggle('flipped');
  });
  btnGotIt.addEventListener('click', flashGotIt);
  btnAgain.addEventListener('click', flashAgain);
  btnBackFlash.addEventListener('click', function () { showView(homeView); });

  // ═══════════════════════════════════════════════════════════════════════════════
  // TYPING MODE
  // ═══════════════════════════════════════════════════════════════════════════════
  var typingDeck = [], typingIndex = 0, typingAnswered = false;

  function startTyping(cards) {
    typingDeck    = cards || buildCards(verbFilterSelect.value || null, tenseFilter, cardOrder);
    typingIndex   = 0;
    typingAnswered= false;
    showView(typingView);
    showTypingCard();
  }

  function showTypingCard() {
    typingFeedback.className   = 'typing-feedback hidden';
    typingFeedback.textContent = '';
    typingInput.value          = '';
    typingInput.disabled       = false;
    typingHintRow.classList.add('hidden');
    typingAnswered     = false;
    btnCheck.textContent = 'Check';
    btnCheck.disabled    = false;

    if (typingDeck.length === 0) {
      typingProgress.textContent = 'No cards';
      typingQuestion.textContent = 'No cards. Change filter and try again.';
      typingPrompt.textContent   = '';
      typingSubjectHint.classList.add('hidden');
      return;
    }
    if (typingIndex >= typingDeck.length) {
      typingProgress.textContent       = 'Done!';
      typingQuestion.textContent       = '🎉 Deck complete!';
      typingPrompt.textContent         = '';
      typingSubjectHint.classList.add('hidden');
      typingTenseIndicator.textContent = '';
      typingVerbIndicator.textContent  = '';
      return;
    }

    var card = typingDeck[typingIndex];
    typingProgress.textContent       = (typingIndex + 1) + ' / ' + typingDeck.length;
    typingTenseIndicator.textContent = TENSE_LABELS[card.tense] || card.tense;
    typingVerbIndicator.textContent  = card.verbKey + ' — ' + card.verbEn;

    typingQuestion.textContent = nikudOn ? card.frontNikud : card.front;
    typingQuestion.dir         = card.dir;

    if (card.dir === 'rtl') {
      // Front is Hebrew → type English; show subject hint
      typingPrompt.textContent = 'What does this mean in English?';
      typingInput.dir          = 'ltr';
      typingInput.placeholder  = 'Type in English...';
      var hint = getSubjectHint(card.back);
      if (hint) {
        typingSubjectHint.textContent = hint + ' ___';
        typingSubjectHint.classList.remove('hidden');
      } else {
        typingSubjectHint.classList.add('hidden');
      }
    } else {
      // Front is English → type Hebrew
      typingPrompt.textContent = 'Write this in Hebrew:';
      typingInput.dir          = 'rtl';
      typingInput.placeholder  = '...הקלד בעברית';
      typingSubjectHint.classList.add('hidden');
    }

    typingInput.focus();
  }

  function checkTypingAnswer() {
    if (typingAnswered) return;
    var card = typingDeck[typingIndex];
    if (!card) return;

    var userInput = typingInput.value;
    var correct   = nikudOn ? card.backNikud : card.back;
    var isCorrect;

    if (card.dir === 'ltr') {
      // User types Hebrew — compare without nikud
      isCorrect = stripNikud(userInput.trim()) === stripNikud(correct.trim());
    } else {
      // User types English — case-insensitive
      isCorrect = normalizeAnswer(userInput) === normalizeAnswer(correct);
    }

    typingAnswered       = true;
    typingInput.disabled = true;
    btnCheck.disabled    = true;

    recordResult(card.verbKey, isCorrect);
    updateMasteryDisplay();

    typingFeedback.classList.remove('hidden');
    if (isCorrect) {
      typingFeedback.textContent = '✓ Correct!';
      typingFeedback.classList.add('feedback-correct');
      recordCorrectStreak();
    } else {
      var displayCorrect = nikudOn ? card.backNikud : card.back;
      typingFeedback.innerHTML =
        '✗ Incorrect. Correct answer: <span dir="' +
        (card.dir === 'rtl' ? 'ltr' : 'rtl') +
        '" class="feedback-answer">' + displayCorrect + '</span>';
      typingFeedback.classList.add('feedback-incorrect');
      recordWrongStreak();

      missTrack[card.formKey] = (missTrack[card.formKey] || 0) + 1;
      checkMissAndReviewDeck(card);

      // Auto-reinsert wrong card
      insertAgainIn(randomInt(4, 8), typingDeck, typingIndex);

      // First-letter hint for Hebrew-typing cards
      if (card.dir === 'ltr') {
        typingHintText.textContent = 'Hint: starts with "' + correct.charAt(0) + '"';
        typingHintRow.classList.remove('hidden');
      }
    }
  }

  function typingNext() { typingIndex++; showTypingCard(); }

  function typingDontKnow() {
    if (!typingDeck.length) return;
    var card = typingDeck[typingIndex];
    recordResult(card.verbKey, false);
    recordWrongStreak();
    missTrack[card.formKey] = (missTrack[card.formKey] || 0) + 1;
    checkMissAndReviewDeck(card);
    insertAgainIn(randomInt(5, 10), typingDeck, typingIndex);
    typingIndex++;
    showTypingCard();
  }

  btnCheck.addEventListener('click', checkTypingAnswer);
  typingInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (!typingAnswered) checkTypingAnswer();
      else typingNext();
    }
  });
  btnTypingNext.addEventListener('click', typingNext);
  btnTypingDontKnow.addEventListener('click', typingDontKnow);
  btnBackTyping.addEventListener('click', function () { showView(homeView); });

  // ═══════════════════════════════════════════════════════════════════════════════
  // QUIZ
  // ═══════════════════════════════════════════════════════════════════════════════
  var quizPool = [], quizIndex = 0, quizScore = 0, quizAnswers = [];

  function getQuizPool(verbFilter) {
    var list = verbFilter ? VERBS.filter(function (v) { return v.infinitive.he === verbFilter; }) : VERBS;
    var pool = [];
    list.forEach(function (verb) {
      pool.push(verb.infinitive);
      verb.present.forEach(function (f) { pool.push(f); });
      verb.past.forEach(function (f)    { pool.push(f); });
      verb.future.forEach(function (f)  { pool.push(f); });
    });
    return pool;
  }

  function startQuiz(optPool) {
    var vf = verbFilterSelect.value || null;
    quizPool = optPool || getQuizPool(vf);
    if (quizPool.length < 4) { alert('Need at least 4 forms. Try "All verbs".'); return; }
    quizIndex   = 0;
    quizScore   = 0;
    quizAnswers = [];
    quizContent.classList.remove('hidden');
    quizResult.classList.add('hidden');
    showView(quizView);
    showQuizQuestion();
  }

  function showQuizQuestion() {
    var total = 12;
    if (quizIndex >= total || quizPool.length < 4) { finishQuiz(); return; }

    var correct = quizPool[Math.floor(Math.random() * quizPool.length)];
    var others  = quizPool.filter(function (f) { return f.he !== correct.he && f.en !== correct.en; });
    shuffle(others);
    var options = shuffle([correct].concat(others.slice(0, 3)));

    var showHebrew = Math.random() < 0.5;
    var qText      = showHebrew ? (nikudOn ? (correct.he_nikud || correct.he) : correct.he) : correct.en;
    var correctEn  = correct.en;
    var correctHe  = correct.he;

    quizProgress.textContent = 'Question ' + (quizIndex + 1) + ' of ' + total;
    quizPrompt.textContent   = showHebrew ? 'What does this mean?' : 'Which Hebrew form is this?';
    quizTerm.textContent     = qText;
    quizTerm.dir             = showHebrew ? 'rtl' : 'ltr';

    quizOptions.innerHTML = '';
    options.forEach(function (opt) {
      var label = showHebrew ? opt.en : (nikudOn ? (opt.he_nikud || opt.he) : opt.he);
      var btn   = document.createElement('button');
      btn.type  = 'button';
      btn.className   = 'quiz-option';
      btn.textContent = label;
      btn.dataset.en  = opt.en;
      btn.dataset.he  = opt.he;
      btn.dir = showHebrew ? 'ltr' : 'rtl';
      btn.addEventListener('click', function () {
        var isCorrect = showHebrew ? opt.en === correctEn : opt.he === correctHe;
        quizAnswers.push({ correct: isCorrect });
        if (isCorrect) { quizScore++; recordCorrectStreak(); }
        else { recordWrongStreak(); }
        quizOptions.querySelectorAll('.quiz-option').forEach(function (b) {
          b.disabled = true;
          var isRight = showHebrew ? b.dataset.en === correctEn : b.dataset.he === correctHe;
          if (isRight)                  b.classList.add('correct');
          else if (b === btn)           b.classList.add('wrong');
        });
        setTimeout(function () { quizIndex++; showQuizQuestion(); }, 800);
      });
      quizOptions.appendChild(btn);
    });
  }

  function finishQuiz() {
    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');
    var total = quizAnswers.length;
    var pct   = total ? Math.round((quizScore / total) * 100) : 0;
    quizGradeTitle.textContent = 'Your grade';
    quizGradeScore.textContent = quizScore + ' / ' + total;
    quizGradePct.textContent   = pct + '%';
  }

  btnBackQuiz.addEventListener('click', function () { showView(homeView); });
  btnQuizAgain.addEventListener('click', function () { showView(homeView); startQuiz(); });

  // ═══════════════════════════════════════════════════════════════════════════════
  // REVIEW VIEW  (alternates Flashcards ↔ Type It each session)
  // ═══════════════════════════════════════════════════════════════════════════════
  function showReviewView() {
    reviewList.innerHTML = '';
    var nextRound = ROUND_LABELS[reviewRound % ROUND_LABELS.length];

    if (reviewStore.length === 0) {
      reviewList.innerHTML = '<p class="review-empty">No cards in your review deck yet. Keep studying!</p>';
      btnStartReview.classList.add('hidden');
      if (reviewRoundLabel) reviewRoundLabel.textContent = '';
    } else {
      btnStartReview.classList.remove('hidden');
      btnStartReview.textContent = 'Study Review Deck (' + nextRound + ') →';
      if (reviewRoundLabel) reviewRoundLabel.textContent = 'Next session: ' + nextRound;

      var grouped = {};
      reviewStore.forEach(function (c) {
        if (!grouped[c.verbKey]) grouped[c.verbKey] = [];
        grouped[c.verbKey].push(c);
      });
      Object.keys(grouped).forEach(function (vk) {
        var n    = grouped[vk].length;
        var item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML =
          '<span class="review-verb" dir="rtl">' + vk + '</span>' +
          '<span class="review-count-label">' + n + ' card' + (n !== 1 ? 's' : '') + '</span>';
        reviewList.appendChild(item);
      });
    }
    showView(reviewView);
  }

  btnStartReview.addEventListener('click', function () {
    if (!reviewStore.length) return;
    var cards = shuffle(reviewStore.slice());
    if (reviewRound % ROUND_LABELS.length === 0) startFlashcards(cards);
    else startTyping(cards);
    reviewRound = (reviewRound + 1) % ROUND_LABELS.length;
    saveJSON('reviewRound', reviewRound);
  });

  btnBackReview.addEventListener('click', function () { showView(homeView); });

  // ═══════════════════════════════════════════════════════════════════════════════
  // INFO PANEL
  // ═══════════════════════════════════════════════════════════════════════════════
  var currentInfoCard = null;

  function openInfoPanel(card) {
    if (!card) return;
    currentInfoCard = card;

    if (card.dir === 'rtl') {
      infoHe.textContent      = card.front;
      infoHeNikud.textContent = card.frontNikud || card.front;
      infoEn.textContent      = card.back;
    } else {
      infoHe.textContent      = card.back;
      infoHeNikud.textContent = card.backNikud || card.back;
      infoEn.textContent      = card.front;
    }

    infoShoresh.textContent = card.shoresh || '—';
    infoTense.textContent   = TENSE_LABELS[card.tense] || card.tense;

    if (card.example) {
      infoExampleHe.textContent = nikudOn ? (card.example.he_nikud || card.example.he) : card.example.he;
      infoExampleEn.textContent = card.example.en;
    } else {
      infoExampleHe.textContent = '—';
      infoExampleEn.textContent = '';
    }

    infoPanel.classList.remove('hidden');
    document.body.classList.add('panel-open');
  }

  function closeInfoPanel() {
    infoPanel.classList.add('hidden');
    document.body.classList.remove('panel-open');
  }

  btnInfo.addEventListener('click', function () {
    if (deckIndex < deck.length) openInfoPanel(deck[deckIndex]);
  });
  btnInfoTyping.addEventListener('click', function () {
    if (typingIndex < typingDeck.length) openInfoPanel(typingDeck[typingIndex]);
  });
  btnCloseInfo.addEventListener('click', closeInfoPanel);
  infoPanelBackdrop.addEventListener('click', closeInfoPanel);

  // ─── Audio (Web Speech API with async voice loading) ─────────────────────────
  var hebrewVoice = null;

  function loadHebrewVoice() {
    if (!window.speechSynthesis) return;
    var voices = window.speechSynthesis.getVoices();
    hebrewVoice =
      voices.find(function (v) { return v.lang === 'he-IL'; }) ||
      voices.find(function (v) { return v.lang === 'he'; })    ||
      voices.find(function (v) { return v.lang.startsWith('he'); }) ||
      null;
  }

  if (window.speechSynthesis) {
    loadHebrewVoice();                                         // try immediately
    window.speechSynthesis.onvoiceschanged = loadHebrewVoice; // re-try when loaded
    setTimeout(loadHebrewVoice, 200);                          // Safari fallback
  }

  // Safari/iOS: unlock speech engine on first user tap (silent utterance)
  document.addEventListener('click', function unlockSpeech() {
    if (!window.speechSynthesis) return;
    var u  = new SpeechSynthesisUtterance('');
    u.volume = 0;
    window.speechSynthesis.speak(u);
    loadHebrewVoice();
    document.removeEventListener('click', unlockSpeech);
  }, { once: true });

  function speakHebrew(text) {
    if (!window.speechSynthesis) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    if (!hebrewVoice) loadHebrewVoice(); // one more attempt in case voices just loaded

    var u   = new SpeechSynthesisUtterance(stripNikud(text));
    u.lang  = 'he-IL';
    u.rate  = 0.85;
    u.pitch = 1;
    if (hebrewVoice) u.voice = hebrewVoice;
    u.onerror = function (e) { console.warn('TTS error:', e.error); };
    window.speechSynthesis.speak(u);
  }

  function setAudioBtnState(btn, speaking) {
    btn.textContent = speaking ? '🔊 …' : (btn === btnAudio ? '🔊 Listen' : '🔊 Hear sentence');
  }

  function makeSpeechUtterance(text) {
    var u    = new SpeechSynthesisUtterance(stripNikud(text));
    u.lang   = 'he-IL';
    u.rate   = 0.85;
    u.pitch  = 1;
    u.volume = 1;
    if (!hebrewVoice) loadHebrewVoice();
    if (hebrewVoice) u.voice = hebrewVoice;
    return u;
  }

  btnAudio.addEventListener('click', function () {
    if (!currentInfoCard) return;
    var text = currentInfoCard.dir === 'rtl' ? currentInfoCard.front : currentInfoCard.back;
    setAudioBtnState(btnAudio, true);
    var u = makeSpeechUtterance(text);
    u.onend   = function () { setAudioBtnState(btnAudio, false); };
    u.onerror = function () { setAudioBtnState(btnAudio, false); };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  });

  btnAudioExample.addEventListener('click', function () {
    if (!currentInfoCard || !currentInfoCard.example) return;
    setAudioBtnState(btnAudioExample, true);
    var u = makeSpeechUtterance(currentInfoCard.example.he);
    u.onend   = function () { setAudioBtnState(btnAudioExample, false); };
    u.onerror = function () { setAudioBtnState(btnAudioExample, false); };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  });

  // ─── Keyboard shortcuts ───────────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    // Guide
    if (!guideModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeGuide();
      return;
    }
    // Celebration
    if (!celebrationOverlay.classList.contains('hidden')) {
      if (e.key === 'Escape' || e.key === 'Enter') {
        celebrationVideo.pause();
        celebrationOverlay.classList.add('hidden');
        document.body.classList.remove('panel-open');
      }
      return;
    }
    // Info panel
    if (!infoPanel.classList.contains('hidden')) {
      if (e.key === 'Escape') closeInfoPanel();
      return;
    }
    // Flashcards
    if (flashcardsView.classList.contains('active')) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') flashGotIt();
      if (e.key === 'ArrowLeft')                           flashAgain();
      if (e.key === 'f' || e.key === 'F')                  flashcardEl.classList.toggle('flipped');
    }
  });

})();
