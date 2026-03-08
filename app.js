(function () {
  'use strict';

  if (typeof window.VERBS === 'undefined') {
    console.error('verbs.js not loaded');
    return;
  }

  var VERBS = window.VERBS;

  // Build all cards: { front, back, direction } in both directions (he->en, en->he)
  function buildAllCards(verbFilter) {
    var cards = [];
    var list = verbFilter ? VERBS.filter(function (v) { return v.infinitive.he === verbFilter; }) : VERBS;
    list.forEach(function (verb) {
      addForm(verb.infinitive);
      verb.present.forEach(addForm);
      verb.past.forEach(addForm);
    });
    function addForm(form) {
      cards.push({ front: form.he, back: form.en, dir: 'rtl' });
      cards.push({ front: form.en, back: form.he, dir: 'ltr' });
    }
    return cards;
  }

  function shuffle(arr) {
    var i = arr.length;
    var j, t;
    while (i) {
      j = Math.floor(Math.random() * i--);
      t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // ----- DOM refs -----
  var homeView = document.getElementById('home-view');
  var flashcardsView = document.getElementById('flashcards-view');
  var quizView = document.getElementById('quiz-view');
  var verbFilterSelect = document.getElementById('verb-filter');
  var btnFlashcards = document.getElementById('btn-flashcards');
  var btnQuiz = document.getElementById('btn-quiz');
  var btnBackFlash = document.getElementById('btn-back-flash');
  var btnBackQuiz = document.getElementById('btn-back-quiz');
  var flashProgress = document.getElementById('flash-progress');
  var flashcardEl = document.getElementById('flashcard');
  var cardFrontText = document.getElementById('card-front-text');
  var cardBackText = document.getElementById('card-back-text');
  var btnDontKnow = document.getElementById('btn-dont-know');
  var btnNext = document.getElementById('btn-next');
  var quizContent = document.getElementById('quiz-content');
  var quizResult = document.getElementById('quiz-result');
  var quizProgress = document.getElementById('quiz-progress');
  var quizPrompt = document.getElementById('quiz-prompt');
  var quizTerm = document.getElementById('quiz-term');
  var quizOptions = document.getElementById('quiz-options');
  var quizGradeTitle = document.getElementById('quiz-grade-title');
  var quizGradeScore = document.getElementById('quiz-grade-score');
  var quizGradePct = document.getElementById('quiz-grade-pct');
  var btnQuizAgain = document.getElementById('btn-quiz-again');

  // Populate verb filter
  VERBS.forEach(function (v) {
    var opt = document.createElement('option');
    opt.value = v.infinitive.he;
    opt.textContent = v.infinitive.he + ' — ' + v.infinitive.en;
    verbFilterSelect.appendChild(opt);
  });

  // ----- Flashcards state -----
  var deck = [];
  var deckIndex = 0;
  var seeAgainMin = 5;
  var seeAgainMax = 10;

  function getDeck() {
    var verbFilter = verbFilterSelect.value || null;
    var raw = buildAllCards(verbFilter);
    return shuffle(raw.slice());
  }

  function insertAgainIn(offset) {
    if (deck.length === 0) return;
    var current = deck[deckIndex];
    var insertAt = Math.min(deckIndex + offset, deck.length);
    deck.splice(insertAt, 0, current);
  }

  function showFlashcard() {
    if (deck.length === 0) {
      flashProgress.textContent = 'No cards';
      cardFrontText.textContent = 'No cards in this deck. Change filter or try All verbs.';
      cardBackText.textContent = '';
      flashcardEl.classList.remove('flipped');
      return;
    }
    var card = deck[deckIndex];
    cardFrontText.textContent = card.front;
    cardBackText.textContent = card.back;
    cardFrontText.dir = card.dir;
    cardBackText.dir = card.dir;
    flashcardEl.classList.remove('flipped');
    flashProgress.textContent = (deckIndex + 1) + ' / ' + deck.length;
  }

  function startFlashcards() {
    deck = getDeck();
    deckIndex = 0;
    homeView.classList.remove('active');
    flashcardsView.classList.add('active');
    showFlashcard();
  }

  function nextFlashcard() {
    if (deck.length === 0) return;
    deckIndex++;
    if (deckIndex >= deck.length) {
    } else {
      showFlashcard();
    }
    if (deckIndex >= deck.length) {
      flashProgress.textContent = 'Done! ' + deck.length + ' cards';
      cardFrontText.textContent = '🎉 You finished the deck!';
      cardBackText.textContent = 'Go back to study more or take a quiz.';
      cardFrontText.dir = 'ltr';
      cardBackText.dir = 'ltr';
      flashcardEl.classList.remove('flipped');
    }
  }

  function dontKnow() {
    if (deck.length === 0) return;
    var offset = randomInt(seeAgainMin, seeAgainMax);
    insertAgainIn(offset);
    nextFlashcard();
  }

  flashcardEl.addEventListener('click', function () {
    flashcardEl.classList.toggle('flipped');
  });
  flashcardEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flashcardEl.classList.toggle('flipped');
    }
  });

  btnNext.addEventListener('click', function () {
    if (flashcardEl.classList.contains('flipped')) {
      nextFlashcard();
    } else {
      flashcardEl.classList.add('flipped');
    }
  });

  btnDontKnow.addEventListener('click', function () {
    dontKnow();
  });

  btnFlashcards.addEventListener('click', startFlashcards);

  btnBackFlash.addEventListener('click', function () {
    flashcardsView.classList.remove('active');
    homeView.classList.add('active');
  });

  // ----- Quiz state -----
  var quizDeck = [];
  var quizIndex = 0;
  var quizScore = 0;
  var quizAnswers = [];

  function getQuizPool(verbFilter) {
    var list = verbFilter ? VERBS.filter(function (v) { return v.infinitive.he === verbFilter; }) : VERBS;
    var pool = [];
    list.forEach(function (verb) {
      pool.push(verb.infinitive);
      verb.present.forEach(function (f) { pool.push(f); });
      verb.past.forEach(function (f) { pool.push(f); });
    });
    return pool;
  }

  function startQuiz() {
    var verbFilter = verbFilterSelect.value || null;
    var pool = getQuizPool(verbFilter);
    if (pool.length < 4) {
      alert('Need at least 4 forms to run a quiz. Try "All verbs" or another verb.');
      return;
    }
    quizDeck = shuffle(pool.slice());
    quizIndex = 0;
    quizScore = 0;
    quizAnswers = [];
    quizContent.classList.remove('hidden');
    quizResult.classList.add('hidden');
    homeView.classList.remove('active');
    quizView.classList.add('active');
    showQuizQuestion();
  }

  function showQuizQuestion() {
    var total = 12;
    if (quizIndex >= total) {
      finishQuiz();
      return;
    }
    var verbFilter = verbFilterSelect.value || null;
    var pool = getQuizPool(verbFilter);
    if (pool.length < 4) {
      finishQuiz();
      return;
    }
    var correct = pool[Math.floor(Math.random() * pool.length)];
    var others = pool.filter(function (f) {
      return f.he !== correct.he && f.en !== correct.en;
    });
    shuffle(others);
    var options = [correct].concat(others.slice(0, 3));
    shuffle(options);

    var showHebrew = Math.random() < 0.5;
    var questionText = showHebrew ? correct.he : correct.en;
    var correctEn = correct.en;
    var correctHe = correct.he;

    quizProgress.textContent = 'Question ' + (quizIndex + 1) + ' of ' + total;
    quizPrompt.textContent = showHebrew ? 'What does this mean?' : 'Which Hebrew form is this?';
    quizTerm.textContent = questionText;
    quizTerm.dir = showHebrew ? 'rtl' : 'ltr';

    quizOptions.innerHTML = '';
    options.forEach(function (opt) {
      var label = showHebrew ? opt.en : opt.he;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = label;
      btn.dataset.en = opt.en;
      btn.dataset.he = opt.he;
      if (showHebrew) btn.dir = 'ltr';
      else btn.dir = 'rtl';
      btn.addEventListener('click', function () {
        var isCorrect = (showHebrew && opt.en === correctEn) || (!showHebrew && opt.he === correctHe);
        quizAnswers.push({ correct: isCorrect });
        if (isCorrect) quizScore++;
        var allBtns = quizOptions.querySelectorAll('.quiz-option');
        allBtns.forEach(function (b) {
          b.disabled = true;
          var optEn = b.dataset.en;
          var optHe = b.dataset.he;
          if ((showHebrew && optEn === correctEn) || (!showHebrew && optHe === correctHe)) {
            b.classList.add('correct');
          } else if (b === btn && !isCorrect) {
            b.classList.add('wrong');
          }
        });
        setTimeout(function () {
          quizIndex++;
          showQuizQuestion();
        }, 800);
      });
      quizOptions.appendChild(btn);
    });
  }

  function finishQuiz() {
    quizContent.classList.add('hidden');
    quizResult.classList.remove('hidden');
    var total = quizAnswers.length;
    var pct = total ? Math.round((quizScore / total) * 100) : 0;
    quizGradeTitle.textContent = 'Your grade';
    quizGradeScore.textContent = quizScore + ' / ' + total;
    quizGradePct.textContent = pct + '%';
  }

  btnQuiz.addEventListener('click', startQuiz);
  btnBackQuiz.addEventListener('click', function () {
    quizView.classList.remove('active');
    homeView.classList.add('active');
  });
  btnQuizAgain.addEventListener('click', function () {
    quizView.classList.remove('active');
    homeView.classList.add('active');
    startQuiz();
  });
})();
