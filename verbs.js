// Hebrew verb data: infinitive + shoresh + present (4) + past (9) + future (9) + example
// Each form has he (plain) and he_nikud (with vowels).
// Cards generated in both directions (he->en, en->he).
window.VERBS = [
  {
    infinitive: { he: "לאכול", he_nikud: "לֶאֱכֹל", en: "to eat" },
    shoresh: "א.כ.ל",
    present: [
      { he: "אוכל", he_nikud: "אוֹכֵל", en: "eat (m.s.)" },
      { he: "אוכלת", he_nikud: "אוֹכֶלֶת", en: "eat (f.s.)" },
      { he: "אוכלים", he_nikud: "אוֹכְלִים", en: "eat (m.p.)" },
      { he: "אוכלות", he_nikud: "אוֹכְלוֹת", en: "eat (f.p.)" }
    ],
    past: [
      { he: "אכלתי", he_nikud: "אָכַלְתִּי", en: "I ate" },
      { he: "אכלת", he_nikud: "אָכַלְתָּ", en: "you ate (m.s.)" },
      { he: "אכלת", he_nikud: "אָכַלְתְּ", en: "you ate (f.s.)" },
      { he: "אכל", he_nikud: "אָכַל", en: "he ate" },
      { he: "אכלה", he_nikud: "אָכְלָה", en: "she ate" },
      { he: "אכלנו", he_nikud: "אָכַלְנוּ", en: "we ate" },
      { he: "אכלתם", he_nikud: "אֲכַלְתֶּם", en: "you ate (m.p.)" },
      { he: "אכלתן", he_nikud: "אֲכַלְתֶּן", en: "you ate (f.p.)" },
      { he: "אכלו", he_nikud: "אָכְלוּ", en: "they ate" }
    ],
    future: [
      { he: "אוכל", he_nikud: "אֹכַל", en: "I will eat" },
      { he: "תאכל", he_nikud: "תֹּאכַל", en: "you will eat (m.s.)" },
      { he: "תאכלי", he_nikud: "תֹּאכְלִי", en: "you will eat (f.s.)" },
      { he: "יאכל", he_nikud: "יֹאכַל", en: "he will eat" },
      { he: "תאכל", he_nikud: "תֹּאכַל", en: "she will eat" },
      { he: "נאכל", he_nikud: "נֹאכַל", en: "we will eat" },
      { he: "תאכלו", he_nikud: "תֹּאכְלוּ", en: "you will eat (m.p.)" },
      { he: "תאכלנה", he_nikud: "תֹּאכַלְנָה", en: "you will eat (f.p.)" },
      { he: "יאכלו", he_nikud: "יֹאכְלוּ", en: "they will eat" }
    ],
    example: { he: "אני אוכל פיצה.", he_nikud: "אֲנִי אוֹכֵל פִּיצָּה.", en: "I eat pizza." }
  },
  {
    infinitive: { he: "לבוא", he_nikud: "לָבוֹא", en: "to come" },
    shoresh: "ב.ו.א",
    present: [
      { he: "בא", he_nikud: "בָּא", en: "come (m.s.)" },
      { he: "באה", he_nikud: "בָּאָה", en: "come (f.s.)" },
      { he: "באים", he_nikud: "בָּאִים", en: "come (m.p.)" },
      { he: "באות", he_nikud: "בָּאוֹת", en: "come (f.p.)" }
    ],
    past: [
      { he: "באתי", he_nikud: "בָּאתִי", en: "I came" },
      { he: "באת", he_nikud: "בָּאתָ", en: "you came (m.s.)" },
      { he: "באת", he_nikud: "בָּאת", en: "you came (f.s.)" },
      { he: "בא", he_nikud: "בָּא", en: "he came" },
      { he: "באה", he_nikud: "בָּאָה", en: "she came" },
      { he: "באנו", he_nikud: "בָּאנוּ", en: "we came" },
      { he: "באתם", he_nikud: "בָּאתֶם", en: "you came (m.p.)" },
      { he: "באתן", he_nikud: "בָּאתֶן", en: "you came (f.p.)" },
      { he: "באו", he_nikud: "בָּאוּ", en: "they came" }
    ],
    future: [
      { he: "אבוא", he_nikud: "אָבוֹא", en: "I will come" },
      { he: "תבוא", he_nikud: "תָּבוֹא", en: "you will come (m.s.)" },
      { he: "תבואי", he_nikud: "תָּבוֹאִי", en: "you will come (f.s.)" },
      { he: "יבוא", he_nikud: "יָבוֹא", en: "he will come" },
      { he: "תבוא", he_nikud: "תָּבוֹא", en: "she will come" },
      { he: "נבוא", he_nikud: "נָבוֹא", en: "we will come" },
      { he: "תבואו", he_nikud: "תָּבוֹאוּ", en: "you will come (m.p.)" },
      { he: "תבואנה", he_nikud: "תָּבֹאנָה", en: "you will come (f.p.)" },
      { he: "יבואו", he_nikud: "יָבוֹאוּ", en: "they will come" }
    ],
    example: { he: "הוא בא הביתה מאוחר.", he_nikud: "הוּא בָּא הַבַּיְתָה מְאוּחָר.", en: "He comes home late." }
  },
  {
    infinitive: { he: "ללכת", he_nikud: "לָלֶכֶת", en: "to go" },
    shoresh: "ה.ל.כ",
    present: [
      { he: "הולך", he_nikud: "הוֹלֵךְ", en: "go (m.s.)" },
      { he: "הולכת", he_nikud: "הוֹלֶכֶת", en: "go (f.s.)" },
      { he: "הולכים", he_nikud: "הוֹלְכִים", en: "go (m.p.)" },
      { he: "הולכות", he_nikud: "הוֹלְכוֹת", en: "go (f.p.)" }
    ],
    past: [
      { he: "הלכתי", he_nikud: "הָלַכְתִּי", en: "I went" },
      { he: "הלכת", he_nikud: "הָלַכְתָּ", en: "you went (m.s.)" },
      { he: "הלכת", he_nikud: "הָלַכְתְּ", en: "you went (f.s.)" },
      { he: "הלך", he_nikud: "הָלַךְ", en: "he went" },
      { he: "הלכה", he_nikud: "הָלְכָה", en: "she went" },
      { he: "הלכנו", he_nikud: "הָלַכְנוּ", en: "we went" },
      { he: "הלכתם", he_nikud: "הֲלַכְתֶּם", en: "you went (m.p.)" },
      { he: "הלכתן", he_nikud: "הֲלַכְתֶּן", en: "you went (f.p.)" },
      { he: "הלכו", he_nikud: "הָלְכוּ", en: "they went" }
    ],
    future: [
      { he: "אלך", he_nikud: "אֵלֵךְ", en: "I will go" },
      { he: "תלך", he_nikud: "תֵּלֵךְ", en: "you will go (m.s.)" },
      { he: "תלכי", he_nikud: "תֵּלְכִי", en: "you will go (f.s.)" },
      { he: "ילך", he_nikud: "יֵלֵךְ", en: "he will go" },
      { he: "תלך", he_nikud: "תֵּלֵךְ", en: "she will go" },
      { he: "נלך", he_nikud: "נֵלֵךְ", en: "we will go" },
      { he: "תלכו", he_nikud: "תֵּלְכוּ", en: "you will go (m.p.)" },
      { he: "תלכנה", he_nikud: "תֵּלַכְנָה", en: "you will go (f.p.)" },
      { he: "ילכו", he_nikud: "יֵלְכוּ", en: "they will go" }
    ],
    example: { he: "אנחנו הולכים לים.", he_nikud: "אֲנַחְנוּ הוֹלְכִים לַיָּם.", en: "We are going to the sea." }
  },
  {
    infinitive: { he: "לחזור", he_nikud: "לַחֲזוֹר", en: "to return" },
    shoresh: "ח.ז.ר",
    present: [
      { he: "חוזר", he_nikud: "חוֹזֵר", en: "return (m.s.)" },
      { he: "חוזרת", he_nikud: "חוֹזֶרֶת", en: "return (f.s.)" },
      { he: "חוזרים", he_nikud: "חוֹזְרִים", en: "return (m.p.)" },
      { he: "חוזרות", he_nikud: "חוֹזְרוֹת", en: "return (f.p.)" }
    ],
    past: [
      { he: "חזרתי", he_nikud: "חָזַרְתִּי", en: "I returned" },
      { he: "חזרת", he_nikud: "חָזַרְתָּ", en: "you returned (m.s.)" },
      { he: "חזרת", he_nikud: "חָזַרְתְּ", en: "you returned (f.s.)" },
      { he: "חזר", he_nikud: "חָזַר", en: "he returned" },
      { he: "חזרה", he_nikud: "חָזְרָה", en: "she returned" },
      { he: "חזרנו", he_nikud: "חָזַרְנוּ", en: "we returned" },
      { he: "חזרתם", he_nikud: "חֲזַרְתֶּם", en: "you returned (m.p.)" },
      { he: "חזרתן", he_nikud: "חֲזַרְתֶּן", en: "you returned (f.p.)" },
      { he: "חזרו", he_nikud: "חָזְרוּ", en: "they returned" }
    ],
    future: [
      { he: "אחזור", he_nikud: "אֶחְזוֹר", en: "I will return" },
      { he: "תחזור", he_nikud: "תַּחְזוֹר", en: "you will return (m.s.)" },
      { he: "תחזרי", he_nikud: "תַּחְזְרִי", en: "you will return (f.s.)" },
      { he: "יחזור", he_nikud: "יַחְזוֹר", en: "he will return" },
      { he: "תחזור", he_nikud: "תַּחְזוֹר", en: "she will return" },
      { he: "נחזור", he_nikud: "נַחְזוֹר", en: "we will return" },
      { he: "תחזרו", he_nikud: "תַּחְזְרוּ", en: "you will return (m.p.)" },
      { he: "תחזרנה", he_nikud: "תַּחְזֹרְנָה", en: "you will return (f.p.)" },
      { he: "יחזרו", he_nikud: "יַחְזְרוּ", en: "they will return" }
    ],
    example: { he: "מתי אתה חוזר הביתה?", he_nikud: "מָתַי אַתָּה חוֹזֵר הַבַּיְתָה?", en: "When are you coming back home?" }
  },
  {
    infinitive: { he: "לדעת", he_nikud: "לָדַעַת", en: "to know" },
    shoresh: "י.ד.ע",
    present: [
      { he: "יודע", he_nikud: "יוֹדֵעַ", en: "know (m.s.)" },
      { he: "יודעת", he_nikud: "יוֹדַעַת", en: "know (f.s.)" },
      { he: "יודעים", he_nikud: "יוֹדְעִים", en: "know (m.p.)" },
      { he: "יודעות", he_nikud: "יוֹדְעוֹת", en: "know (f.p.)" }
    ],
    past: [
      { he: "ידעתי", he_nikud: "יָדַעְתִּי", en: "I knew" },
      { he: "ידעת", he_nikud: "יָדַעְתָּ", en: "you knew (m.s.)" },
      { he: "ידעת", he_nikud: "יָדַעְתְּ", en: "you knew (f.s.)" },
      { he: "ידע", he_nikud: "יָדַע", en: "he knew" },
      { he: "ידעה", he_nikud: "יָדְעָה", en: "she knew" },
      { he: "ידענו", he_nikud: "יָדַעְנוּ", en: "we knew" },
      { he: "ידעתם", he_nikud: "יְדַעְתֶּם", en: "you knew (m.p.)" },
      { he: "ידעתן", he_nikud: "יְדַעְתֶּן", en: "you knew (f.p.)" },
      { he: "ידעו", he_nikud: "יָדְעוּ", en: "they knew" }
    ],
    future: [
      { he: "אדע", he_nikud: "אֵדַע", en: "I will know" },
      { he: "תדע", he_nikud: "תֵּדַע", en: "you will know (m.s.)" },
      { he: "תדעי", he_nikud: "תֵּדְעִי", en: "you will know (f.s.)" },
      { he: "ידע", he_nikud: "יֵדַע", en: "he will know" },
      { he: "תדע", he_nikud: "תֵּדַע", en: "she will know" },
      { he: "נדע", he_nikud: "נֵדַע", en: "we will know" },
      { he: "תדעו", he_nikud: "תֵּדְעוּ", en: "you will know (m.p.)" },
      { he: "תדענה", he_nikud: "תֵּדַעְנָה", en: "you will know (f.p.)" },
      { he: "ידעו", he_nikud: "יֵדְעוּ", en: "they will know" }
    ],
    example: { he: "היא יודעת עברית.", he_nikud: "הִיא יוֹדַעַת עִבְרִית.", en: "She knows Hebrew." }
  },
  {
    infinitive: { he: "לשבת", he_nikud: "לָשֶׁבֶת", en: "to sit" },
    shoresh: "י.ש.ב",
    present: [
      { he: "יושב", he_nikud: "יוֹשֵׁב", en: "sit (m.s.)" },
      { he: "יושבת", he_nikud: "יוֹשֶׁבֶת", en: "sit (f.s.)" },
      { he: "יושבים", he_nikud: "יוֹשְׁבִים", en: "sit (m.p.)" },
      { he: "יושבות", he_nikud: "יוֹשְׁבוֹת", en: "sit (f.p.)" }
    ],
    past: [
      { he: "ישבתי", he_nikud: "יָשַׁבְתִּי", en: "I sat" },
      { he: "ישבת", he_nikud: "יָשַׁבְתָּ", en: "you sat (m.s.)" },
      { he: "ישבת", he_nikud: "יָשַׁבְתְּ", en: "you sat (f.s.)" },
      { he: "ישב", he_nikud: "יָשַׁב", en: "he sat" },
      { he: "ישבה", he_nikud: "יָשְׁבָה", en: "she sat" },
      { he: "ישבנו", he_nikud: "יָשַׁבְנוּ", en: "we sat" },
      { he: "ישבתם", he_nikud: "יְשַׁבְתֶּם", en: "you sat (m.p.)" },
      { he: "ישבתן", he_nikud: "יְשַׁבְתֶּן", en: "you sat (f.p.)" },
      { he: "ישבו", he_nikud: "יָשְׁבוּ", en: "they sat" }
    ],
    future: [
      { he: "אשב", he_nikud: "אֵשֵׁב", en: "I will sit" },
      { he: "תשב", he_nikud: "תֵּשֵׁב", en: "you will sit (m.s.)" },
      { he: "תשבי", he_nikud: "תֵּשְׁבִי", en: "you will sit (f.s.)" },
      { he: "ישב", he_nikud: "יֵשֵׁב", en: "he will sit" },
      { he: "תשב", he_nikud: "תֵּשֵׁב", en: "she will sit" },
      { he: "נשב", he_nikud: "נֵשֵׁב", en: "we will sit" },
      { he: "תשבו", he_nikud: "תֵּשְׁבוּ", en: "you will sit (m.p.)" },
      { he: "תשבנה", he_nikud: "תֵּשַׁבְנָה", en: "you will sit (f.p.)" },
      { he: "ישבו", he_nikud: "יֵשְׁבוּ", en: "they will sit" }
    ],
    example: { he: "הוא יושב על הכיסא.", he_nikud: "הוּא יוֹשֵׁב עַל הַכִּסֵּא.", en: "He sits on the chair." }
  },
  {
    infinitive: { he: "לישון", he_nikud: "לִישׁוֹן", en: "to sleep" },
    shoresh: "י.ש.נ",
    present: [
      { he: "ישן", he_nikud: "יָשֵׁן", en: "sleep (m.s.)" },
      { he: "ישנה", he_nikud: "יְשֵׁנָה", en: "sleep (f.s.)" },
      { he: "ישנים", he_nikud: "יְשֵׁנִים", en: "sleep (m.p.)" },
      { he: "ישנות", he_nikud: "יְשֵׁנוֹת", en: "sleep (f.p.)" }
    ],
    past: [
      { he: "ישנתי", he_nikud: "יָשַׁנְתִּי", en: "I slept" },
      { he: "ישנת", he_nikud: "יָשַׁנְתָּ", en: "you slept (m.s.)" },
      { he: "ישנת", he_nikud: "יָשַׁנְתְּ", en: "you slept (f.s.)" },
      { he: "ישן", he_nikud: "יָשַׁן", en: "he slept" },
      { he: "ישנה", he_nikud: "יָשְׁנָה", en: "she slept" },
      { he: "ישננו", he_nikud: "יָשַׁנּוּ", en: "we slept" },
      { he: "ישנתם", he_nikud: "יְשַׁנְתֶּם", en: "you slept (m.p.)" },
      { he: "ישנתן", he_nikud: "יְשַׁנְתֶּן", en: "you slept (f.p.)" },
      { he: "ישנו", he_nikud: "יָשְׁנוּ", en: "they slept" }
    ],
    future: [
      { he: "אישן", he_nikud: "אִישַׁן", en: "I will sleep" },
      { he: "תישן", he_nikud: "תִּישַׁן", en: "you will sleep (m.s.)" },
      { he: "תישני", he_nikud: "תִּישְׁנִי", en: "you will sleep (f.s.)" },
      { he: "יישן", he_nikud: "יִישַׁן", en: "he will sleep" },
      { he: "תישן", he_nikud: "תִּישַׁן", en: "she will sleep" },
      { he: "נישן", he_nikud: "נִישַׁן", en: "we will sleep" },
      { he: "תישנו", he_nikud: "תִּישְׁנוּ", en: "you will sleep (m.p.)" },
      { he: "תישנה", he_nikud: "תִּישַׁנָּה", en: "you will sleep (f.p.)" },
      { he: "יישנו", he_nikud: "יִישְׁנוּ", en: "they will sleep" }
    ],
    example: { he: "הילד ישן עכשיו.", he_nikud: "הַיֶּלֶד יָשֵׁן עַכְשָׁיו.", en: "The child is sleeping now." }
  },
  {
    infinitive: { he: "לבקר", he_nikud: "לְבַקֵּר", en: "to visit" },
    shoresh: "ב.ק.ר",
    present: [
      { he: "מבקר", he_nikud: "מְבַקֵּר", en: "visit (m.s.)" },
      { he: "מבקרת", he_nikud: "מְבַקֶּרֶת", en: "visit (f.s.)" },
      { he: "מבקרים", he_nikud: "מְבַקְּרִים", en: "visit (m.p.)" },
      { he: "מבקרות", he_nikud: "מְבַקְּרוֹת", en: "visit (f.p.)" }
    ],
    past: [
      { he: "ביקרתי", he_nikud: "בִּיקַּרְתִּי", en: "I visited" },
      { he: "ביקרת", he_nikud: "בִּיקַּרְתָּ", en: "you visited (m.s.)" },
      { he: "ביקרת", he_nikud: "בִּיקַּרְתְּ", en: "you visited (f.s.)" },
      { he: "ביקר", he_nikud: "בִּיקֵּר", en: "he visited" },
      { he: "ביקרה", he_nikud: "בִּיקְּרָה", en: "she visited" },
      { he: "ביקרנו", he_nikud: "בִּיקַּרְנוּ", en: "we visited" },
      { he: "ביקרתם", he_nikud: "בִּיקַּרְתֶּם", en: "you visited (m.p.)" },
      { he: "ביקרתן", he_nikud: "בִּיקַּרְתֶּן", en: "you visited (f.p.)" },
      { he: "ביקרו", he_nikud: "בִּיקְּרוּ", en: "they visited" }
    ],
    future: [
      { he: "אבקר", he_nikud: "אֲבַקֵּר", en: "I will visit" },
      { he: "תבקר", he_nikud: "תְּבַקֵּר", en: "you will visit (m.s.)" },
      { he: "תבקרי", he_nikud: "תְּבַקְּרִי", en: "you will visit (f.s.)" },
      { he: "יבקר", he_nikud: "יְבַקֵּר", en: "he will visit" },
      { he: "תבקר", he_nikud: "תְּבַקֵּר", en: "she will visit" },
      { he: "נבקר", he_nikud: "נְבַקֵּר", en: "we will visit" },
      { he: "תבקרו", he_nikud: "תְּבַקְּרוּ", en: "you will visit (m.p.)" },
      { he: "תבקרנה", he_nikud: "תְּבַקֵּרְנָה", en: "you will visit (f.p.)" },
      { he: "יבקרו", he_nikud: "יְבַקְּרוּ", en: "they will visit" }
    ],
    example: { he: "אנחנו מבקרים את הסבתא.", he_nikud: "אֲנַחְנוּ מְבַקְּרִים אֶת הַסַּבְתָּא.", en: "We visit grandma." }
  },
  {
    infinitive: { he: "להגיע", he_nikud: "לְהַגִּיעַ", en: "to arrive" },
    shoresh: "נ.ג.ע",
    present: [
      { he: "מגיע", he_nikud: "מַגִּיעַ", en: "arrive (m.s.)" },
      { he: "מגיעה", he_nikud: "מַגִּיעָה", en: "arrive (f.s.)" },
      { he: "מגיעים", he_nikud: "מַגִּיעִים", en: "arrive (m.p.)" },
      { he: "מגיעות", he_nikud: "מַגִּיעוֹת", en: "arrive (f.p.)" }
    ],
    past: [
      { he: "הגעתי", he_nikud: "הִגַּעְתִּי", en: "I arrived" },
      { he: "הגעת", he_nikud: "הִגַּעְתָּ", en: "you arrived (m.s.)" },
      { he: "הגעת", he_nikud: "הִגַּעְתְּ", en: "you arrived (f.s.)" },
      { he: "הגיע", he_nikud: "הִגִּיעַ", en: "he arrived" },
      { he: "הגיעה", he_nikud: "הִגִּיעָה", en: "she arrived" },
      { he: "הגענו", he_nikud: "הִגַּעְנוּ", en: "we arrived" },
      { he: "הגעתם", he_nikud: "הִגַּעְתֶּם", en: "you arrived (m.p.)" },
      { he: "הגעתן", he_nikud: "הִגַּעְתֶּן", en: "you arrived (f.p.)" },
      { he: "הגיעו", he_nikud: "הִגִּיעוּ", en: "they arrived" }
    ],
    future: [
      { he: "אגיע", he_nikud: "אַגִּיעַ", en: "I will arrive" },
      { he: "תגיע", he_nikud: "תַּגִּיעַ", en: "you will arrive (m.s.)" },
      { he: "תגיעי", he_nikud: "תַּגִּיעִי", en: "you will arrive (f.s.)" },
      { he: "יגיע", he_nikud: "יַגִּיעַ", en: "he will arrive" },
      { he: "תגיע", he_nikud: "תַּגִּיעַ", en: "she will arrive" },
      { he: "נגיע", he_nikud: "נַגִּיעַ", en: "we will arrive" },
      { he: "תגיעו", he_nikud: "תַּגִּיעוּ", en: "you will arrive (m.p.)" },
      { he: "תגענה", he_nikud: "תַּגַּעְנָה", en: "you will arrive (f.p.)" },
      { he: "יגיעו", he_nikud: "יַגִּיעוּ", en: "they will arrive" }
    ],
    example: { he: "הרכבת מגיעה בשעה שתיים.", he_nikud: "הָרַכֶּבֶת מַגִּיעָה בְּשָׁעָה שְׁתַּיִים.", en: "The train arrives at two o'clock." }
  },
  {
    infinitive: { he: "לטייל", he_nikud: "לְטַיֵּל", en: "to travel / tour" },
    shoresh: "ט.י.ל",
    present: [
      { he: "מטייל", he_nikud: "מְטַיֵּל", en: "travel (m.s.)" },
      { he: "מטיילה", he_nikud: "מְטַיֶּלֶת", en: "travel (f.s.)" },
      { he: "מטיילים", he_nikud: "מְטַיְּלִים", en: "travel (m.p.)" },
      { he: "מטיילות", he_nikud: "מְטַיְּלוֹת", en: "travel (f.p.)" }
    ],
    past: [
      { he: "טיילתי", he_nikud: "טִיַּלְתִּי", en: "I traveled" },
      { he: "טיילת", he_nikud: "טִיַּלְתָּ", en: "you traveled (m.s.)" },
      { he: "טיילת", he_nikud: "טִיַּלְתְּ", en: "you traveled (f.s.)" },
      { he: "טייל", he_nikud: "טִיֵּל", en: "he traveled" },
      { he: "טיילה", he_nikud: "טִיְּלָה", en: "she traveled" },
      { he: "טיילנו", he_nikud: "טִיַּלְנוּ", en: "we traveled" },
      { he: "טיילתם", he_nikud: "טִיַּלְתֶּם", en: "you traveled (m.p.)" },
      { he: "טיילתן", he_nikud: "טִיַּלְתֶּן", en: "you traveled (f.p.)" },
      { he: "טיילו", he_nikud: "טִיְּלוּ", en: "they traveled" }
    ],
    future: [
      { he: "אטייל", he_nikud: "אֲטַיֵּל", en: "I will tour" },
      { he: "תטייל", he_nikud: "תְּטַיֵּל", en: "you will tour (m.s.)" },
      { he: "תטיילי", he_nikud: "תְּטַיְּלִי", en: "you will tour (f.s.)" },
      { he: "יטייל", he_nikud: "יְטַיֵּל", en: "he will tour" },
      { he: "תטייל", he_nikud: "תְּטַיֵּל", en: "she will tour" },
      { he: "נטייל", he_nikud: "נְטַיֵּל", en: "we will tour" },
      { he: "תטיילו", he_nikud: "תְּטַיְּלוּ", en: "you will tour (m.p.)" },
      { he: "תטיילנה", he_nikud: "תְּטַיֵּלְנָה", en: "you will tour (f.p.)" },
      { he: "יטיילו", he_nikud: "יְטַיְּלוּ", en: "they will tour" }
    ],
    example: { he: "אנחנו מטיילים בירושלים.", he_nikud: "אֲנַחְנוּ מְטַיְּלִים בִּירוּשָׁלַיִם.", en: "We are touring in Jerusalem." }
  },
  {
    infinitive: { he: "להכין", he_nikud: "לְהָכִין", en: "to prepare" },
    shoresh: "כ.ו.נ",
    present: [
      { he: "מכין", he_nikud: "מָכִין", en: "prepare (m.s.)" },
      { he: "מכינה", he_nikud: "מְכִינָה", en: "prepare (f.s.)" },
      { he: "מכינים", he_nikud: "מְכִינִים", en: "prepare (m.p.)" },
      { he: "מכינות", he_nikud: "מְכִינוֹת", en: "prepare (f.p.)" }
    ],
    past: [
      { he: "הכנתי", he_nikud: "הֲכִינוֹתִי", en: "I prepared" },
      { he: "הכנת", he_nikud: "הֲכִינוֹתָ", en: "you prepared (m.s.)" },
      { he: "הכנת", he_nikud: "הֲכִינוֹת", en: "you prepared (f.s.)" },
      { he: "הכין", he_nikud: "הֵכִין", en: "he prepared" },
      { he: "הכינה", he_nikud: "הֵכִינָה", en: "she prepared" },
      { he: "הכנו", he_nikud: "הֲכִינוֹנוּ", en: "we prepared" },
      { he: "הכנתם", he_nikud: "הֲכִינוֹתֶם", en: "you prepared (m.p.)" },
      { he: "הכנתן", he_nikud: "הֲכִינוֹתֶן", en: "you prepared (f.p.)" },
      { he: "הכינו", he_nikud: "הֵכִינוּ", en: "they prepared" }
    ],
    future: [
      { he: "אכין", he_nikud: "אָכִין", en: "I will prepare" },
      { he: "תכין", he_nikud: "תָּכִין", en: "you will prepare (m.s.)" },
      { he: "תכיני", he_nikud: "תָּכִינִי", en: "you will prepare (f.s.)" },
      { he: "יכין", he_nikud: "יָכִין", en: "he will prepare" },
      { he: "תכין", he_nikud: "תָּכִין", en: "she will prepare" },
      { he: "נכין", he_nikud: "נָכִין", en: "we will prepare" },
      { he: "תכינו", he_nikud: "תָּכִינוּ", en: "you will prepare (m.p.)" },
      { he: "תכינה", he_nikud: "תָּכֵנָּה", en: "you will prepare (f.p.)" },
      { he: "יכינו", he_nikud: "יָכִינוּ", en: "they will prepare" }
    ],
    example: { he: "היא מכינה ארוחת ערב.", he_nikud: "הִיא מְכִינָה אֲרוּחַת עֶרֶב.", en: "She prepares dinner." }
  },
  {
    infinitive: { he: "להצטער", he_nikud: "לְהִצְטַעֵר", en: "to regret" },
    shoresh: "צ.ע.ר",
    present: [
      { he: "מצטער", he_nikud: "מִצְטַעֵר", en: "regret (m.s.)" },
      { he: "מצטערת", he_nikud: "מִצְטַעֶרֶת", en: "regret (f.s.)" },
      { he: "מצטערים", he_nikud: "מִצְטַעֲרִים", en: "regret (m.p.)" },
      { he: "מצטערות", he_nikud: "מִצְטַעֲרוֹת", en: "regret (f.p.)" }
    ],
    past: [
      { he: "הצטערתי", he_nikud: "הִצְטַעַרְתִּי", en: "I regretted" },
      { he: "הצטערת", he_nikud: "הִצְטַעַרְתָּ", en: "you regretted (m.s.)" },
      { he: "הצטערת", he_nikud: "הִצְטַעַרְתְּ", en: "you regretted (f.s.)" },
      { he: "הצטער", he_nikud: "הִצְטַעֵר", en: "he regretted" },
      { he: "הצטערה", he_nikud: "הִצְטַעֲרָה", en: "she regretted" },
      { he: "הצטערנו", he_nikud: "הִצְטַעַרְנוּ", en: "we regretted" },
      { he: "הצטערתם", he_nikud: "הִצְטַעַרְתֶּם", en: "you regretted (m.p.)" },
      { he: "הצטערתן", he_nikud: "הִצְטַעַרְתֶּן", en: "you regretted (f.p.)" },
      { he: "הצטערו", he_nikud: "הִצְטַעֲרוּ", en: "they regretted" }
    ],
    future: [
      { he: "אצטער", he_nikud: "אֶצְטַעֵר", en: "I will regret" },
      { he: "תצטער", he_nikud: "תִּצְטַעֵר", en: "you will regret (m.s.)" },
      { he: "תצטערי", he_nikud: "תִּצְטַעֲרִי", en: "you will regret (f.s.)" },
      { he: "יצטער", he_nikud: "יִצְטַעֵר", en: "he will regret" },
      { he: "תצטער", he_nikud: "תִּצְטַעֵר", en: "she will regret" },
      { he: "נצטער", he_nikud: "נִצְטַעֵר", en: "we will regret" },
      { he: "תצטערו", he_nikud: "תִּצְטַעֲרוּ", en: "you will regret (m.p.)" },
      { he: "תצטערנה", he_nikud: "תִּצְטַעַרְנָה", en: "you will regret (f.p.)" },
      { he: "יצטערו", he_nikud: "יִצְטַעֲרוּ", en: "they will regret" }
    ],
    example: { he: "אני מצטער על הטעות.", he_nikud: "אֲנִי מִצְטַעֵר עַל הַטָּעוּת.", en: "I regret the mistake." }
  },
  {
    infinitive: { he: "להצליח", he_nikud: "לְהַצְלִיחַ", en: "to succeed" },
    shoresh: "צ.ל.ח",
    present: [
      { he: "מצליח", he_nikud: "מַצְלִיחַ", en: "succeed (m.s.)" },
      { he: "מצליחה", he_nikud: "מַצְלִיחָה", en: "succeed (f.s.)" },
      { he: "מצליחים", he_nikud: "מַצְלִיחִים", en: "succeed (m.p.)" },
      { he: "מצליחות", he_nikud: "מַצְלִיחוֹת", en: "succeed (f.p.)" }
    ],
    past: [
      { he: "הצלחתי", he_nikud: "הִצְלַחְתִּי", en: "I succeeded" },
      { he: "הצלחת", he_nikud: "הִצְלַחְתָּ", en: "you succeeded (m.s.)" },
      { he: "הצלחת", he_nikud: "הִצְלַחְתְּ", en: "you succeeded (f.s.)" },
      { he: "הצליח", he_nikud: "הִצְלִיחַ", en: "he succeeded" },
      { he: "הצליחה", he_nikud: "הִצְלִיחָה", en: "she succeeded" },
      { he: "הצלחנו", he_nikud: "הִצְלַחְנוּ", en: "we succeeded" },
      { he: "הצלחתם", he_nikud: "הִצְלַחְתֶּם", en: "you succeeded (m.p.)" },
      { he: "הצלחתן", he_nikud: "הִצְלַחְתֶּן", en: "you succeeded (f.p.)" },
      { he: "הצליחו", he_nikud: "הִצְלִיחוּ", en: "they succeeded" }
    ],
    future: [
      { he: "אצליח", he_nikud: "אַצְלִיחַ", en: "I will succeed" },
      { he: "תצליח", he_nikud: "תַּצְלִיחַ", en: "you will succeed (m.s.)" },
      { he: "תצליחי", he_nikud: "תַּצְלִיחִי", en: "you will succeed (f.s.)" },
      { he: "יצליח", he_nikud: "יַצְלִיחַ", en: "he will succeed" },
      { he: "תצליח", he_nikud: "תַּצְלִיחַ", en: "she will succeed" },
      { he: "נצליח", he_nikud: "נַצְלִיחַ", en: "we will succeed" },
      { he: "תצליחו", he_nikud: "תַּצְלִיחוּ", en: "you will succeed (m.p.)" },
      { he: "תצלחנה", he_nikud: "תַּצְלַחְנָה", en: "you will succeed (f.p.)" },
      { he: "יצליחו", he_nikud: "יַצְלִיחוּ", en: "they will succeed" }
    ],
    example: { he: "הוא מצליח בכל דבר.", he_nikud: "הוּא מַצְלִיחַ בְּכָל דָּבָר.", en: "He succeeds at everything." }
  },
  {
    infinitive: { he: "להרגיש", he_nikud: "לְהַרְגִּישׁ", en: "to feel" },
    shoresh: "ר.ג.ש",
    present: [
      { he: "מרגיש", he_nikud: "מַרְגִּישׁ", en: "feel (m.s.)" },
      { he: "מרגישה", he_nikud: "מַרְגִּישָׁה", en: "feel (f.s.)" },
      { he: "מרגישים", he_nikud: "מַרְגִּישִׁים", en: "feel (m.p.)" },
      { he: "מרגישות", he_nikud: "מַרְגִּישׁוֹת", en: "feel (f.p.)" }
    ],
    past: [
      { he: "הרגשתי", he_nikud: "הִרְגַּשְׁתִּי", en: "I felt" },
      { he: "הרגשת", he_nikud: "הִרְגַּשְׁתָּ", en: "you felt (m.s.)" },
      { he: "הרגשת", he_nikud: "הִרְגַּשְׁתְּ", en: "you felt (f.s.)" },
      { he: "הרגיש", he_nikud: "הִרְגִּישׁ", en: "he felt" },
      { he: "הרגישה", he_nikud: "הִרְגִּישָׁה", en: "she felt" },
      { he: "הרגשנו", he_nikud: "הִרְגַּשְׁנוּ", en: "we felt" },
      { he: "הרגשתם", he_nikud: "הִרְגַּשְׁתֶּם", en: "you felt (m.p.)" },
      { he: "הרגשתן", he_nikud: "הִרְגַּשְׁתֶּן", en: "you felt (f.p.)" },
      { he: "הרגישו", he_nikud: "הִרְגִּישׁוּ", en: "they felt" }
    ],
    future: [
      { he: "ארגיש", he_nikud: "אַרְגִּישׁ", en: "I will feel" },
      { he: "תרגיש", he_nikud: "תַּרְגִּישׁ", en: "you will feel (m.s.)" },
      { he: "תרגישי", he_nikud: "תַּרְגִּישִׁי", en: "you will feel (f.s.)" },
      { he: "ירגיש", he_nikud: "יַרְגִּישׁ", en: "he will feel" },
      { he: "תרגיש", he_nikud: "תַּרְגִּישׁ", en: "she will feel" },
      { he: "נרגיש", he_nikud: "נַרְגִּישׁ", en: "we will feel" },
      { he: "תרגישו", he_nikud: "תַּרְגִּישׁוּ", en: "you will feel (m.p.)" },
      { he: "תרגשנה", he_nikud: "תַּרְגַּשְׁנָה", en: "you will feel (f.p.)" },
      { he: "ירגישו", he_nikud: "יַרְגִּישׁוּ", en: "they will feel" }
    ],
    example: { he: "אני מרגיש טוב היום.", he_nikud: "אֲנִי מַרְגִּישׁ טוֹב הַיּוֹם.", en: "I feel good today." }
  },
  {
    infinitive: { he: "לשחק", he_nikud: "לְשַׂחֵק", en: "to play" },
    shoresh: "ש.ח.ק",
    present: [
      { he: "משחק", he_nikud: "מְשַׂחֵק", en: "play (m.s.)" },
      { he: "משחקת", he_nikud: "מְשַׂחֶקֶת", en: "play (f.s.)" },
      { he: "משחקים", he_nikud: "מְשַׂחֲקִים", en: "play (m.p.)" },
      { he: "משחקות", he_nikud: "מְשַׂחֲקוֹת", en: "play (f.p.)" }
    ],
    past: [
      { he: "שיחקתי", he_nikud: "שִׂיחַקְתִּי", en: "I played" },
      { he: "שיחקת", he_nikud: "שִׂיחַקְתָּ", en: "you played (m.s.)" },
      { he: "שיחקת", he_nikud: "שִׂיחַקְתְּ", en: "you played (f.s.)" },
      { he: "שיחק", he_nikud: "שִׂיחֵק", en: "he played" },
      { he: "שיחקה", he_nikud: "שִׂיחֲקָה", en: "she played" },
      { he: "שיחקנו", he_nikud: "שִׂיחַקְנוּ", en: "we played" },
      { he: "שיחקתם", he_nikud: "שִׂיחַקְתֶּם", en: "you played (m.p.)" },
      { he: "שיחקתן", he_nikud: "שִׂיחַקְתֶּן", en: "you played (f.p.)" },
      { he: "שיחקו", he_nikud: "שִׂיחֲקוּ", en: "they played" }
    ],
    future: [
      { he: "אשחק", he_nikud: "אֲשַׂחֵק", en: "I will play" },
      { he: "תשחק", he_nikud: "תְּשַׂחֵק", en: "you will play (m.s.)" },
      { he: "תשחקי", he_nikud: "תְּשַׂחֲקִי", en: "you will play (f.s.)" },
      { he: "ישחק", he_nikud: "יְשַׂחֵק", en: "he will play" },
      { he: "תשחק", he_nikud: "תְּשַׂחֵק", en: "she will play" },
      { he: "נשחק", he_nikud: "נְשַׂחֵק", en: "we will play" },
      { he: "תשחקו", he_nikud: "תְּשַׂחֲקוּ", en: "you will play (m.p.)" },
      { he: "תשחקנה", he_nikud: "תְּשַׂחֵקְנָה", en: "you will play (f.p.)" },
      { he: "ישחקו", he_nikud: "יְשַׂחֲקוּ", en: "they will play" }
    ],
    example: { he: "הילדים משחקים בחוץ.", he_nikud: "הַיְּלָדִים מְשַׂחֲקִים בַּחוּץ.", en: "The children play outside." }
  },
  {
    infinitive: { he: "לנסוע", he_nikud: "לִנְסֹעַ", en: "to travel / ride" },
    shoresh: "נ.ס.ע",
    present: [
      { he: "נוסע", he_nikud: "נוֹסֵעַ", en: "travel (m.s.)" },
      { he: "נוסעת", he_nikud: "נוֹסַעַת", en: "travel (f.s.)" },
      { he: "נוסעים", he_nikud: "נוֹסְעִים", en: "travel (m.p.)" },
      { he: "נוסעות", he_nikud: "נוֹסְעוֹת", en: "travel (f.p.)" }
    ],
    past: [
      { he: "נסעתי", he_nikud: "נָסַעְתִּי", en: "I traveled" },
      { he: "נסעת", he_nikud: "נָסַעְתָּ", en: "you traveled (m.s.)" },
      { he: "נסעת", he_nikud: "נָסַעְתְּ", en: "you traveled (f.s.)" },
      { he: "נסע", he_nikud: "נָסַע", en: "he traveled" },
      { he: "נסעה", he_nikud: "נָסְעָה", en: "she traveled" },
      { he: "נסענו", he_nikud: "נָסַעְנוּ", en: "we traveled" },
      { he: "נסעתם", he_nikud: "נְסַעְתֶּם", en: "you traveled (m.p.)" },
      { he: "נסעתן", he_nikud: "נְסַעְתֶּן", en: "you traveled (f.p.)" },
      { he: "נסעו", he_nikud: "נָסְעוּ", en: "they traveled" }
    ],
    future: [
      { he: "אסע", he_nikud: "אֶסַּע", en: "I will travel" },
      { he: "תסע", he_nikud: "תִּסַּע", en: "you will travel (m.s.)" },
      { he: "תסעי", he_nikud: "תִּסְּעִי", en: "you will travel (f.s.)" },
      { he: "יסע", he_nikud: "יִסַּע", en: "he will travel" },
      { he: "תסע", he_nikud: "תִּסַּע", en: "she will travel" },
      { he: "נסע", he_nikud: "נִסַּע", en: "we will travel" },
      { he: "תסעו", he_nikud: "תִּסְּעוּ", en: "you will travel (m.p.)" },
      { he: "תסענה", he_nikud: "תִּסַּעְנָה", en: "you will travel (f.p.)" },
      { he: "יסעו", he_nikud: "יִסְּעוּ", en: "they will travel" }
    ],
    example: { he: "הוא נוסע לתל אביב.", he_nikud: "הוּא נוֹסֵעַ לְתֵל אָבִיב.", en: "He travels to Tel Aviv." }
  },
  {
    infinitive: { he: "לנוח", he_nikud: "לָנוּחַ", en: "to rest" },
    shoresh: "נ.ו.ח",
    present: [
      { he: "נח", he_nikud: "נָח", en: "rest (m.s.)" },
      { he: "נחה", he_nikud: "נָחָה", en: "rest (f.s.)" },
      { he: "נחים", he_nikud: "נָחִים", en: "rest (m.p.)" },
      { he: "נחות", he_nikud: "נָחוֹת", en: "rest (f.p.)" }
    ],
    past: [
      { he: "נחתי", he_nikud: "נָחְתִּי", en: "I rested" },
      { he: "נחת", he_nikud: "נַחְתָּ", en: "you rested (m.s.)" },
      { he: "נחת", he_nikud: "נַחְתְּ", en: "you rested (f.s.)" },
      { he: "נח", he_nikud: "נָח", en: "he rested" },
      { he: "נחה", he_nikud: "נָחָה", en: "she rested" },
      { he: "נחנו", he_nikud: "נַחְנוּ", en: "we rested" },
      { he: "נחתם", he_nikud: "נַחְתֶּם", en: "you rested (m.p.)" },
      { he: "נחתן", he_nikud: "נַחְתֶּן", en: "you rested (f.p.)" },
      { he: "נחו", he_nikud: "נָחוּ", en: "they rested" }
    ],
    future: [
      { he: "אנוח", he_nikud: "אָנוּחַ", en: "I will rest" },
      { he: "תנוח", he_nikud: "תָּנוּחַ", en: "you will rest (m.s.)" },
      { he: "תנוחי", he_nikud: "תָּנוּחִי", en: "you will rest (f.s.)" },
      { he: "ינוח", he_nikud: "יָנוּחַ", en: "he will rest" },
      { he: "תנוח", he_nikud: "תָּנוּחַ", en: "she will rest" },
      { he: "ננוח", he_nikud: "נָנוּחַ", en: "we will rest" },
      { he: "תנוחו", he_nikud: "תָּנוּחוּ", en: "you will rest (m.p.)" },
      { he: "תנחנה", he_nikud: "תָּנֹחְנָה", en: "you will rest (f.p.)" },
      { he: "ינוחו", he_nikud: "יָנוּחוּ", en: "they will rest" }
    ],
    example: { he: "אנחנו נחים בשבת.", he_nikud: "אֲנַחְנוּ נָחִים בְּשַׁבָּת.", en: "We rest on Shabbat." }
  },
  {
    infinitive: { he: "להימצא", he_nikud: "לְהִימָּצֵא", en: "to be found" },
    shoresh: "מ.צ.א",
    present: [
      { he: "נמצא", he_nikud: "נִמְצָא", en: "be found (m.s.)" },
      { he: "נמצאת", he_nikud: "נִמְצֵאת", en: "be found (f.s.)" },
      { he: "נמצאים", he_nikud: "נִמְצָאִים", en: "be found (m.p.)" },
      { he: "נמצאות", he_nikud: "נִמְצָאוֹת", en: "be found (f.p.)" }
    ],
    past: [
      { he: "נמצאתי", he_nikud: "נִמְצֵאתִי", en: "I was found" },
      { he: "נמצאת", he_nikud: "נִמְצֵאתָ", en: "you were found (m.s.)" },
      { he: "נמצאת", he_nikud: "נִמְצֵאת", en: "you were found (f.s.)" },
      { he: "נמצא", he_nikud: "נִמְצָא", en: "he was found" },
      { he: "נמצאה", he_nikud: "נִמְצְאָה", en: "she was found" },
      { he: "נמצאנו", he_nikud: "נִמְצֵאנוּ", en: "we were found" },
      { he: "נמצאתם", he_nikud: "נִמְצֵאתֶם", en: "you were found (m.p.)" },
      { he: "נמצאתן", he_nikud: "נִמְצֵאתֶן", en: "you were found (f.p.)" },
      { he: "נמצאו", he_nikud: "נִמְצְאוּ", en: "they were found" }
    ],
    future: [
      { he: "אמצא", he_nikud: "אִימָּצֵא", en: "I will be found" },
      { he: "תמצא", he_nikud: "תִּימָּצֵא", en: "you will be found (m.s.)" },
      { he: "תמצאי", he_nikud: "תִּימָּצְאִי", en: "you will be found (f.s.)" },
      { he: "ימצא", he_nikud: "יִימָּצֵא", en: "he will be found" },
      { he: "תמצא", he_nikud: "תִּימָּצֵא", en: "she will be found" },
      { he: "נמצא", he_nikud: "נִימָּצֵא", en: "we will be found" },
      { he: "תמצאו", he_nikud: "תִּימָּצְאוּ", en: "you will be found (m.p.)" },
      { he: "תמצאנה", he_nikud: "תִּימָּצֶאנָה", en: "you will be found (f.p.)" },
      { he: "ימצאו", he_nikud: "יִימָּצְאוּ", en: "they will be found" }
    ],
    example: { he: "המפתחות נמצאים על השולחן.", he_nikud: "הַמַּפְתְּחוֹת נִמְצָאִים עַל הַשֻּׁלְחָן.", en: "The keys are on the table." }
  },
  {
    infinitive: { he: "לעלות", he_nikud: "לַעֲלוֹת", en: "to go up" },
    shoresh: "ע.ל.ה",
    present: [
      { he: "עולה", he_nikud: "עוֹלֶה", en: "go up (m.s.)" },
      { he: "עולה", he_nikud: "עוֹלָה", en: "go up (f.s.)" },
      { he: "עולים", he_nikud: "עוֹלִים", en: "go up (m.p.)" },
      { he: "עולות", he_nikud: "עוֹלוֹת", en: "go up (f.p.)" }
    ],
    past: [
      { he: "עליתי", he_nikud: "עָלִיתִי", en: "I went up" },
      { he: "עלית", he_nikud: "עָלִיתָ", en: "you went up (m.s.)" },
      { he: "עלית", he_nikud: "עָלִית", en: "you went up (f.s.)" },
      { he: "עלה", he_nikud: "עָלָה", en: "he went up" },
      { he: "עלתה", he_nikud: "עָלְתָה", en: "she went up" },
      { he: "עלינו", he_nikud: "עָלִינוּ", en: "we went up" },
      { he: "עליתם", he_nikud: "עֲלִיתֶם", en: "you went up (m.p.)" },
      { he: "עליתן", he_nikud: "עֲלִיתֶן", en: "you went up (f.p.)" },
      { he: "עלו", he_nikud: "עָלוּ", en: "they went up" }
    ],
    future: [
      { he: "אעלה", he_nikud: "אֶעֱלֶה", en: "I will go up" },
      { he: "תעלה", he_nikud: "תַּעֲלֶה", en: "you will go up (m.s.)" },
      { he: "תעלי", he_nikud: "תַּעֲלִי", en: "you will go up (f.s.)" },
      { he: "יעלה", he_nikud: "יַעֲלֶה", en: "he will go up" },
      { he: "תעלה", he_nikud: "תַּעֲלֶה", en: "she will go up" },
      { he: "נעלה", he_nikud: "נַעֲלֶה", en: "we will go up" },
      { he: "תעלו", he_nikud: "תַּעֲלוּ", en: "you will go up (m.p.)" },
      { he: "תעלינה", he_nikud: "תַּעֲלֶינָה", en: "you will go up (f.p.)" },
      { he: "יעלו", he_nikud: "יַעֲלוּ", en: "they will go up" }
    ],
    example: { he: "הוא עולה במדרגות.", he_nikud: "הוּא עוֹלֶה בַּמַּדְרֵגוֹת.", en: "He goes up the stairs." }
  },
  {
    infinitive: { he: "לענות", he_nikud: "לַעֲנוֹת", en: "to answer" },
    shoresh: "ע.נ.ה",
    present: [
      { he: "עונה", he_nikud: "עוֹנֶה", en: "answer (m.s.)" },
      { he: "עונה", he_nikud: "עוֹנָה", en: "answer (f.s.)" },
      { he: "עונים", he_nikud: "עוֹנִים", en: "answer (m.p.)" },
      { he: "עונות", he_nikud: "עוֹנוֹת", en: "answer (f.p.)" }
    ],
    past: [
      { he: "עניתי", he_nikud: "עָנִיתִי", en: "I answered" },
      { he: "ענית", he_nikud: "עָנִיתָ", en: "you answered (m.s.)" },
      { he: "ענית", he_nikud: "עָנִית", en: "you answered (f.s.)" },
      { he: "ענה", he_nikud: "עָנָה", en: "he answered" },
      { he: "ענתה", he_nikud: "עָנְתָה", en: "she answered" },
      { he: "ענינו", he_nikud: "עָנִינוּ", en: "we answered" },
      { he: "עניתם", he_nikud: "עֲנִיתֶם", en: "you answered (m.p.)" },
      { he: "עניתן", he_nikud: "עֲנִיתֶן", en: "you answered (f.p.)" },
      { he: "ענו", he_nikud: "עָנוּ", en: "they answered" }
    ],
    future: [
      { he: "אענה", he_nikud: "אֶעֱנֶה", en: "I will answer" },
      { he: "תענה", he_nikud: "תַּעֲנֶה", en: "you will answer (m.s.)" },
      { he: "תעני", he_nikud: "תַּעֲנִי", en: "you will answer (f.s.)" },
      { he: "יענה", he_nikud: "יַעֲנֶה", en: "he will answer" },
      { he: "תענה", he_nikud: "תַּעֲנֶה", en: "she will answer" },
      { he: "נענה", he_nikud: "נַעֲנֶה", en: "we will answer" },
      { he: "תענו", he_nikud: "תַּעֲנוּ", en: "you will answer (m.p.)" },
      { he: "תענינה", he_nikud: "תַּעֲנֶינָה", en: "you will answer (f.p.)" },
      { he: "יענו", he_nikud: "יַעֲנוּ", en: "they will answer" }
    ],
    example: { he: "היא ענתה נכון.", he_nikud: "הִיא עָנְתָה נָכוֹן.", en: "She answered correctly." }
  },
  {
    infinitive: { he: "לפגוש", he_nikud: "לִפְגֹּשׁ", en: "to meet" },
    shoresh: "פ.ג.ש",
    present: [
      { he: "פוגש", he_nikud: "פּוֹגֵשׁ", en: "meet (m.s.)" },
      { he: "פוגשת", he_nikud: "פּוֹגֶשֶׁת", en: "meet (f.s.)" },
      { he: "פוגשים", he_nikud: "פּוֹגְשִׁים", en: "meet (m.p.)" },
      { he: "פוגשות", he_nikud: "פּוֹגְשׁוֹת", en: "meet (f.p.)" }
    ],
    past: [
      { he: "פגשתי", he_nikud: "פָּגַשְׁתִּי", en: "I met" },
      { he: "פגשת", he_nikud: "פָּגַשְׁתָּ", en: "you met (m.s.)" },
      { he: "פגשת", he_nikud: "פָּגַשְׁתְּ", en: "you met (f.s.)" },
      { he: "פגש", he_nikud: "פָּגַשׁ", en: "he met" },
      { he: "פגשה", he_nikud: "פָּגְשָׁה", en: "she met" },
      { he: "פגשנו", he_nikud: "פָּגַשְׁנוּ", en: "we met" },
      { he: "פגשתם", he_nikud: "פְּגַשְׁתֶּם", en: "you met (m.p.)" },
      { he: "פגשתן", he_nikud: "פְּגַשְׁתֶּן", en: "you met (f.p.)" },
      { he: "פגשו", he_nikud: "פָּגְשׁוּ", en: "they met" }
    ],
    future: [
      { he: "אפגוש", he_nikud: "אֶפְגֹּשׁ", en: "I will meet" },
      { he: "תפגוש", he_nikud: "תִּפְגֹּשׁ", en: "you will meet (m.s.)" },
      { he: "תפגשי", he_nikud: "תִּפְגְּשִׁי", en: "you will meet (f.s.)" },
      { he: "יפגוש", he_nikud: "יִפְגֹּשׁ", en: "he will meet" },
      { he: "תפגוש", he_nikud: "תִּפְגֹּשׁ", en: "she will meet" },
      { he: "נפגוש", he_nikud: "נִפְגֹּשׁ", en: "we will meet" },
      { he: "תפגשו", he_nikud: "תִּפְגְּשׁוּ", en: "you will meet (m.p.)" },
      { he: "תפגשנה", he_nikud: "תִּפְגַּשְׁנָה", en: "you will meet (f.p.)" },
      { he: "יפגשו", he_nikud: "יִפְגְּשׁוּ", en: "they will meet" }
    ],
    example: { he: "אנחנו פוגשים חברים בקפה.", he_nikud: "אֲנַחְנוּ פּוֹגְשִׁים חֲבֵרִים בַּקָּפֶה.", en: "We meet friends at the cafe." }
  },
  {
    infinitive: { he: "לקום", he_nikud: "לָקוּם", en: "to get up" },
    shoresh: "ק.ו.מ",
    present: [
      { he: "קם", he_nikud: "קָם", en: "get up (m.s.)" },
      { he: "קמה", he_nikud: "קָמָה", en: "get up (f.s.)" },
      { he: "קמים", he_nikud: "קָמִים", en: "get up (m.p.)" },
      { he: "קמות", he_nikud: "קָמוֹת", en: "get up (f.p.)" }
    ],
    past: [
      { he: "קמתי", he_nikud: "קַמְתִּי", en: "I got up" },
      { he: "קמת", he_nikud: "קַמְתָּ", en: "you got up (m.s.)" },
      { he: "קמת", he_nikud: "קַמְתְּ", en: "you got up (f.s.)" },
      { he: "קם", he_nikud: "קָם", en: "he got up" },
      { he: "קמה", he_nikud: "קָמָה", en: "she got up" },
      { he: "קמנו", he_nikud: "קַמְנוּ", en: "we got up" },
      { he: "קמתם", he_nikud: "קַמְתֶּם", en: "you got up (m.p.)" },
      { he: "קמתן", he_nikud: "קַמְתֶּן", en: "you got up (f.p.)" },
      { he: "קמו", he_nikud: "קָמוּ", en: "they got up" }
    ],
    future: [
      { he: "אקום", he_nikud: "אָקוּם", en: "I will get up" },
      { he: "תקום", he_nikud: "תָּקוּם", en: "you will get up (m.s.)" },
      { he: "תקומי", he_nikud: "תָּקוּמִי", en: "you will get up (f.s.)" },
      { he: "יקום", he_nikud: "יָקוּם", en: "he will get up" },
      { he: "תקום", he_nikud: "תָּקוּם", en: "she will get up" },
      { he: "נקום", he_nikud: "נָקוּם", en: "we will get up" },
      { he: "תקומו", he_nikud: "תָּקוּמוּ", en: "you will get up (m.p.)" },
      { he: "תקומנה", he_nikud: "תָּקֹמְנָה", en: "you will get up (f.p.)" },
      { he: "יקומו", he_nikud: "יָקוּמוּ", en: "they will get up" }
    ],
    example: { he: "אני קם בשש בבוקר.", he_nikud: "אֲנִי קָם בְּשֵׁשׁ בַּבֹּקֶר.", en: "I get up at six in the morning." }
  },
  {
    infinitive: { he: "לראות", he_nikud: "לִרְאוֹת", en: "to see" },
    shoresh: "ר.א.ה",
    present: [
      { he: "רואה", he_nikud: "רוֹאֶה", en: "see (m.s.)" },
      { he: "רואה", he_nikud: "רוֹאָה", en: "see (f.s.)" },
      { he: "רואים", he_nikud: "רוֹאִים", en: "see (m.p.)" },
      { he: "רואות", he_nikud: "רוֹאוֹת", en: "see (f.p.)" }
    ],
    past: [
      { he: "ראיתי", he_nikud: "רָאִיתִי", en: "I saw" },
      { he: "ראית", he_nikud: "רָאִיתָ", en: "you saw (m.s.)" },
      { he: "ראית", he_nikud: "רָאִית", en: "you saw (f.s.)" },
      { he: "ראה", he_nikud: "רָאָה", en: "he saw" },
      { he: "ראתה", he_nikud: "רָאֲתָה", en: "she saw" },
      { he: "ראינו", he_nikud: "רָאִינוּ", en: "we saw" },
      { he: "ראיתם", he_nikud: "רְאִיתֶם", en: "you saw (m.p.)" },
      { he: "ראיתן", he_nikud: "רְאִיתֶן", en: "you saw (f.p.)" },
      { he: "ראו", he_nikud: "רָאוּ", en: "they saw" }
    ],
    future: [
      { he: "אראה", he_nikud: "אֶרְאֶה", en: "I will see" },
      { he: "תראה", he_nikud: "תִּרְאֶה", en: "you will see (m.s.)" },
      { he: "תראי", he_nikud: "תִּרְאִי", en: "you will see (f.s.)" },
      { he: "יראה", he_nikud: "יִרְאֶה", en: "he will see" },
      { he: "תראה", he_nikud: "תִּרְאֶה", en: "she will see" },
      { he: "נראה", he_nikud: "נִרְאֶה", en: "we will see" },
      { he: "תראו", he_nikud: "תִּרְאוּ", en: "you will see (m.p.)" },
      { he: "תראינה", he_nikud: "תִּרְאֶינָה", en: "you will see (f.p.)" },
      { he: "יראו", he_nikud: "יִרְאוּ", en: "they will see" }
    ],
    example: { he: "אנחנו רואים סרט.", he_nikud: "אֲנַחְנוּ רוֹאִים סֶרֶט.", en: "We are watching a movie." }
  },
  {
    infinitive: { he: "לשאול", he_nikud: "לִשְׁאֹל", en: "to ask" },
    shoresh: "ש.א.ל",
    present: [
      { he: "שואל", he_nikud: "שׁוֹאֵל", en: "ask (m.s.)" },
      { he: "שואלת", he_nikud: "שׁוֹאֶלֶת", en: "ask (f.s.)" },
      { he: "שואלים", he_nikud: "שׁוֹאֲלִים", en: "ask (m.p.)" },
      { he: "שואלות", he_nikud: "שׁוֹאֲלוֹת", en: "ask (f.p.)" }
    ],
    past: [
      { he: "שאלתי", he_nikud: "שָׁאַלְתִּי", en: "I asked" },
      { he: "שאלת", he_nikud: "שָׁאַלְתָּ", en: "you asked (m.s.)" },
      { he: "שאלת", he_nikud: "שָׁאַלְתְּ", en: "you asked (f.s.)" },
      { he: "שאל", he_nikud: "שָׁאַל", en: "he asked" },
      { he: "שאלה", he_nikud: "שָׁאֲלָה", en: "she asked" },
      { he: "שאלנו", he_nikud: "שָׁאַלְנוּ", en: "we asked" },
      { he: "שאלתם", he_nikud: "שְׁאַלְתֶּם", en: "you asked (m.p.)" },
      { he: "שאלתן", he_nikud: "שְׁאַלְתֶּן", en: "you asked (f.p.)" },
      { he: "שאלו", he_nikud: "שָׁאֲלוּ", en: "they asked" }
    ],
    future: [
      { he: "אשאל", he_nikud: "אֶשְׁאַל", en: "I will ask" },
      { he: "תשאל", he_nikud: "תִּשְׁאַל", en: "you will ask (m.s.)" },
      { he: "תשאלי", he_nikud: "תִּשְׁאֲלִי", en: "you will ask (f.s.)" },
      { he: "ישאל", he_nikud: "יִשְׁאַל", en: "he will ask" },
      { he: "תשאל", he_nikud: "תִּשְׁאַל", en: "she will ask" },
      { he: "נשאל", he_nikud: "נִשְׁאַל", en: "we will ask" },
      { he: "תשאלו", he_nikud: "תִּשְׁאֲלוּ", en: "you will ask (m.p.)" },
      { he: "תשאלנה", he_nikud: "תִּשְׁאַלְנָה", en: "you will ask (f.p.)" },
      { he: "ישאלו", he_nikud: "יִשְׁאֲלוּ", en: "they will ask" }
    ],
    example: { he: "הוא שואל שאלה.", he_nikud: "הוּא שׁוֹאֵל שְׁאֵלָה.", en: "He asks a question." }
  },
  {
    infinitive: { he: "לשתות", he_nikud: "לִשְׁתּוֹת", en: "to drink" },
    shoresh: "ש.ת.ה",
    present: [
      { he: "שותה", he_nikud: "שׁוֹתֶה", en: "drink (m.s.)" },
      { he: "שותה", he_nikud: "שׁוֹתָה", en: "drink (f.s.)" },
      { he: "שותים", he_nikud: "שׁוֹתִים", en: "drink (m.p.)" },
      { he: "שותות", he_nikud: "שׁוֹתוֹת", en: "drink (f.p.)" }
    ],
    past: [
      { he: "שתיתי", he_nikud: "שָׁתִיתִי", en: "I drank" },
      { he: "שתית", he_nikud: "שָׁתִיתָ", en: "you drank (m.s.)" },
      { he: "שתית", he_nikud: "שָׁתִית", en: "you drank (f.s.)" },
      { he: "שתה", he_nikud: "שָׁתָה", en: "he drank" },
      { he: "שתתה", he_nikud: "שָׁתְתָה", en: "she drank" },
      { he: "שתינו", he_nikud: "שָׁתִינוּ", en: "we drank" },
      { he: "שתיתם", he_nikud: "שְׁתִיתֶם", en: "you drank (m.p.)" },
      { he: "שתיתן", he_nikud: "שְׁתִיתֶן", en: "you drank (f.p.)" },
      { he: "שתו", he_nikud: "שָׁתוּ", en: "they drank" }
    ],
    future: [
      { he: "אשתה", he_nikud: "אֶשְׁתֶּה", en: "I will drink" },
      { he: "תשתה", he_nikud: "תִּשְׁתֶּה", en: "you will drink (m.s.)" },
      { he: "תשתי", he_nikud: "תִּשְׁתִּי", en: "you will drink (f.s.)" },
      { he: "ישתה", he_nikud: "יִשְׁתֶּה", en: "he will drink" },
      { he: "תשתה", he_nikud: "תִּשְׁתֶּה", en: "she will drink" },
      { he: "נשתה", he_nikud: "נִשְׁתֶּה", en: "we will drink" },
      { he: "תשתו", he_nikud: "תִּשְׁתּוּ", en: "you will drink (m.p.)" },
      { he: "תשתינה", he_nikud: "תִּשְׁתֶּינָה", en: "you will drink (f.p.)" },
      { he: "ישתו", he_nikud: "יִשְׁתּוּ", en: "they will drink" }
    ],
    example: { he: "אני שותה קפה בבוקר.", he_nikud: "אֲנִי שׁוֹתֶה קָפֶה בַּבֹּקֶר.", en: "I drink coffee in the morning." }
  },
  {
    infinitive: { he: "לחשוב", he_nikud: "לַחְשֹׁב", en: "to think" },
    shoresh: "ח.ש.ב",
    present: [
      { he: "חושב", he_nikud: "חוֹשֵׁב", en: "think (m.s.)" },
      { he: "חושבת", he_nikud: "חוֹשֶׁבֶת", en: "think (f.s.)" },
      { he: "חושבים", he_nikud: "חוֹשְׁבִים", en: "think (m.p.)" },
      { he: "חושבות", he_nikud: "חוֹשְׁבוֹת", en: "think (f.p.)" }
    ],
    past: [
      { he: "חשבתי", he_nikud: "חָשַׁבְתִּי", en: "I thought" },
      { he: "חשבת", he_nikud: "חָשַׁבְתָּ", en: "you thought (m.s.)" },
      { he: "חשבת", he_nikud: "חָשַׁבְתְּ", en: "you thought (f.s.)" },
      { he: "חשב", he_nikud: "חָשַׁב", en: "he thought" },
      { he: "חשבה", he_nikud: "חָשְׁבָה", en: "she thought" },
      { he: "חשבנו", he_nikud: "חָשַׁבְנוּ", en: "we thought" },
      { he: "חשבתם", he_nikud: "חֲשַׁבְתֶּם", en: "you thought (m.p.)" },
      { he: "חשבתן", he_nikud: "חֲשַׁבְתֶּן", en: "you thought (f.p.)" },
      { he: "חשבו", he_nikud: "חָשְׁבוּ", en: "they thought" }
    ],
    future: [
      { he: "אחשוב", he_nikud: "אֶחְשֹׁב", en: "I will think" },
      { he: "תחשוב", he_nikud: "תַּחְשֹׁב", en: "you will think (m.s.)" },
      { he: "תחשבי", he_nikud: "תַּחְשְׁבִי", en: "you will think (f.s.)" },
      { he: "יחשוב", he_nikud: "יַחְשֹׁב", en: "he will think" },
      { he: "תחשוב", he_nikud: "תַּחְשֹׁב", en: "she will think" },
      { he: "נחשוב", he_nikud: "נַחְשֹׁב", en: "we will think" },
      { he: "תחשבו", he_nikud: "תַּחְשְׁבוּ", en: "you will think (m.p.)" },
      { he: "תחשבנה", he_nikud: "תַּחְשֹׁבְנָה", en: "you will think (f.p.)" },
      { he: "יחשבו", he_nikud: "יַחְשְׁבוּ", en: "they will think" }
    ],
    example: { he: "הוא חושב על הבעיה.", he_nikud: "הוּא חוֹשֵׁב עַל הַבְּעָיָה.", en: "He thinks about the problem." }
  },
  {
    infinitive: { he: "לתת", he_nikud: "לָתֵת", en: "to give" },
    shoresh: "נ.ת.נ",
    present: [
      { he: "נותן", he_nikud: "נוֹתֵן", en: "give (m.s.)" },
      { he: "נותנת", he_nikud: "נוֹתֶנֶת", en: "give (f.s.)" },
      { he: "נותנים", he_nikud: "נוֹתְנִים", en: "give (m.p.)" },
      { he: "נותנות", he_nikud: "נוֹתְנוֹת", en: "give (f.p.)" }
    ],
    past: [
      { he: "נתתי", he_nikud: "נָתַתִּי", en: "I gave" },
      { he: "נתת", he_nikud: "נָתַתָּ", en: "you gave (m.s.)" },
      { he: "נתת", he_nikud: "נָתַתְּ", en: "you gave (f.s.)" },
      { he: "נתן", he_nikud: "נָתַן", en: "he gave" },
      { he: "נתנה", he_nikud: "נָתְנָה", en: "she gave" },
      { he: "נתנו", he_nikud: "נָתַנּוּ", en: "we gave" },
      { he: "נתתם", he_nikud: "נְתַתֶּם", en: "you gave (m.p.)" },
      { he: "נתתן", he_nikud: "נְתַתֶּן", en: "you gave (f.p.)" },
      { he: "נתנו", he_nikud: "נָתְנוּ", en: "they gave" }
    ],
    future: [
      { he: "אתן", he_nikud: "אֶתֵּן", en: "I will give" },
      { he: "תתן", he_nikud: "תִּתֵּן", en: "you will give (m.s.)" },
      { he: "תתני", he_nikud: "תִּתְּנִי", en: "you will give (f.s.)" },
      { he: "יתן", he_nikud: "יִתֵּן", en: "he will give" },
      { he: "תתן", he_nikud: "תִּתֵּן", en: "she will give" },
      { he: "נתן", he_nikud: "נִתֵּן", en: "we will give" },
      { he: "תתנו", he_nikud: "תִּתְּנוּ", en: "you will give (m.p.)" },
      { he: "תתנה", he_nikud: "תִּתֵּנָה", en: "you will give (f.p.)" },
      { he: "יתנו", he_nikud: "יִתְּנוּ", en: "they will give" }
    ],
    example: { he: "היא נותנת לו מתנה.", he_nikud: "הִיא נוֹתֶנֶת לוֹ מַתָּנָה.", en: "She gives him a gift." }
  },
  {
    infinitive: { he: "לסגור", he_nikud: "לִסְגֹּר", en: "to close" },
    shoresh: "ס.ג.ר",
    present: [
      { he: "סוגר", he_nikud: "סוֹגֵר", en: "close (m.s.)" },
      { he: "סוגרת", he_nikud: "סוֹגֶרֶת", en: "close (f.s.)" },
      { he: "סוגרים", he_nikud: "סוֹגְרִים", en: "close (m.p.)" },
      { he: "סוגרות", he_nikud: "סוֹגְרוֹת", en: "close (f.p.)" }
    ],
    past: [
      { he: "סגרתי", he_nikud: "סָגַרְתִּי", en: "I closed" },
      { he: "סגרת", he_nikud: "סָגַרְתָּ", en: "you closed (m.s.)" },
      { he: "סגרת", he_nikud: "סָגַרְתְּ", en: "you closed (f.s.)" },
      { he: "סגר", he_nikud: "סָגַר", en: "he closed" },
      { he: "סגרה", he_nikud: "סָגְרָה", en: "she closed" },
      { he: "סגרנו", he_nikud: "סָגַרְנוּ", en: "we closed" },
      { he: "סגרתם", he_nikud: "סְגַרְתֶּם", en: "you closed (m.p.)" },
      { he: "סגרתן", he_nikud: "סְגַרְתֶּן", en: "you closed (f.p.)" },
      { he: "סגרו", he_nikud: "סָגְרוּ", en: "they closed" }
    ],
    future: [
      { he: "אסגור", he_nikud: "אֶסְגֹּר", en: "I will close" },
      { he: "תסגור", he_nikud: "תִּסְגֹּר", en: "you will close (m.s.)" },
      { he: "תסגרי", he_nikud: "תִּסְגְּרִי", en: "you will close (f.s.)" },
      { he: "יסגור", he_nikud: "יִסְגֹּר", en: "he will close" },
      { he: "תסגור", he_nikud: "תִּסְגֹּר", en: "she will close" },
      { he: "נסגור", he_nikud: "נִסְגֹּר", en: "we will close" },
      { he: "תסגרו", he_nikud: "תִּסְגְּרוּ", en: "you will close (m.p.)" },
      { he: "תסגרנה", he_nikud: "תִּסְגֹּרְנָה", en: "you will close (f.p.)" },
      { he: "יסגרו", he_nikud: "יִסְגְּרוּ", en: "they will close" }
    ],
    example: { he: "הוא סוגר את החנות.", he_nikud: "הוּא סוֹגֵר אֶת הַחֲנוּת.", en: "He closes the shop." }
  },
  {
    infinitive: { he: "לעשות", he_nikud: "לַעֲשׂוֹת", en: "to do / make" },
    shoresh: "ע.ש.ה",
    present: [
      { he: "עושה", he_nikud: "עוֹשֶׂה", en: "do (m.s.)" },
      { he: "עושה", he_nikud: "עוֹשָׂה", en: "do (f.s.)" },
      { he: "עושים", he_nikud: "עוֹשִׂים", en: "do (m.p.)" },
      { he: "עושות", he_nikud: "עוֹשׂוֹת", en: "do (f.p.)" }
    ],
    past: [
      { he: "עשיתי", he_nikud: "עָשִׂיתִי", en: "I did" },
      { he: "עשית", he_nikud: "עָשִׂיתָ", en: "you did (m.s.)" },
      { he: "עשית", he_nikud: "עָשִׂית", en: "you did (f.s.)" },
      { he: "עשה", he_nikud: "עָשָׂה", en: "he did" },
      { he: "עשתה", he_nikud: "עָשְׂתָה", en: "she did" },
      { he: "עשינו", he_nikud: "עָשִׂינוּ", en: "we did" },
      { he: "עשיתם", he_nikud: "עֲשִׂיתֶם", en: "you did (m.p.)" },
      { he: "עשיתן", he_nikud: "עֲשִׂיתֶן", en: "you did (f.p.)" },
      { he: "עשו", he_nikud: "עָשׂוּ", en: "they did" }
    ],
    future: [
      { he: "אעשה", he_nikud: "אֶעֱשֶׂה", en: "I will do" },
      { he: "תעשה", he_nikud: "תַּעֲשֶׂה", en: "you will do (m.s.)" },
      { he: "תעשי", he_nikud: "תַּעֲשִׂי", en: "you will do (f.s.)" },
      { he: "יעשה", he_nikud: "יַעֲשֶׂה", en: "he will do" },
      { he: "תעשה", he_nikud: "תַּעֲשֶׂה", en: "she will do" },
      { he: "נעשה", he_nikud: "נַעֲשֶׂה", en: "we will do" },
      { he: "תעשו", he_nikud: "תַּעֲשׂוּ", en: "you will do (m.p.)" },
      { he: "תעשינה", he_nikud: "תַּעֲשֶׂינָה", en: "you will do (f.p.)" },
      { he: "יעשו", he_nikud: "יַעֲשׂוּ", en: "they will do" }
    ],
    example: { he: "מה אתה עושה?", he_nikud: "מַה אַתָּה עוֹשֶׂה?", en: "What are you doing?" }
  },
  {
    infinitive: { he: "לפתוח", he_nikud: "לִפְתֹּחַ", en: "to open" },
    shoresh: "פ.ת.ח",
    present: [
      { he: "פותח", he_nikud: "פּוֹתֵחַ", en: "open (m.s.)" },
      { he: "פותחת", he_nikud: "פּוֹתַחַת", en: "open (f.s.)" },
      { he: "פותחים", he_nikud: "פּוֹתְחִים", en: "open (m.p.)" },
      { he: "פותחות", he_nikud: "פּוֹתְחוֹת", en: "open (f.p.)" }
    ],
    past: [
      { he: "פתחתי", he_nikud: "פָּתַחְתִּי", en: "I opened" },
      { he: "פתחת", he_nikud: "פָּתַחְתָּ", en: "you opened (m.s.)" },
      { he: "פתחת", he_nikud: "פָּתַחְתְּ", en: "you opened (f.s.)" },
      { he: "פתח", he_nikud: "פָּתַח", en: "he opened" },
      { he: "פתחה", he_nikud: "פָּתְחָה", en: "she opened" },
      { he: "פתחנו", he_nikud: "פָּתַחְנוּ", en: "we opened" },
      { he: "פתחתם", he_nikud: "פְּתַחְתֶּם", en: "you opened (m.p.)" },
      { he: "פתחתן", he_nikud: "פְּתַחְתֶּן", en: "you opened (f.p.)" },
      { he: "פתחו", he_nikud: "פָּתְחוּ", en: "they opened" }
    ],
    future: [
      { he: "אפתח", he_nikud: "אֶפְתַּח", en: "I will open" },
      { he: "תפתח", he_nikud: "תִּפְתַּח", en: "you will open (m.s.)" },
      { he: "תפתחי", he_nikud: "תִּפְתְּחִי", en: "you will open (f.s.)" },
      { he: "יפתח", he_nikud: "יִפְתַּח", en: "he will open" },
      { he: "תפתח", he_nikud: "תִּפְתַּח", en: "she will open" },
      { he: "נפתח", he_nikud: "נִפְתַּח", en: "we will open" },
      { he: "תפתחו", he_nikud: "תִּפְתְּחוּ", en: "you will open (m.p.)" },
      { he: "תפתחנה", he_nikud: "תִּפְתַּחְנָה", en: "you will open (f.p.)" },
      { he: "יפתחו", he_nikud: "יִפְתְּחוּ", en: "they will open" }
    ],
    example: { he: "הוא פותח את הדלת.", he_nikud: "הוּא פּוֹתֵחַ אֶת הַדֶּלֶת.", en: "He opens the door." }
  },
  {
    infinitive: { he: "לרקוד", he_nikud: "לִרְקֹד", en: "to dance" },
    shoresh: "ר.ק.ד",
    present: [
      { he: "רוקד", he_nikud: "רוֹקֵד", en: "dance (m.s.)" },
      { he: "רוקדת", he_nikud: "רוֹקֶדֶת", en: "dance (f.s.)" },
      { he: "רוקדים", he_nikud: "רוֹקְדִים", en: "dance (m.p.)" },
      { he: "רוקדות", he_nikud: "רוֹקְדוֹת", en: "dance (f.p.)" }
    ],
    past: [
      { he: "רקדתי", he_nikud: "רָקַדְתִּי", en: "I danced" },
      { he: "רקדת", he_nikud: "רָקַדְתָּ", en: "you danced (m.s.)" },
      { he: "רקדת", he_nikud: "רָקַדְתְּ", en: "you danced (f.s.)" },
      { he: "רקד", he_nikud: "רָקַד", en: "he danced" },
      { he: "רקדה", he_nikud: "רָקְדָה", en: "she danced" },
      { he: "רקדנו", he_nikud: "רָקַדְנוּ", en: "we danced" },
      { he: "רקדתם", he_nikud: "רְקַדְתֶּם", en: "you danced (m.p.)" },
      { he: "רקדתן", he_nikud: "רְקַדְתֶּן", en: "you danced (f.p.)" },
      { he: "רקדו", he_nikud: "רָקְדוּ", en: "they danced" }
    ],
    future: [
      { he: "ארקוד", he_nikud: "אֶרְקֹד", en: "I will dance" },
      { he: "תרקוד", he_nikud: "תִּרְקֹד", en: "you will dance (m.s.)" },
      { he: "תרקדי", he_nikud: "תִּרְקְדִי", en: "you will dance (f.s.)" },
      { he: "ירקוד", he_nikud: "יִרְקֹד", en: "he will dance" },
      { he: "תרקוד", he_nikud: "תִּרְקֹד", en: "she will dance" },
      { he: "נרקוד", he_nikud: "נִרְקֹד", en: "we will dance" },
      { he: "תרקדו", he_nikud: "תִּרְקְדוּ", en: "you will dance (m.p.)" },
      { he: "תרקדנה", he_nikud: "תִּרְקֹדְנָה", en: "you will dance (f.p.)" },
      { he: "ירקדו", he_nikud: "יִרְקְדוּ", en: "they will dance" }
    ],
    example: { he: "אנחנו רוקדים בחתונה.", he_nikud: "אֲנַחְנוּ רוֹקְדִים בַּחֲתוּנָּה.", en: "We dance at the wedding." }
  },
  {
    infinitive: { he: "לקנות", he_nikud: "לִקְנוֹת", en: "to buy" },
    shoresh: "ק.נ.ה",
    present: [
      { he: "קונה", he_nikud: "קוֹנֶה", en: "buy (m.s.)" },
      { he: "קונה", he_nikud: "קוֹנָה", en: "buy (f.s.)" },
      { he: "קונים", he_nikud: "קוֹנִים", en: "buy (m.p.)" },
      { he: "קונות", he_nikud: "קוֹנוֹת", en: "buy (f.p.)" }
    ],
    past: [
      { he: "קניתי", he_nikud: "קָנִיתִי", en: "I bought" },
      { he: "קנית", he_nikud: "קָנִיתָ", en: "you bought (m.s.)" },
      { he: "קנית", he_nikud: "קָנִית", en: "you bought (f.s.)" },
      { he: "קנה", he_nikud: "קָנָה", en: "he bought" },
      { he: "קנתה", he_nikud: "קָנְתָה", en: "she bought" },
      { he: "קנינו", he_nikud: "קָנִינוּ", en: "we bought" },
      { he: "קניתם", he_nikud: "קְנִיתֶם", en: "you bought (m.p.)" },
      { he: "קניתן", he_nikud: "קְנִיתֶן", en: "you bought (f.p.)" },
      { he: "קנו", he_nikud: "קָנוּ", en: "they bought" }
    ],
    future: [
      { he: "אקנה", he_nikud: "אֶקְנֶה", en: "I will buy" },
      { he: "תקנה", he_nikud: "תִּקְנֶה", en: "you will buy (m.s.)" },
      { he: "תקני", he_nikud: "תִּקְנִי", en: "you will buy (f.s.)" },
      { he: "יקנה", he_nikud: "יִקְנֶה", en: "he will buy" },
      { he: "תקנה", he_nikud: "תִּקְנֶה", en: "she will buy" },
      { he: "נקנה", he_nikud: "נִקְנֶה", en: "we will buy" },
      { he: "תקנו", he_nikud: "תִּקְנוּ", en: "you will buy (m.p.)" },
      { he: "תקנינה", he_nikud: "תִּקְנֶינָה", en: "you will buy (f.p.)" },
      { he: "יקנו", he_nikud: "יִקְנוּ", en: "they will buy" }
    ],
    example: { he: "היא קונה בגדים חדשים.", he_nikud: "הִיא קוֹנָה בְּגָדִים חֲדָשִׁים.", en: "She buys new clothes." }
  },
  {
    infinitive: { he: "לשלוח", he_nikud: "לִשְׁלֹחַ", en: "to send" },
    shoresh: "ש.ל.ח",
    present: [
      { he: "שולח", he_nikud: "שׁוֹלֵחַ", en: "send (m.s.)" },
      { he: "שולחת", he_nikud: "שׁוֹלַחַת", en: "send (f.s.)" },
      { he: "שולחים", he_nikud: "שׁוֹלְחִים", en: "send (m.p.)" },
      { he: "שולחות", he_nikud: "שׁוֹלְחוֹת", en: "send (f.p.)" }
    ],
    past: [
      { he: "שלחתי", he_nikud: "שָׁלַחְתִּי", en: "I sent" },
      { he: "שלחת", he_nikud: "שָׁלַחְתָּ", en: "you sent (m.s.)" },
      { he: "שלחת", he_nikud: "שָׁלַחְתְּ", en: "you sent (f.s.)" },
      { he: "שלח", he_nikud: "שָׁלַח", en: "he sent" },
      { he: "שלחה", he_nikud: "שָׁלְחָה", en: "she sent" },
      { he: "שלחנו", he_nikud: "שָׁלַחְנוּ", en: "we sent" },
      { he: "שלחתם", he_nikud: "שְׁלַחְתֶּם", en: "you sent (m.p.)" },
      { he: "שלחתן", he_nikud: "שְׁלַחְתֶּן", en: "you sent (f.p.)" },
      { he: "שלחו", he_nikud: "שָׁלְחוּ", en: "they sent" }
    ],
    future: [
      { he: "אשלח", he_nikud: "אֶשְׁלַח", en: "I will send" },
      { he: "תשלח", he_nikud: "תִּשְׁלַח", en: "you will send (m.s.)" },
      { he: "תשלחי", he_nikud: "תִּשְׁלְחִי", en: "you will send (f.s.)" },
      { he: "ישלח", he_nikud: "יִשְׁלַח", en: "he will send" },
      { he: "תשלח", he_nikud: "תִּשְׁלַח", en: "she will send" },
      { he: "נשלח", he_nikud: "נִשְׁלַח", en: "we will send" },
      { he: "תשלחו", he_nikud: "תִּשְׁלְחוּ", en: "you will send (m.p.)" },
      { he: "תשלחנה", he_nikud: "תִּשְׁלַחְנָה", en: "you will send (f.p.)" },
      { he: "ישלחו", he_nikud: "יִשְׁלְחוּ", en: "they will send" }
    ],
    example: { he: "אני שולח לך הודעה.", he_nikud: "אֲנִי שׁוֹלֵחַ לְךָ הוֹדָעָה.", en: "I am sending you a message." }
  },
  {
    infinitive: { he: "לשמוע", he_nikud: "לִשְׁמֹעַ", en: "to hear" },
    shoresh: "ש.מ.ע",
    present: [
      { he: "שומע", he_nikud: "שׁוֹמֵעַ", en: "hear (m.s.)" },
      { he: "שומעת", he_nikud: "שׁוֹמַעַת", en: "hear (f.s.)" },
      { he: "שומעים", he_nikud: "שׁוֹמְעִים", en: "hear (m.p.)" },
      { he: "שומעות", he_nikud: "שׁוֹמְעוֹת", en: "hear (f.p.)" }
    ],
    past: [
      { he: "שמעתי", he_nikud: "שָׁמַעְתִּי", en: "I heard" },
      { he: "שמעת", he_nikud: "שָׁמַעְתָּ", en: "you heard (m.s.)" },
      { he: "שמעת", he_nikud: "שָׁמַעְתְּ", en: "you heard (f.s.)" },
      { he: "שמע", he_nikud: "שָׁמַע", en: "he heard" },
      { he: "שמעה", he_nikud: "שָׁמְעָה", en: "she heard" },
      { he: "שמענו", he_nikud: "שָׁמַעְנוּ", en: "we heard" },
      { he: "שמעתם", he_nikud: "שְׁמַעְתֶּם", en: "you heard (m.p.)" },
      { he: "שמעתן", he_nikud: "שְׁמַעְתֶּן", en: "you heard (f.p.)" },
      { he: "שמעו", he_nikud: "שָׁמְעוּ", en: "they heard" }
    ],
    future: [
      { he: "אשמע", he_nikud: "אֶשְׁמַע", en: "I will hear" },
      { he: "תשמע", he_nikud: "תִּשְׁמַע", en: "you will hear (m.s.)" },
      { he: "תשמעי", he_nikud: "תִּשְׁמְעִי", en: "you will hear (f.s.)" },
      { he: "ישמע", he_nikud: "יִשְׁמַע", en: "he will hear" },
      { he: "תשמע", he_nikud: "תִּשְׁמַע", en: "she will hear" },
      { he: "נשמע", he_nikud: "נִשְׁמַע", en: "we will hear" },
      { he: "תשמעו", he_nikud: "תִּשְׁמְעוּ", en: "you will hear (m.p.)" },
      { he: "תשמענה", he_nikud: "תִּשְׁמַעְנָה", en: "you will hear (f.p.)" },
      { he: "ישמעו", he_nikud: "יִשְׁמְעוּ", en: "they will hear" }
    ],
    example: { he: "אני שומע מוזיקה.", he_nikud: "אֲנִי שׁוֹמֵעַ מוּזִיקָה.", en: "I am listening to music." }
  },
  {
    infinitive: { he: "לשיר", he_nikud: "לָשִׁיר", en: "to sing" },
    shoresh: "ש.י.ר",
    present: [
      { he: "שר", he_nikud: "שָׁר", en: "sing (m.s.)" },
      { he: "שרה", he_nikud: "שָׁרָה", en: "sing (f.s.)" },
      { he: "שרים", he_nikud: "שָׁרִים", en: "sing (m.p.)" },
      { he: "שרות", he_nikud: "שָׁרוֹת", en: "sing (f.p.)" }
    ],
    past: [
      { he: "שרתי", he_nikud: "שַׁרְתִּי", en: "I sang" },
      { he: "שרת", he_nikud: "שַׁרְתָּ", en: "you sang (m.s.)" },
      { he: "שרת", he_nikud: "שַׁרְתְּ", en: "you sang (f.s.)" },
      { he: "שר", he_nikud: "שָׁר", en: "he sang" },
      { he: "שרה", he_nikud: "שָׁרָה", en: "she sang" },
      { he: "שרנו", he_nikud: "שַׁרְנוּ", en: "we sang" },
      { he: "שרתם", he_nikud: "שַׁרְתֶּם", en: "you sang (m.p.)" },
      { he: "שרתן", he_nikud: "שַׁרְתֶּן", en: "you sang (f.p.)" },
      { he: "שרו", he_nikud: "שָׁרוּ", en: "they sang" }
    ],
    future: [
      { he: "אשיר", he_nikud: "אָשִׁיר", en: "I will sing" },
      { he: "תשיר", he_nikud: "תָּשִׁיר", en: "you will sing (m.s.)" },
      { he: "תשירי", he_nikud: "תָּשִׁירִי", en: "you will sing (f.s.)" },
      { he: "ישיר", he_nikud: "יָשִׁיר", en: "he will sing" },
      { he: "תשיר", he_nikud: "תָּשִׁיר", en: "she will sing" },
      { he: "נשיר", he_nikud: "נָשִׁיר", en: "we will sing" },
      { he: "תשירו", he_nikud: "תָּשִׁירוּ", en: "you will sing (m.p.)" },
      { he: "תשרנה", he_nikud: "תָּשֹׁרְנָה", en: "you will sing (f.p.)" },
      { he: "ישירו", he_nikud: "יָשִׁירוּ", en: "they will sing" }
    ],
    example: { he: "הילדים שרים שיר.", he_nikud: "הַיְּלָדִים שָׁרִים שִׁיר.", en: "The children sing a song." }
  },
  {
    infinitive: { he: "לתרגל", he_nikud: "לְתַרְגֵּל", en: "to practice" },
    shoresh: "ר.ג.ל",
    present: [
      { he: "מתרגל", he_nikud: "מְתַרְגֵּל", en: "practice (m.s.)" },
      { he: "מתרגלת", he_nikud: "מְתַרְגֶּלֶת", en: "practice (f.s.)" },
      { he: "מתרגלים", he_nikud: "מְתַרְגְּלִים", en: "practice (m.p.)" },
      { he: "מתרגלות", he_nikud: "מְתַרְגְּלוֹת", en: "practice (f.p.)" }
    ],
    past: [
      { he: "תרגלתי", he_nikud: "תִּרְגַּלְתִּי", en: "I practiced" },
      { he: "תרגלת", he_nikud: "תִּרְגַּלְתָּ", en: "you practiced (m.s.)" },
      { he: "תרגלת", he_nikud: "תִּרְגַּלְתְּ", en: "you practiced (f.s.)" },
      { he: "תרגל", he_nikud: "תִּרְגֵּל", en: "he practiced" },
      { he: "תרגלה", he_nikud: "תִּרְגְּלָה", en: "she practiced" },
      { he: "תרגלנו", he_nikud: "תִּרְגַּלְנוּ", en: "we practiced" },
      { he: "תרגלתם", he_nikud: "תִּרְגַּלְתֶּם", en: "you practiced (m.p.)" },
      { he: "תרגלתן", he_nikud: "תִּרְגַּלְתֶּן", en: "you practiced (f.p.)" },
      { he: "תרגלו", he_nikud: "תִּרְגְּלוּ", en: "they practiced" }
    ],
    future: [
      { he: "אתרגל", he_nikud: "אֲתַרְגֵּל", en: "I will practice" },
      { he: "תתרגל", he_nikud: "תְּתַרְגֵּל", en: "you will practice (m.s.)" },
      { he: "תתרגלי", he_nikud: "תְּתַרְגְּלִי", en: "you will practice (f.s.)" },
      { he: "יתרגל", he_nikud: "יְתַרְגֵּל", en: "he will practice" },
      { he: "תתרגל", he_nikud: "תְּתַרְגֵּל", en: "she will practice" },
      { he: "נתרגל", he_nikud: "נְתַרְגֵּל", en: "we will practice" },
      { he: "תתרגלו", he_nikud: "תְּתַרְגְּלוּ", en: "you will practice (m.p.)" },
      { he: "תתרגלנה", he_nikud: "תְּתַרְגֵּלְנָה", en: "you will practice (f.p.)" },
      { he: "יתרגלו", he_nikud: "יְתַרְגְּלוּ", en: "they will practice" }
    ],
    example: { he: "הוא מתרגל עברית כל יום.", he_nikud: "הוּא מְתַרְגֵּל עִבְרִית כָּל יוֹם.", en: "He practices Hebrew every day." }
  },
  {
    infinitive: { he: "לדבר", he_nikud: "לְדַבֵּר", en: "to speak" },
    shoresh: "ד.ב.ר",
    present: [
      { he: "מדבר", he_nikud: "מְדַבֵּר", en: "speak (m.s.)" },
      { he: "מדברת", he_nikud: "מְדַבֶּרֶת", en: "speak (f.s.)" },
      { he: "מדברים", he_nikud: "מְדַבְּרִים", en: "speak (m.p.)" },
      { he: "מדברות", he_nikud: "מְדַבְּרוֹת", en: "speak (f.p.)" }
    ],
    past: [
      { he: "דיברתי", he_nikud: "דִּיבַּרְתִּי", en: "I spoke" },
      { he: "דיברת", he_nikud: "דִּיבַּרְתָּ", en: "you spoke (m.s.)" },
      { he: "דיברת", he_nikud: "דִּיבַּרְתְּ", en: "you spoke (f.s.)" },
      { he: "דיבר", he_nikud: "דִּיבֵּר", en: "he spoke" },
      { he: "דיברה", he_nikud: "דִּיבְּרָה", en: "she spoke" },
      { he: "דיברנו", he_nikud: "דִּיבַּרְנוּ", en: "we spoke" },
      { he: "דיברתם", he_nikud: "דִּיבַּרְתֶּם", en: "you spoke (m.p.)" },
      { he: "דיברתן", he_nikud: "דִּיבַּרְתֶּן", en: "you spoke (f.p.)" },
      { he: "דיברו", he_nikud: "דִּיבְּרוּ", en: "they spoke" }
    ],
    future: [
      { he: "אדבר", he_nikud: "אֲדַבֵּר", en: "I will speak" },
      { he: "תדבר", he_nikud: "תְּדַבֵּר", en: "you will speak (m.s.)" },
      { he: "תדברי", he_nikud: "תְּדַבְּרִי", en: "you will speak (f.s.)" },
      { he: "ידבר", he_nikud: "יְדַבֵּר", en: "he will speak" },
      { he: "תדבר", he_nikud: "תְּדַבֵּר", en: "she will speak" },
      { he: "נדבר", he_nikud: "נְדַבֵּר", en: "we will speak" },
      { he: "תדברו", he_nikud: "תְּדַבְּרוּ", en: "you will speak (m.p.)" },
      { he: "תדברנה", he_nikud: "תְּדַבֵּרְנָה", en: "you will speak (f.p.)" },
      { he: "ידברו", he_nikud: "יְדַבְּרוּ", en: "they will speak" }
    ],
    example: { he: "היא מדברת בטלפון.", he_nikud: "הִיא מְדַבֶּרֶת בַּטֶּלֶפוֹן.", en: "She is speaking on the phone." }
  },
  {
    infinitive: { he: "לספר", he_nikud: "לְסַפֵּר", en: "to tell" },
    shoresh: "ס.פ.ר",
    present: [
      { he: "מספר", he_nikud: "מְסַפֵּר", en: "tell (m.s.)" },
      { he: "מספרת", he_nikud: "מְסַפֶּרֶת", en: "tell (f.s.)" },
      { he: "מספרים", he_nikud: "מְסַפְּרִים", en: "tell (m.p.)" },
      { he: "מספרות", he_nikud: "מְסַפְּרוֹת", en: "tell (f.p.)" }
    ],
    past: [
      { he: "סיפרתי", he_nikud: "סִיפַּרְתִּי", en: "I told" },
      { he: "סיפרת", he_nikud: "סִיפַּרְתָּ", en: "you told (m.s.)" },
      { he: "סיפרת", he_nikud: "סִיפַּרְתְּ", en: "you told (f.s.)" },
      { he: "סיפר", he_nikud: "סִיפֵּר", en: "he told" },
      { he: "סיפרה", he_nikud: "סִיפְּרָה", en: "she told" },
      { he: "סיפרנו", he_nikud: "סִיפַּרְנוּ", en: "we told" },
      { he: "סיפרתם", he_nikud: "סִיפַּרְתֶּם", en: "you told (m.p.)" },
      { he: "סיפרתן", he_nikud: "סִיפַּרְתֶּן", en: "you told (f.p.)" },
      { he: "סיפרו", he_nikud: "סִיפְּרוּ", en: "they told" }
    ],
    future: [
      { he: "אספר", he_nikud: "אֲסַפֵּר", en: "I will tell" },
      { he: "תספר", he_nikud: "תְּסַפֵּר", en: "you will tell (m.s.)" },
      { he: "תספרי", he_nikud: "תְּסַפְּרִי", en: "you will tell (f.s.)" },
      { he: "יספר", he_nikud: "יְסַפֵּר", en: "he will tell" },
      { he: "תספר", he_nikud: "תְּסַפֵּר", en: "she will tell" },
      { he: "נספר", he_nikud: "נְסַפֵּר", en: "we will tell" },
      { he: "תספרו", he_nikud: "תְּסַפְּרוּ", en: "you will tell (m.p.)" },
      { he: "תספרנה", he_nikud: "תְּסַפֵּרְנָה", en: "you will tell (f.p.)" },
      { he: "יספרו", he_nikud: "יְסַפְּרוּ", en: "they will tell" }
    ],
    example: { he: "הוא מספר סיפור.", he_nikud: "הוּא מְסַפֵּר סִיפּוּר.", en: "He tells a story." }
  },
  {
    infinitive: { he: "להסביר", he_nikud: "לְהַסְבִּיר", en: "to explain" },
    shoresh: "ס.ב.ר",
    present: [
      { he: "מסביר", he_nikud: "מַסְבִּיר", en: "explain (m.s.)" },
      { he: "מסבירה", he_nikud: "מַסְבִּירָה", en: "explain (f.s.)" },
      { he: "מסבירים", he_nikud: "מַסְבִּירִים", en: "explain (m.p.)" },
      { he: "מסבירות", he_nikud: "מַסְבִּירוֹת", en: "explain (f.p.)" }
    ],
    past: [
      { he: "הסברתי", he_nikud: "הִסְבַּרְתִּי", en: "I explained" },
      { he: "הסברת", he_nikud: "הִסְבַּרְתָּ", en: "you explained (m.s.)" },
      { he: "הסברת", he_nikud: "הִסְבַּרְתְּ", en: "you explained (f.s.)" },
      { he: "הסביר", he_nikud: "הִסְבִּיר", en: "he explained" },
      { he: "הסבירה", he_nikud: "הִסְבִּירָה", en: "she explained" },
      { he: "הסברנו", he_nikud: "הִסְבַּרְנוּ", en: "we explained" },
      { he: "הסברתם", he_nikud: "הִסְבַּרְתֶּם", en: "you explained (m.p.)" },
      { he: "הסברתן", he_nikud: "הִסְבַּרְתֶּן", en: "you explained (f.p.)" },
      { he: "הסבירו", he_nikud: "הִסְבִּירוּ", en: "they explained" }
    ],
    future: [
      { he: "אסביר", he_nikud: "אַסְבִּיר", en: "I will explain" },
      { he: "תסביר", he_nikud: "תַּסְבִּיר", en: "you will explain (m.s.)" },
      { he: "תסבירי", he_nikud: "תַּסְבִּירִי", en: "you will explain (f.s.)" },
      { he: "יסביר", he_nikud: "יַסְבִּיר", en: "he will explain" },
      { he: "תסביר", he_nikud: "תַּסְבִּיר", en: "she will explain" },
      { he: "נסביר", he_nikud: "נַסְבִּיר", en: "we will explain" },
      { he: "תסבירו", he_nikud: "תַּסְבִּירוּ", en: "you will explain (m.p.)" },
      { he: "תסברנה", he_nikud: "תַּסְבֵּרְנָה", en: "you will explain (f.p.)" },
      { he: "יסבירו", he_nikud: "יַסְבִּירוּ", en: "they will explain" }
    ],
    example: { he: "המורה מסביר את השיעור.", he_nikud: "הַמּוֹרֶה מַסְבִּיר אֶת הַשִּׁעוּר.", en: "The teacher explains the lesson." }
  },
  {
    infinitive: { he: "לשלם", he_nikud: "לְשַׁלֵּם", en: "to pay" },
    shoresh: "ש.ל.מ",
    present: [
      { he: "משלם", he_nikud: "מְשַׁלֵּם", en: "pay (m.s.)" },
      { he: "משלמת", he_nikud: "מְשַׁלֶּמֶת", en: "pay (f.s.)" },
      { he: "משלמים", he_nikud: "מְשַׁלְּמִים", en: "pay (m.p.)" },
      { he: "משלמות", he_nikud: "מְשַׁלְּמוֹת", en: "pay (f.p.)" }
    ],
    past: [
      { he: "שילמתי", he_nikud: "שִׁילַּמְתִּי", en: "I paid" },
      { he: "שילמת", he_nikud: "שִׁילַּמְתָּ", en: "you paid (m.s.)" },
      { he: "שילמת", he_nikud: "שִׁילַּמְתְּ", en: "you paid (f.s.)" },
      { he: "שילם", he_nikud: "שִׁילֵּם", en: "he paid" },
      { he: "שילמה", he_nikud: "שִׁילְּמָה", en: "she paid" },
      { he: "שילמנו", he_nikud: "שִׁילַּמְנוּ", en: "we paid" },
      { he: "שילמתם", he_nikud: "שִׁילַּמְתֶּם", en: "you paid (m.p.)" },
      { he: "שילמתן", he_nikud: "שִׁילַּמְתֶּן", en: "you paid (f.p.)" },
      { he: "שילמו", he_nikud: "שִׁילְּמוּ", en: "they paid" }
    ],
    future: [
      { he: "אשלם", he_nikud: "אֲשַׁלֵּם", en: "I will pay" },
      { he: "תשלם", he_nikud: "תְּשַׁלֵּם", en: "you will pay (m.s.)" },
      { he: "תשלמי", he_nikud: "תְּשַׁלְּמִי", en: "you will pay (f.s.)" },
      { he: "ישלם", he_nikud: "יְשַׁלֵּם", en: "he will pay" },
      { he: "תשלם", he_nikud: "תְּשַׁלֵּם", en: "she will pay" },
      { he: "נשלם", he_nikud: "נְשַׁלֵּם", en: "we will pay" },
      { he: "תשלמו", he_nikud: "תְּשַׁלְּמוּ", en: "you will pay (m.p.)" },
      { he: "תשלמנה", he_nikud: "תְּשַׁלֵּמְנָה", en: "you will pay (f.p.)" },
      { he: "ישלמו", he_nikud: "יְשַׁלְּמוּ", en: "they will pay" }
    ],
    example: { he: "מי משלם את החשבון?", he_nikud: "מִי מְשַׁלֵּם אֶת הַחֶשְׁבּוֹן?", en: "Who pays the bill?" }
  },
  {
    infinitive: { he: "ללמד", he_nikud: "לְלַמֵּד", en: "to teach" },
    shoresh: "ל.מ.ד",
    present: [
      { he: "מלמד", he_nikud: "מְלַמֵּד", en: "teach (m.s.)" },
      { he: "מלמדת", he_nikud: "מְלַמֶּדֶת", en: "teach (f.s.)" },
      { he: "מלמדים", he_nikud: "מְלַמְּדִים", en: "teach (m.p.)" },
      { he: "מלמדות", he_nikud: "מְלַמְּדוֹת", en: "teach (f.p.)" }
    ],
    past: [
      { he: "לימדתי", he_nikud: "לִימַּדְתִּי", en: "I taught" },
      { he: "לימדת", he_nikud: "לִימַּדְתָּ", en: "you taught (m.s.)" },
      { he: "לימדת", he_nikud: "לִימַּדְתְּ", en: "you taught (f.s.)" },
      { he: "לימד", he_nikud: "לִימֵּד", en: "he taught" },
      { he: "לימדה", he_nikud: "לִימְּדָה", en: "she taught" },
      { he: "לימדנו", he_nikud: "לִימַּדְנוּ", en: "we taught" },
      { he: "לימדתם", he_nikud: "לִימַּדְתֶּם", en: "you taught (m.p.)" },
      { he: "לימדתן", he_nikud: "לִימַּדְתֶּן", en: "you taught (f.p.)" },
      { he: "לימדו", he_nikud: "לִימְּדוּ", en: "they taught" }
    ],
    future: [
      { he: "אלמד", he_nikud: "אֲלַמֵּד", en: "I will teach" },
      { he: "תלמד", he_nikud: "תְּלַמֵּד", en: "you will teach (m.s.)" },
      { he: "תלמדי", he_nikud: "תְּלַמְּדִי", en: "you will teach (f.s.)" },
      { he: "ילמד", he_nikud: "יְלַמֵּד", en: "he will teach" },
      { he: "תלמד", he_nikud: "תְּלַמֵּד", en: "she will teach" },
      { he: "נלמד", he_nikud: "נְלַמֵּד", en: "we will teach" },
      { he: "תלמדו", he_nikud: "תְּלַמְּדוּ", en: "you will teach (m.p.)" },
      { he: "תלמדנה", he_nikud: "תְּלַמֵּדְנָה", en: "you will teach (f.p.)" },
      { he: "ילמדו", he_nikud: "יְלַמְּדוּ", en: "they will teach" }
    ],
    example: { he: "המורה מלמד עברית.", he_nikud: "הַמּוֹרֶה מְלַמֵּד עִבְרִית.", en: "The teacher teaches Hebrew." }
  },
  {
    infinitive: { he: "לנקות", he_nikud: "לְנַקּוֹת", en: "to clean" },
    shoresh: "נ.ק.ה",
    present: [
      { he: "מנקה", he_nikud: "מְנַקֶּה", en: "clean (m.s.)" },
      { he: "מנקה", he_nikud: "מְנַקָּה", en: "clean (f.s.)" },
      { he: "מנקים", he_nikud: "מְנַקִּים", en: "clean (m.p.)" },
      { he: "מנקות", he_nikud: "מְנַקּוֹת", en: "clean (f.p.)" }
    ],
    past: [
      { he: "ניקיתי", he_nikud: "נִיקִּיתִי", en: "I cleaned" },
      { he: "ניקית", he_nikud: "נִיקִּיתָ", en: "you cleaned (m.s.)" },
      { he: "ניקית", he_nikud: "נִיקִּית", en: "you cleaned (f.s.)" },
      { he: "ניקה", he_nikud: "נִיקָּה", en: "he cleaned" },
      { he: "ניקתה", he_nikud: "נִיקְּתָה", en: "she cleaned" },
      { he: "ניקינו", he_nikud: "נִיקִּינוּ", en: "we cleaned" },
      { he: "ניקיתם", he_nikud: "נִיקִּיתֶם", en: "you cleaned (m.p.)" },
      { he: "ניקיתן", he_nikud: "נִיקִּיתֶן", en: "you cleaned (f.p.)" },
      { he: "ניקו", he_nikud: "נִיקּוּ", en: "they cleaned" }
    ],
    future: [
      { he: "אנקה", he_nikud: "אֲנַקֶּה", en: "I will clean" },
      { he: "תנקה", he_nikud: "תְּנַקֶּה", en: "you will clean (m.s.)" },
      { he: "תנקי", he_nikud: "תְּנַקִּי", en: "you will clean (f.s.)" },
      { he: "ינקה", he_nikud: "יְנַקֶּה", en: "he will clean" },
      { he: "תנקה", he_nikud: "תְּנַקֶּה", en: "she will clean" },
      { he: "ננקה", he_nikud: "נְנַקֶּה", en: "we will clean" },
      { he: "תנקו", he_nikud: "תְּנַקּוּ", en: "you will clean (m.p.)" },
      { he: "תנקינה", he_nikud: "תְּנַקֶּינָה", en: "you will clean (f.p.)" },
      { he: "ינקו", he_nikud: "יְנַקּוּ", en: "they will clean" }
    ],
    example: { he: "היא מנקה את הבית.", he_nikud: "הִיא מְנַקָּה אֶת הַבַּיִת.", en: "She cleans the house." }
  },
  {
    infinitive: { he: "לבשל", he_nikud: "לְבַשֵּׁל", en: "to cook" },
    shoresh: "ב.ש.ל",
    present: [
      { he: "מבשל", he_nikud: "מְבַשֵּׁל", en: "cook (m.s.)" },
      { he: "מבשלת", he_nikud: "מְבַשֶּׁלֶת", en: "cook (f.s.)" },
      { he: "מבשלים", he_nikud: "מְבַשְּׁלִים", en: "cook (m.p.)" },
      { he: "מבשלות", he_nikud: "מְבַשְּׁלוֹת", en: "cook (f.p.)" }
    ],
    past: [
      { he: "בישלתי", he_nikud: "בִּישַּׁלְתִּי", en: "I cooked" },
      { he: "בישלת", he_nikud: "בִּישַּׁלְתָּ", en: "you cooked (m.s.)" },
      { he: "בישלת", he_nikud: "בִּישַּׁלְתְּ", en: "you cooked (f.s.)" },
      { he: "בישל", he_nikud: "בִּישֵּׁל", en: "he cooked" },
      { he: "בישלה", he_nikud: "בִּישְּׁלָה", en: "she cooked" },
      { he: "בישלנו", he_nikud: "בִּישַּׁלְנוּ", en: "we cooked" },
      { he: "בישלתם", he_nikud: "בִּישַּׁלְתֶּם", en: "you cooked (m.p.)" },
      { he: "בישלתן", he_nikud: "בִּישַּׁלְתֶּן", en: "you cooked (f.p.)" },
      { he: "בישלו", he_nikud: "בִּישְּׁלוּ", en: "they cooked" }
    ],
    future: [
      { he: "אבשל", he_nikud: "אֲבַשֵּׁל", en: "I will cook" },
      { he: "תבשל", he_nikud: "תְּבַשֵּׁל", en: "you will cook (m.s.)" },
      { he: "תבשלי", he_nikud: "תְּבַשְּׁלִי", en: "you will cook (f.s.)" },
      { he: "יבשל", he_nikud: "יְבַשֵּׁל", en: "he will cook" },
      { he: "תבשל", he_nikud: "תְּבַשֵּׁל", en: "she will cook" },
      { he: "נבשל", he_nikud: "נְבַשֵּׁל", en: "we will cook" },
      { he: "תבשלו", he_nikud: "תְּבַשְּׁלוּ", en: "you will cook (m.p.)" },
      { he: "תבשלנה", he_nikud: "תְּבַשֵּׁלְנָה", en: "you will cook (f.p.)" },
      { he: "יבשלו", he_nikud: "יְבַשְּׁלוּ", en: "they will cook" }
    ],
    example: { he: "הוא מבשל ארוחת ערב.", he_nikud: "הוּא מְבַשֵּׁל אֲרוּחַת עֶרֶב.", en: "He cooks dinner." }
  },
  {
    infinitive: { he: "לחפש", he_nikud: "לְחַפֵּשׂ", en: "to search" },
    shoresh: "ח.פ.ש",
    present: [
      { he: "מחפש", he_nikud: "מְחַפֵּשׂ", en: "search (m.s.)" },
      { he: "מחפשת", he_nikud: "מְחַפֶּשֶׂת", en: "search (f.s.)" },
      { he: "מחפשים", he_nikud: "מְחַפְּשִׂים", en: "search (m.p.)" },
      { he: "מחפשות", he_nikud: "מְחַפְּשׂוֹת", en: "search (f.p.)" }
    ],
    past: [
      { he: "חיפשתי", he_nikud: "חִיפַּשְׂתִּי", en: "I searched" },
      { he: "חיפשת", he_nikud: "חִיפַּשְׂתָּ", en: "you searched (m.s.)" },
      { he: "חיפשת", he_nikud: "חִיפַּשְׂתְּ", en: "you searched (f.s.)" },
      { he: "חיפש", he_nikud: "חִיפֵּשׂ", en: "he searched" },
      { he: "חיפשה", he_nikud: "חִיפְּשָׂה", en: "she searched" },
      { he: "חיפשנו", he_nikud: "חִיפַּשְׂנוּ", en: "we searched" },
      { he: "חיפשתם", he_nikud: "חִיפַּשְׂתֶּם", en: "you searched (m.p.)" },
      { he: "חיפשתן", he_nikud: "חִיפַּשְׂתֶּן", en: "you searched (f.p.)" },
      { he: "חיפשו", he_nikud: "חִיפְּשׂוּ", en: "they searched" }
    ],
    future: [
      { he: "אחפש", he_nikud: "אֲחַפֵּשׂ", en: "I will search" },
      { he: "תחפש", he_nikud: "תְּחַפֵּשׂ", en: "you will search (m.s.)" },
      { he: "תחפשי", he_nikud: "תְּחַפְּשִׂי", en: "you will search (f.s.)" },
      { he: "יחפש", he_nikud: "יְחַפֵּשׂ", en: "he will search" },
      { he: "תחפש", he_nikud: "תְּחַפֵּשׂ", en: "she will search" },
      { he: "נחפש", he_nikud: "נְחַפֵּשׂ", en: "we will search" },
      { he: "תחפשו", he_nikud: "תְּחַפְּשׂוּ", en: "you will search (m.p.)" },
      { he: "תחפשנה", he_nikud: "תְּחַפֵּשְׂנָה", en: "you will search (f.p.)" },
      { he: "יחפשו", he_nikud: "יְחַפְּשׂוּ", en: "they will search" }
    ],
    example: { he: "הוא מחפש את המפתחות.", he_nikud: "הוּא מְחַפֵּשׂ אֶת הַמַּפְתְּחוֹת.", en: "He searches for the keys." }
  },
  {
    infinitive: { he: "לארגן", he_nikud: "לְאַרְגֵּן", en: "to organize" },
    shoresh: "א.ר.ג.נ",
    present: [
      { he: "מארגן", he_nikud: "מְאַרְגֵּן", en: "organize (m.s.)" },
      { he: "מארגנת", he_nikud: "מְאַרְגֶּנֶת", en: "organize (f.s.)" },
      { he: "מארגנים", he_nikud: "מְאַרְגְּנִים", en: "organize (m.p.)" },
      { he: "מארגנות", he_nikud: "מְאַרְגְּנוֹת", en: "organize (f.p.)" }
    ],
    past: [
      { he: "ארגנתי", he_nikud: "אִרְגַּנְתִּי", en: "I organized" },
      { he: "ארגנת", he_nikud: "אִרְגַּנְתָּ", en: "you organized (m.s.)" },
      { he: "ארגנת", he_nikud: "אִרְגַּנְתְּ", en: "you organized (f.s.)" },
      { he: "ארגן", he_nikud: "אִרְגֵּן", en: "he organized" },
      { he: "ארגנה", he_nikud: "אִרְגְּנָה", en: "she organized" },
      { he: "ארגנו", he_nikud: "אִרְגַּנּוּ", en: "we organized" },
      { he: "ארגנתם", he_nikud: "אִרְגַּנְתֶּם", en: "you organized (m.p.)" },
      { he: "ארגנתן", he_nikud: "אִרְגַּנְתֶּן", en: "you organized (f.p.)" },
      { he: "ארגנו", he_nikud: "אִרְגְּנוּ", en: "they organized" }
    ],
    future: [
      { he: "אארגן", he_nikud: "אֲאַרְגֵּן", en: "I will organize" },
      { he: "תארגן", he_nikud: "תְּאַרְגֵּן", en: "you will organize (m.s.)" },
      { he: "תארגני", he_nikud: "תְּאַרְגְּנִי", en: "you will organize (f.s.)" },
      { he: "יארגן", he_nikud: "יְאַרְגֵּן", en: "he will organize" },
      { he: "תארגן", he_nikud: "תְּאַרְגֵּן", en: "she will organize" },
      { he: "נארגן", he_nikud: "נְאַרְגֵּן", en: "we will organize" },
      { he: "תארגנו", he_nikud: "תְּאַרְגְּנוּ", en: "you will organize (m.p.)" },
      { he: "תארגנה", he_nikud: "תְּאַרְגֵּנָּה", en: "you will organize (f.p.)" },
      { he: "יארגנו", he_nikud: "יְאַרְגְּנוּ", en: "they will organize" }
    ],
    example: { he: "היא מארגנת את האירוע.", he_nikud: "הִיא מְאַרְגֶּנֶת אֶת הָאֵרוּעַ.", en: "She organizes the event." }
  },
  {
    infinitive: { he: "לשתף", he_nikud: "לְשַׁתֵּף", en: "to share" },
    shoresh: "ש.ת.פ",
    present: [
      { he: "משתף", he_nikud: "מְשַׁתֵּף", en: "share (m.s.)" },
      { he: "משתפת", he_nikud: "מְשַׁתֶּפֶת", en: "share (f.s.)" },
      { he: "משתפים", he_nikud: "מְשַׁתְּפִים", en: "share (m.p.)" },
      { he: "משתפות", he_nikud: "מְשַׁתְּפוֹת", en: "share (f.p.)" }
    ],
    past: [
      { he: "שיתפתי", he_nikud: "שִׁיתַּפְתִּי", en: "I shared" },
      { he: "שיתפת", he_nikud: "שִׁיתַּפְתָּ", en: "you shared (m.s.)" },
      { he: "שיתפת", he_nikud: "שִׁיתַּפְתְּ", en: "you shared (f.s.)" },
      { he: "שיתף", he_nikud: "שִׁיתֵּף", en: "he shared" },
      { he: "שיתפה", he_nikud: "שִׁיתְּפָה", en: "she shared" },
      { he: "שיתפנו", he_nikud: "שִׁיתַּפְנוּ", en: "we shared" },
      { he: "שיתפתם", he_nikud: "שִׁיתַּפְתֶּם", en: "you shared (m.p.)" },
      { he: "שיתפתן", he_nikud: "שִׁיתַּפְתֶּן", en: "you shared (f.p.)" },
      { he: "שיתפו", he_nikud: "שִׁיתְּפוּ", en: "they shared" }
    ],
    future: [
      { he: "אשתף", he_nikud: "אֲשַׁתֵּף", en: "I will share" },
      { he: "תשתף", he_nikud: "תְּשַׁתֵּף", en: "you will share (m.s.)" },
      { he: "תשתפי", he_nikud: "תְּשַׁתְּפִי", en: "you will share (f.s.)" },
      { he: "ישתף", he_nikud: "יְשַׁתֵּף", en: "he will share" },
      { he: "תשתף", he_nikud: "תְּשַׁתֵּף", en: "she will share" },
      { he: "נשתף", he_nikud: "נְשַׁתֵּף", en: "we will share" },
      { he: "תשתפו", he_nikud: "תְּשַׁתְּפוּ", en: "you will share (m.p.)" },
      { he: "תשתפנה", he_nikud: "תְּשַׁתֵּפְנָה", en: "you will share (f.p.)" },
      { he: "ישתפו", he_nikud: "יְשַׁתְּפוּ", en: "they will share" }
    ],
    example: { he: "הוא משתף את התמונות.", he_nikud: "הוּא מְשַׁתֵּף אֶת הַתְּמוּנוֹת.", en: "He shares the photos." }
  },
  {
    infinitive: { he: "לשכנע", he_nikud: "לְשַׁכְנֵעַ", en: "to convince" },
    shoresh: "ש.כ.נ.ע",
    present: [
      { he: "משכנע", he_nikud: "מְשַׁכְנֵעַ", en: "convince (m.s.)" },
      { he: "משכנעת", he_nikud: "מְשַׁכְנַעַת", en: "convince (f.s.)" },
      { he: "משכנעים", he_nikud: "מְשַׁכְנְעִים", en: "convince (m.p.)" },
      { he: "משכנעות", he_nikud: "מְשַׁכְנְעוֹת", en: "convince (f.p.)" }
    ],
    past: [
      { he: "שכנעתי", he_nikud: "שִׁכְנַעְתִּי", en: "I convinced" },
      { he: "שכנעת", he_nikud: "שִׁכְנַעְתָּ", en: "you convinced (m.s.)" },
      { he: "שכנעת", he_nikud: "שִׁכְנַעְתְּ", en: "you convinced (f.s.)" },
      { he: "שכנע", he_nikud: "שִׁכְנֵעַ", en: "he convinced" },
      { he: "שכנעה", he_nikud: "שִׁכְנְעָה", en: "she convinced" },
      { he: "שכנענו", he_nikud: "שִׁכְנַעְנוּ", en: "we convinced" },
      { he: "שכנעתם", he_nikud: "שִׁכְנַעְתֶּם", en: "you convinced (m.p.)" },
      { he: "שכנעתן", he_nikud: "שִׁכְנַעְתֶּן", en: "you convinced (f.p.)" },
      { he: "שכנעו", he_nikud: "שִׁכְנְעוּ", en: "they convinced" }
    ],
    future: [
      { he: "אשכנע", he_nikud: "אֲשַׁכְנֵעַ", en: "I will convince" },
      { he: "תשכנע", he_nikud: "תְּשַׁכְנֵעַ", en: "you will convince (m.s.)" },
      { he: "תשכנעי", he_nikud: "תְּשַׁכְנְעִי", en: "you will convince (f.s.)" },
      { he: "ישכנע", he_nikud: "יְשַׁכְנֵעַ", en: "he will convince" },
      { he: "תשכנע", he_nikud: "תְּשַׁכְנֵעַ", en: "she will convince" },
      { he: "נשכנע", he_nikud: "נְשַׁכְנֵעַ", en: "we will convince" },
      { he: "תשכנעו", he_nikud: "תְּשַׁכְנְעוּ", en: "you will convince (m.p.)" },
      { he: "תשכנענה", he_nikud: "תְּשַׁכְנֵעְנָה", en: "you will convince (f.p.)" },
      { he: "ישכנעו", he_nikud: "יְשַׁכְנְעוּ", en: "they will convince" }
    ],
    example: { he: "הוא שכנע אותה ללכת.", he_nikud: "הוּא שִׁכְנֵעַ אוֹתָהּ לָלֶכֶת.", en: "He convinced her to go." }
  },
  {
    infinitive: { he: "לרוץ", he_nikud: "לָרוּץ", en: "to run" },
    shoresh: "ר.ו.צ",
    present: [
      { he: "רץ", he_nikud: "רָץ", en: "run (m.s.)" },
      { he: "רצה", he_nikud: "רָצָה", en: "run (f.s.)" },
      { he: "רצים", he_nikud: "רָצִים", en: "run (m.p.)" },
      { he: "רצות", he_nikud: "רָצוֹת", en: "run (f.p.)" }
    ],
    past: [
      { he: "רצתי", he_nikud: "רַצְתִּי", en: "I ran" },
      { he: "רצת", he_nikud: "רַצְתָּ", en: "you ran (m.s.)" },
      { he: "רצת", he_nikud: "רַצְתְּ", en: "you ran (f.s.)" },
      { he: "רץ", he_nikud: "רָץ", en: "he ran" },
      { he: "רצה", he_nikud: "רָצָה", en: "she ran" },
      { he: "רצנו", he_nikud: "רַצְנוּ", en: "we ran" },
      { he: "רצתם", he_nikud: "רַצְתֶּם", en: "you ran (m.p.)" },
      { he: "רצתן", he_nikud: "רַצְתֶּן", en: "you ran (f.p.)" },
      { he: "רצו", he_nikud: "רָצוּ", en: "they ran" }
    ],
    future: [
      { he: "ארוץ", he_nikud: "אָרוּץ", en: "I will run" },
      { he: "תרוץ", he_nikud: "תָּרוּץ", en: "you will run (m.s.)" },
      { he: "תרוצי", he_nikud: "תָּרוּצִי", en: "you will run (f.s.)" },
      { he: "ירוץ", he_nikud: "יָרוּץ", en: "he will run" },
      { he: "תרוץ", he_nikud: "תָּרוּץ", en: "she will run" },
      { he: "נרוץ", he_nikud: "נָרוּץ", en: "we will run" },
      { he: "תרוצו", he_nikud: "תָּרוּצוּ", en: "you will run (m.p.)" },
      { he: "תרוצנה", he_nikud: "תָּרֹצְנָה", en: "you will run (f.p.)" },
      { he: "ירוצו", he_nikud: "יָרוּצוּ", en: "they will run" }
    ],
    example: { he: "הוא רץ בבוקר.", he_nikud: "הוּא רָץ בַּבֹּקֶר.", en: "He runs in the morning." }
  },
  {
    infinitive: { he: "לרצות", he_nikud: "לִרְצוֹת", en: "to want" },
    shoresh: "ר.צ.ה",
    present: [
      { he: "רוצה", he_nikud: "רוֹצֶה", en: "want (m.s.)" },
      { he: "רוצה", he_nikud: "רוֹצָה", en: "want (f.s.)" },
      { he: "רוצים", he_nikud: "רוֹצִים", en: "want (m.p.)" },
      { he: "רוצות", he_nikud: "רוֹצוֹת", en: "want (f.p.)" }
    ],
    past: [
      { he: "רציתי", he_nikud: "רָצִיתִי", en: "I wanted" },
      { he: "רצית", he_nikud: "רָצִיתָ", en: "you wanted (m.s.)" },
      { he: "רצית", he_nikud: "רָצִית", en: "you wanted (f.s.)" },
      { he: "רצה", he_nikud: "רָצָה", en: "he wanted" },
      { he: "רצתה", he_nikud: "רָצְתָה", en: "she wanted" },
      { he: "רצינו", he_nikud: "רָצִינוּ", en: "we wanted" },
      { he: "רציתם", he_nikud: "רְצִיתֶם", en: "you wanted (m.p.)" },
      { he: "רציתן", he_nikud: "רְצִיתֶן", en: "you wanted (f.p.)" },
      { he: "רצו", he_nikud: "רָצוּ", en: "they wanted" }
    ],
    future: [
      { he: "ארצה", he_nikud: "אֶרְצֶה", en: "I will want" },
      { he: "תרצה", he_nikud: "תִּרְצֶה", en: "you will want (m.s.)" },
      { he: "תרצי", he_nikud: "תִּרְצִי", en: "you will want (f.s.)" },
      { he: "ירצה", he_nikud: "יִרְצֶה", en: "he will want" },
      { he: "תרצה", he_nikud: "תִּרְצֶה", en: "she will want" },
      { he: "נרצה", he_nikud: "נִרְצֶה", en: "we will want" },
      { he: "תרצו", he_nikud: "תִּרְצוּ", en: "you will want (m.p.)" },
      { he: "תרצינה", he_nikud: "תִּרְצֶינָה", en: "you will want (f.p.)" },
      { he: "ירצו", he_nikud: "יִרְצוּ", en: "they will want" }
    ],
    example: { he: "מה אתה רוצה לאכול?", he_nikud: "מַה אַתָּה רוֹצֶה לֶאֱכֹל?", en: "What do you want to eat?" }
  },
  {
    infinitive: { he: "להיות", he_nikud: "לִהְיוֹת", en: "to be" },
    shoresh: "ה.י.ה",
    present: [
      { he: "הוא", he_nikud: "הוּא", en: "be (m.s.)" },
      { he: "היא", he_nikud: "הִיא", en: "be (f.s.)" },
      { he: "הם", he_nikud: "הֵם", en: "be (m.p.)" },
      { he: "הן", he_nikud: "הֵן", en: "be (f.p.)" }
    ],
    past: [
      { he: "הייתי", he_nikud: "הָיִיתִי", en: "I was" },
      { he: "היית", he_nikud: "הָיִיתָ", en: "you were (m.s.)" },
      { he: "היית", he_nikud: "הָיִית", en: "you were (f.s.)" },
      { he: "היה", he_nikud: "הָיָה", en: "he was" },
      { he: "הייתה", he_nikud: "הָיְתָה", en: "she was" },
      { he: "היינו", he_nikud: "הָיִינוּ", en: "we were" },
      { he: "הייתם", he_nikud: "הֱיִיתֶם", en: "you were (m.p.)" },
      { he: "הייתן", he_nikud: "הֱיִיתֶן", en: "you were (f.p.)" },
      { he: "היו", he_nikud: "הָיוּ", en: "they were" }
    ],
    future: [
      { he: "אהיה", he_nikud: "אֶהְיֶה", en: "I will be" },
      { he: "תהיה", he_nikud: "תִּהְיֶה", en: "you will be (m.s.)" },
      { he: "תהיי", he_nikud: "תִּהְיִי", en: "you will be (f.s.)" },
      { he: "יהיה", he_nikud: "יִהְיֶה", en: "he will be" },
      { he: "תהיה", he_nikud: "תִּהְיֶה", en: "she will be" },
      { he: "נהיה", he_nikud: "נִהְיֶה", en: "we will be" },
      { he: "תהיו", he_nikud: "תִּהְיוּ", en: "you will be (m.p.)" },
      { he: "תהיינה", he_nikud: "תִּהְיֶינָה", en: "you will be (f.p.)" },
      { he: "יהיו", he_nikud: "יִהְיוּ", en: "they will be" }
    ],
    example: { he: "אני רוצה להיות מורה.", he_nikud: "אֲנִי רוֹצֶה לִהְיוֹת מוֹרֶה.", en: "I want to be a teacher." }
  },
  {
    infinitive: { he: "להביא", he_nikud: "לְהָבִיא", en: "to bring" },
    shoresh: "נ.ב.א",
    present: [
      { he: "מביא", he_nikud: "מֵבִיא", en: "bring (m.s.)" },
      { he: "מביאה", he_nikud: "מְבִיאָה", en: "bring (f.s.)" },
      { he: "מביאים", he_nikud: "מְבִיאִים", en: "bring (m.p.)" },
      { he: "מביאות", he_nikud: "מְבִיאוֹת", en: "bring (f.p.)" }
    ],
    past: [
      { he: "הבאתי", he_nikud: "הֵבֵאתִי", en: "I brought" },
      { he: "הבאת", he_nikud: "הֵבֵאתָ", en: "you brought (m.s.)" },
      { he: "הבאת", he_nikud: "הֵבֵאת", en: "you brought (f.s.)" },
      { he: "הביא", he_nikud: "הֵבִיא", en: "he brought" },
      { he: "הביאה", he_nikud: "הֵבִיאָה", en: "she brought" },
      { he: "הבאנו", he_nikud: "הֵבֵאנוּ", en: "we brought" },
      { he: "הבאתם", he_nikud: "הֵבֵאתֶם", en: "you brought (m.p.)" },
      { he: "הבאתן", he_nikud: "הֵבֵאתֶן", en: "you brought (f.p.)" },
      { he: "הביאו", he_nikud: "הֵבִיאוּ", en: "they brought" }
    ],
    future: [
      { he: "אביא", he_nikud: "אָבִיא", en: "I will bring" },
      { he: "תביא", he_nikud: "תָּבִיא", en: "you will bring (m.s.)" },
      { he: "תביאי", he_nikud: "תָּבִיאִי", en: "you will bring (f.s.)" },
      { he: "יביא", he_nikud: "יָבִיא", en: "he will bring" },
      { he: "תביא", he_nikud: "תָּבִיא", en: "she will bring" },
      { he: "נביא", he_nikud: "נָבִיא", en: "we will bring" },
      { he: "תביאו", he_nikud: "תָּבִיאוּ", en: "you will bring (m.p.)" },
      { he: "תביאנה", he_nikud: "תָּבֵאנָה", en: "you will bring (f.p.)" },
      { he: "יביאו", he_nikud: "יָבִיאוּ", en: "they will bring" }
    ],
    example: { he: "הוא מביא את האוכל.", he_nikud: "הוּא מֵבִיא אֶת הָאוֹכֶל.", en: "He brings the food." }
  },
  {
    infinitive: { he: "לתכנן", he_nikud: "לְתַכְנֵן", en: "to plan" },
    shoresh: "כ.נ.נ",
    present: [
      { he: "מתכנן", he_nikud: "מְתַכְנֵן", en: "plan (m.s.)" },
      { he: "מתכננת", he_nikud: "מְתַכְנֶנֶת", en: "plan (f.s.)" },
      { he: "מתכננים", he_nikud: "מְתַכְנְנִים", en: "plan (m.p.)" },
      { he: "מתכננות", he_nikud: "מְתַכְנְנוֹת", en: "plan (f.p.)" }
    ],
    past: [
      { he: "תכננתי", he_nikud: "תִּכְנַנְתִּי", en: "I planned" },
      { he: "תכננת", he_nikud: "תִּכְנַנְתָּ", en: "you planned (m.s.)" },
      { he: "תכננת", he_nikud: "תִּכְנַנְתְּ", en: "you planned (f.s.)" },
      { he: "תכנן", he_nikud: "תִּכְנֵן", en: "he planned" },
      { he: "תכננה", he_nikud: "תִּכְנְנָה", en: "she planned" },
      { he: "תכננו", he_nikud: "תִּכְנַנּוּ", en: "we planned" },
      { he: "תכננתם", he_nikud: "תִּכְנַנְתֶּם", en: "you planned (m.p.)" },
      { he: "תכננתן", he_nikud: "תִּכְנַנְתֶּן", en: "you planned (f.p.)" },
      { he: "תכננו", he_nikud: "תִּכְנְנוּ", en: "they planned" }
    ],
    future: [
      { he: "אתכנן", he_nikud: "אֲתַכְנֵן", en: "I will plan" },
      { he: "תתכנן", he_nikud: "תְּתַכְנֵן", en: "you will plan (m.s.)" },
      { he: "תתכנני", he_nikud: "תְּתַכְנְנִי", en: "you will plan (f.s.)" },
      { he: "יתכנן", he_nikud: "יְתַכְנֵן", en: "he will plan" },
      { he: "תתכנן", he_nikud: "תְּתַכְנֵן", en: "she will plan" },
      { he: "נתכנן", he_nikud: "נְתַכְנֵן", en: "we will plan" },
      { he: "תתכננו", he_nikud: "תְּתַכְנְנוּ", en: "you will plan (m.p.)" },
      { he: "תתכננה", he_nikud: "תְּתַכְנֵנָה", en: "you will plan (f.p.)" },
      { he: "יתכננו", he_nikud: "יְתַכְנְנוּ", en: "they will plan" }
    ],
    example: { he: "היא מתכננת חופשה.", he_nikud: "הִיא מְתַכְנֶנֶת חוּפְשָׁה.", en: "She plans a vacation." }
  },
  {
    infinitive: { he: "לעמוד", he_nikud: "לַעֲמֹד", en: "to stand" },
    shoresh: "ע.מ.ד",
    present: [
      { he: "עומד", he_nikud: "עוֹמֵד", en: "stand (m.s.)" },
      { he: "עומדת", he_nikud: "עוֹמֶדֶת", en: "stand (f.s.)" },
      { he: "עומדים", he_nikud: "עוֹמְדִים", en: "stand (m.p.)" },
      { he: "עומדות", he_nikud: "עוֹמְדוֹת", en: "stand (f.p.)" }
    ],
    past: [
      { he: "עמדתי", he_nikud: "עָמַדְתִּי", en: "I stood" },
      { he: "עמדת", he_nikud: "עָמַדְתָּ", en: "you stood (m.s.)" },
      { he: "עמדת", he_nikud: "עָמַדְתְּ", en: "you stood (f.s.)" },
      { he: "עמד", he_nikud: "עָמַד", en: "he stood" },
      { he: "עמדה", he_nikud: "עָמְדָה", en: "she stood" },
      { he: "עמדנו", he_nikud: "עָמַדְנוּ", en: "we stood" },
      { he: "עמדתם", he_nikud: "עֲמַדְתֶּם", en: "you stood (m.p.)" },
      { he: "עמדתן", he_nikud: "עֲמַדְתֶּן", en: "you stood (f.p.)" },
      { he: "עמדו", he_nikud: "עָמְדוּ", en: "they stood" }
    ],
    future: [
      { he: "אעמוד", he_nikud: "אֶעֱמֹד", en: "I will stand" },
      { he: "תעמוד", he_nikud: "תַּעֲמֹד", en: "you will stand (m.s.)" },
      { he: "תעמדי", he_nikud: "תַּעַמְדִי", en: "you will stand (f.s.)" },
      { he: "יעמוד", he_nikud: "יַעֲמֹד", en: "he will stand" },
      { he: "תעמוד", he_nikud: "תַּעֲמֹד", en: "she will stand" },
      { he: "נעמוד", he_nikud: "נַעֲמֹד", en: "we will stand" },
      { he: "תעמדו", he_nikud: "תַּעַמְדוּ", en: "you will stand (m.p.)" },
      { he: "תעמדנה", he_nikud: "תַּעֲמֹדְנָה", en: "you will stand (f.p.)" },
      { he: "יעמדו", he_nikud: "יַעַמְדוּ", en: "they will stand" }
    ],
    example: { he: "הוא עומד בתור.", he_nikud: "הוּא עוֹמֵד בַּתּוֹר.", en: "He stands in line." }
  },
  {
    infinitive: { he: "לומר", he_nikud: "לוֹמַר", en: "to say" },
    shoresh: "א.מ.ר",
    present: [
      { he: "אומר", he_nikud: "אוֹמֵר", en: "say (m.s.)" },
      { he: "אומרת", he_nikud: "אוֹמֶרֶת", en: "say (f.s.)" },
      { he: "אומרים", he_nikud: "אוֹמְרִים", en: "say (m.p.)" },
      { he: "אומרות", he_nikud: "אוֹמְרוֹת", en: "say (f.p.)" }
    ],
    past: [
      { he: "אמרתי", he_nikud: "אָמַרְתִּי", en: "I said" },
      { he: "אמרת", he_nikud: "אָמַרְתָּ", en: "you said (m.s.)" },
      { he: "אמרת", he_nikud: "אָמַרְתְּ", en: "you said (f.s.)" },
      { he: "אמר", he_nikud: "אָמַר", en: "he said" },
      { he: "אמרה", he_nikud: "אָמְרָה", en: "she said" },
      { he: "אמרנו", he_nikud: "אָמַרְנוּ", en: "we said" },
      { he: "אמרתם", he_nikud: "אֲמַרְתֶּם", en: "you said (m.p.)" },
      { he: "אמרתן", he_nikud: "אֲמַרְתֶּן", en: "you said (f.p.)" },
      { he: "אמרו", he_nikud: "אָמְרוּ", en: "they said" }
    ],
    future: [
      { he: "אומר", he_nikud: "אֹמַר", en: "I will say" },
      { he: "תאמר", he_nikud: "תֹּאמַר", en: "you will say (m.s.)" },
      { he: "תאמרי", he_nikud: "תֹּאמְרִי", en: "you will say (f.s.)" },
      { he: "יאמר", he_nikud: "יֹאמַר", en: "he will say" },
      { he: "תאמר", he_nikud: "תֹּאמַר", en: "she will say" },
      { he: "נאמר", he_nikud: "נֹאמַר", en: "we will say" },
      { he: "תאמרו", he_nikud: "תֹּאמְרוּ", en: "you will say (m.p.)" },
      { he: "תאמרנה", he_nikud: "תֹּאמַרְנָה", en: "you will say (f.p.)" },
      { he: "יאמרו", he_nikud: "יֹאמְרוּ", en: "they will say" }
    ],
    example: { he: "מה אתה אומר?", he_nikud: "מַה אַתָּה אוֹמֵר?", en: "What are you saying?" }
  },
  {
    infinitive: { he: "לטוס", he_nikud: "לָטוּס", en: "to fly" },
    shoresh: "ט.ו.ס",
    present: [
      { he: "טס", he_nikud: "טָס", en: "fly (m.s.)" },
      { he: "טסה", he_nikud: "טָסָה", en: "fly (f.s.)" },
      { he: "טסים", he_nikud: "טָסִים", en: "fly (m.p.)" },
      { he: "טסות", he_nikud: "טָסוֹת", en: "fly (f.p.)" }
    ],
    past: [
      { he: "טסתי", he_nikud: "טַסְתִּי", en: "I flew" },
      { he: "טסת", he_nikud: "טַסְתָּ", en: "you flew (m.s.)" },
      { he: "טסת", he_nikud: "טַסְתְּ", en: "you flew (f.s.)" },
      { he: "טס", he_nikud: "טָס", en: "he flew" },
      { he: "טסה", he_nikud: "טָסָה", en: "she flew" },
      { he: "טסנו", he_nikud: "טַסְנוּ", en: "we flew" },
      { he: "טסתם", he_nikud: "טַסְתֶּם", en: "you flew (m.p.)" },
      { he: "טסתן", he_nikud: "טַסְתֶּן", en: "you flew (f.p.)" },
      { he: "טסו", he_nikud: "טָסוּ", en: "they flew" }
    ],
    future: [
      { he: "אטוס", he_nikud: "אָטוּס", en: "I will fly" },
      { he: "תטוס", he_nikud: "תָּטוּס", en: "you will fly (m.s.)" },
      { he: "תטוסי", he_nikud: "תָּטוּסִי", en: "you will fly (f.s.)" },
      { he: "יטוס", he_nikud: "יָטוּס", en: "he will fly" },
      { he: "תטוס", he_nikud: "תָּטוּס", en: "she will fly" },
      { he: "נטוס", he_nikud: "נָטוּס", en: "we will fly" },
      { he: "תטוסו", he_nikud: "תָּטוּסוּ", en: "you will fly (m.p.)" },
      { he: "תטוסנה", he_nikud: "תָּטֹסְנָה", en: "you will fly (f.p.)" },
      { he: "יטוסו", he_nikud: "יָטוּסוּ", en: "they will fly" }
    ],
    example: { he: "המטוס טס לניו יורק.", he_nikud: "הַמָּטוֹס טָס לְנִיו יוֹרְק.", en: "The plane flies to New York." }
  },
  {
    infinitive: { he: "לקחת", he_nikud: "לָקַחַת", en: "to take" },
    shoresh: "ל.ק.ח",
    present: [
      { he: "לוקח", he_nikud: "לוֹקֵחַ", en: "take (m.s.)" },
      { he: "לוקחת", he_nikud: "לוֹקַחַת", en: "take (f.s.)" },
      { he: "לוקחים", he_nikud: "לוֹקְחִים", en: "take (m.p.)" },
      { he: "לוקחות", he_nikud: "לוֹקְחוֹת", en: "take (f.p.)" }
    ],
    past: [
      { he: "לקחתי", he_nikud: "לָקַחְתִּי", en: "I took" },
      { he: "לקחת", he_nikud: "לָקַחְתָּ", en: "you took (m.s.)" },
      { he: "לקחת", he_nikud: "לָקַחְתְּ", en: "you took (f.s.)" },
      { he: "לקח", he_nikud: "לָקַח", en: "he took" },
      { he: "לקחה", he_nikud: "לָקְחָה", en: "she took" },
      { he: "לקחנו", he_nikud: "לָקַחְנוּ", en: "we took" },
      { he: "לקחתם", he_nikud: "לְקַחְתֶּם", en: "you took (m.p.)" },
      { he: "לקחתן", he_nikud: "לְקַחְתֶּן", en: "you took (f.p.)" },
      { he: "לקחו", he_nikud: "לָקְחוּ", en: "they took" }
    ],
    future: [
      { he: "אקח", he_nikud: "אֶקַּח", en: "I will take" },
      { he: "תקח", he_nikud: "תִּקַּח", en: "you will take (m.s.)" },
      { he: "תקחי", he_nikud: "תִּקְּחִי", en: "you will take (f.s.)" },
      { he: "יקח", he_nikud: "יִקַּח", en: "he will take" },
      { he: "תקח", he_nikud: "תִּקַּח", en: "she will take" },
      { he: "נקח", he_nikud: "נִקַּח", en: "we will take" },
      { he: "תקחו", he_nikud: "תִּקְּחוּ", en: "you will take (m.p.)" },
      { he: "תקחנה", he_nikud: "תִּקַּחְנָה", en: "you will take (f.p.)" },
      { he: "יקחו", he_nikud: "יִקְּחוּ", en: "they will take" }
    ],
    example: { he: "הוא לוקח את המטרייה.", he_nikud: "הוּא לוֹקֵחַ אֶת הַמַּטְרִיָּה.", en: "He takes the umbrella." }
  },
  {
    infinitive: { he: "לעזור", he_nikud: "לַעְזֹר", en: "to help" },
    shoresh: "ע.ז.ר",
    present: [
      { he: "עוזר", he_nikud: "עוֹזֵר", en: "help (m.s.)" },
      { he: "עוזרת", he_nikud: "עוֹזֶרֶת", en: "help (f.s.)" },
      { he: "עוזרים", he_nikud: "עוֹזְרִים", en: "help (m.p.)" },
      { he: "עוזרות", he_nikud: "עוֹזְרוֹת", en: "help (f.p.)" }
    ],
    past: [
      { he: "עזרתי", he_nikud: "עָזַרְתִּי", en: "I helped" },
      { he: "עזרת", he_nikud: "עָזַרְתָּ", en: "you helped (m.s.)" },
      { he: "עזרת", he_nikud: "עָזַרְתְּ", en: "you helped (f.s.)" },
      { he: "עזר", he_nikud: "עָזַר", en: "he helped" },
      { he: "עזרה", he_nikud: "עָזְרָה", en: "she helped" },
      { he: "עזרנו", he_nikud: "עָזַרְנוּ", en: "we helped" },
      { he: "עזרתם", he_nikud: "עֲזַרְתֶּם", en: "you helped (m.p.)" },
      { he: "עזרתן", he_nikud: "עֲזַרְתֶּן", en: "you helped (f.p.)" },
      { he: "עזרו", he_nikud: "עָזְרוּ", en: "they helped" }
    ],
    future: [
      { he: "אעזור", he_nikud: "אֶעְזֹר", en: "I will help" },
      { he: "תעזור", he_nikud: "תַּעְזֹר", en: "you will help (m.s.)" },
      { he: "תעזרי", he_nikud: "תַּעַזְרִי", en: "you will help (f.s.)" },
      { he: "יעזור", he_nikud: "יַעְזֹר", en: "he will help" },
      { he: "תעזור", he_nikud: "תַּעְזֹר", en: "she will help" },
      { he: "נעזור", he_nikud: "נַעְזֹר", en: "we will help" },
      { he: "תעזרו", he_nikud: "תַּעַזְרוּ", en: "you will help (m.p.)" },
      { he: "תעזרנה", he_nikud: "תַּעַזֹרְנָה", en: "you will help (f.p.)" },
      { he: "יעזרו", he_nikud: "יַעַזְרוּ", en: "they will help" }
    ],
    example: { he: "היא עוזרת לי.", he_nikud: "הִיא עוֹזֶרֶת לִי.", en: "She helps me." }
  },
  {
    infinitive: { he: "למכור", he_nikud: "לִמְכֹּר", en: "to sell" },
    shoresh: "מ.כ.ר",
    present: [
      { he: "מוכר", he_nikud: "מוֹכֵר", en: "sell (m.s.)" },
      { he: "מוכרת", he_nikud: "מוֹכֶרֶת", en: "sell (f.s.)" },
      { he: "מוכרים", he_nikud: "מוֹכְרִים", en: "sell (m.p.)" },
      { he: "מוכרות", he_nikud: "מוֹכְרוֹת", en: "sell (f.p.)" }
    ],
    past: [
      { he: "מכרתי", he_nikud: "מָכַרְתִּי", en: "I sold" },
      { he: "מכרת", he_nikud: "מָכַרְתָּ", en: "you sold (m.s.)" },
      { he: "מכרת", he_nikud: "מָכַרְתְּ", en: "you sold (f.s.)" },
      { he: "מכר", he_nikud: "מָכַר", en: "he sold" },
      { he: "מכרה", he_nikud: "מָכְרָה", en: "she sold" },
      { he: "מכרנו", he_nikud: "מָכַרְנוּ", en: "we sold" },
      { he: "מכרתם", he_nikud: "מְכַרְתֶּם", en: "you sold (m.p.)" },
      { he: "מכרתן", he_nikud: "מְכַרְתֶּן", en: "you sold (f.p.)" },
      { he: "מכרו", he_nikud: "מָכְרוּ", en: "they sold" }
    ],
    future: [
      { he: "אמכור", he_nikud: "אֶמְכֹּר", en: "I will sell" },
      { he: "תמכור", he_nikud: "תִּמְכֹּר", en: "you will sell (m.s.)" },
      { he: "תמכרי", he_nikud: "תִּמְכְּרִי", en: "you will sell (f.s.)" },
      { he: "ימכור", he_nikud: "יִמְכֹּר", en: "he will sell" },
      { he: "תמכור", he_nikud: "תִּמְכֹּר", en: "she will sell" },
      { he: "נמכור", he_nikud: "נִמְכֹּר", en: "we will sell" },
      { he: "תמכרו", he_nikud: "תִּמְכְּרוּ", en: "you will sell (m.p.)" },
      { he: "תמכרנה", he_nikud: "תִּמְכֹּרְנָה", en: "you will sell (f.p.)" },
      { he: "ימכרו", he_nikud: "יִמְכְּרוּ", en: "they will sell" }
    ],
    example: { he: "הוא מוכר ירקות בשוק.", he_nikud: "הוּא מוֹכֵר יְרָקוֹת בַּשּׁוּק.", en: "He sells vegetables at the market." }
  },
  {
    infinitive: { he: "להכיר", he_nikud: "לְהַכִּיר", en: "to know (person)" },
    shoresh: "נ.כ.ר",
    present: [
      { he: "מכיר", he_nikud: "מַכִּיר", en: "know (m.s.)" },
      { he: "מכירה", he_nikud: "מַכִּירָה", en: "know (f.s.)" },
      { he: "מכירים", he_nikud: "מַכִּירִים", en: "know (m.p.)" },
      { he: "מכירות", he_nikud: "מַכִּירוֹת", en: "know (f.p.)" }
    ],
    past: [
      { he: "הכרתי", he_nikud: "הִכַּרְתִּי", en: "I knew" },
      { he: "הכרת", he_nikud: "הִכַּרְתָּ", en: "you knew (m.s.)" },
      { he: "הכרת", he_nikud: "הִכַּרְתְּ", en: "you knew (f.s.)" },
      { he: "הכיר", he_nikud: "הִכִּיר", en: "he knew" },
      { he: "הכירה", he_nikud: "הִכִּירָה", en: "she knew" },
      { he: "הכרנו", he_nikud: "הִכַּרְנוּ", en: "we knew" },
      { he: "הכרתם", he_nikud: "הִכַּרְתֶּם", en: "you knew (m.p.)" },
      { he: "הכרתן", he_nikud: "הִכַּרְתֶּן", en: "you knew (f.p.)" },
      { he: "הכירו", he_nikud: "הִכִּירוּ", en: "they knew" }
    ],
    future: [
      { he: "אכיר", he_nikud: "אַכִּיר", en: "I will know" },
      { he: "תכיר", he_nikud: "תַּכִּיר", en: "you will know (m.s.)" },
      { he: "תכירי", he_nikud: "תַּכִּירִי", en: "you will know (f.s.)" },
      { he: "יכיר", he_nikud: "יַכִּיר", en: "he will know" },
      { he: "תכיר", he_nikud: "תַּכִּיר", en: "she will know" },
      { he: "נכיר", he_nikud: "נַכִּיר", en: "we will know" },
      { he: "תכירו", he_nikud: "תַּכִּירוּ", en: "you will know (m.p.)" },
      { he: "תכרנה", he_nikud: "תַּכֵּרְנָה", en: "you will know (f.p.)" },
      { he: "יכירו", he_nikud: "יַכִּירוּ", en: "they will know" }
    ],
    example: { he: "אני מכיר אותו.", he_nikud: "אֲנִי מַכִּיר אוֹתוֹ.", en: "I know him." }
  },
  {
    infinitive: { he: "לצאת", he_nikud: "לָצֵאת", en: "to go out" },
    shoresh: "י.צ.א",
    present: [
      { he: "יוצא", he_nikud: "יוֹצֵא", en: "go out (m.s.)" },
      { he: "יוצאת", he_nikud: "יוֹצֵאת", en: "go out (f.s.)" },
      { he: "יוצאים", he_nikud: "יוֹצְאִים", en: "go out (m.p.)" },
      { he: "יוצאות", he_nikud: "יוֹצְאוֹת", en: "go out (f.p.)" }
    ],
    past: [
      { he: "יצאתי", he_nikud: "יָצָאתִי", en: "I went out" },
      { he: "יצאת", he_nikud: "יָצָאתָ", en: "you went out (m.s.)" },
      { he: "יצאת", he_nikud: "יָצָאת", en: "you went out (f.s.)" },
      { he: "יצא", he_nikud: "יָצָא", en: "he went out" },
      { he: "יצאה", he_nikud: "יָצְאָה", en: "she went out" },
      { he: "יצאנו", he_nikud: "יָצָאנוּ", en: "we went out" },
      { he: "יצאתם", he_nikud: "יְצָאתֶם", en: "you went out (m.p.)" },
      { he: "יצאתן", he_nikud: "יְצָאתֶן", en: "you went out (f.p.)" },
      { he: "יצאו", he_nikud: "יָצְאוּ", en: "they went out" }
    ],
    future: [
      { he: "אצא", he_nikud: "אֵצֵא", en: "I will go out" },
      { he: "תצא", he_nikud: "תֵּצֵא", en: "you will go out (m.s.)" },
      { he: "תצאי", he_nikud: "תֵּצְאִי", en: "you will go out (f.s.)" },
      { he: "יצא", he_nikud: "יֵצֵא", en: "he will go out" },
      { he: "תצא", he_nikud: "תֵּצֵא", en: "she will go out" },
      { he: "נצא", he_nikud: "נֵצֵא", en: "we will go out" },
      { he: "תצאו", he_nikud: "תֵּצְאוּ", en: "you will go out (m.p.)" },
      { he: "תצאנה", he_nikud: "תֵּצֶאנָה", en: "you will go out (f.p.)" },
      { he: "יצאו", he_nikud: "יֵצְאוּ", en: "they will go out" }
    ],
    example: { he: "אנחנו יוצאים הערב.", he_nikud: "אֲנַחְנוּ יוֹצְאִים הָעֶרֶב.", en: "We go out tonight." }
  },
  {
    infinitive: { he: "למצוא", he_nikud: "לִמְצֹא", en: "to find" },
    shoresh: "מ.צ.א",
    present: [
      { he: "מוצא", he_nikud: "מוֹצֵא", en: "find (m.s.)" },
      { he: "מוצאת", he_nikud: "מוֹצֵאת", en: "find (f.s.)" },
      { he: "מוצאים", he_nikud: "מוֹצְאִים", en: "find (m.p.)" },
      { he: "מוצאות", he_nikud: "מוֹצְאוֹת", en: "find (f.p.)" }
    ],
    past: [
      { he: "מצאתי", he_nikud: "מָצָאתִי", en: "I found" },
      { he: "מצאת", he_nikud: "מָצָאתָ", en: "you found (m.s.)" },
      { he: "מצאת", he_nikud: "מָצָאת", en: "you found (f.s.)" },
      { he: "מצא", he_nikud: "מָצָא", en: "he found" },
      { he: "מצאה", he_nikud: "מָצְאָה", en: "she found" },
      { he: "מצאנו", he_nikud: "מָצָאנוּ", en: "we found" },
      { he: "מצאתם", he_nikud: "מְצָאתֶם", en: "you found (m.p.)" },
      { he: "מצאתן", he_nikud: "מְצָאתֶן", en: "you found (f.p.)" },
      { he: "מצאו", he_nikud: "מָצְאוּ", en: "they found" }
    ],
    future: [
      { he: "אמצא", he_nikud: "אֶמְצָא", en: "I will find" },
      { he: "תמצא", he_nikud: "תִּמְצָא", en: "you will find (m.s.)" },
      { he: "תמצאי", he_nikud: "תִּמְצְאִי", en: "you will find (f.s.)" },
      { he: "ימצא", he_nikud: "יִמְצָא", en: "he will find" },
      { he: "תמצא", he_nikud: "תִּמְצָא", en: "she will find" },
      { he: "נמצא", he_nikud: "נִמְצָא", en: "we will find" },
      { he: "תמצאו", he_nikud: "תִּמְצְאוּ", en: "you will find (m.p.)" },
      { he: "תמצאנה", he_nikud: "תִּמְצֶאנָה", en: "you will find (f.p.)" },
      { he: "ימצאו", he_nikud: "יִמְצְאוּ", en: "they will find" }
    ],
    example: { he: "הוא מוצא את ארנקו.", he_nikud: "הוּא מוֹצֵא אֶת אַרְנָקוֹ.", en: "He finds his wallet." }
  },
  {
    infinitive: { he: "לגור", he_nikud: "לָגוּר", en: "to live (reside)" },
    shoresh: "ג.ו.ר",
    present: [
      { he: "גר", he_nikud: "גָּר", en: "live (m.s.)" },
      { he: "גרה", he_nikud: "גָּרָה", en: "live (f.s.)" },
      { he: "גרים", he_nikud: "גָּרִים", en: "live (m.p.)" },
      { he: "גרות", he_nikud: "גָּרוֹת", en: "live (f.p.)" }
    ],
    past: [
      { he: "גרתי", he_nikud: "גַּרְתִּי", en: "I lived" },
      { he: "גרת", he_nikud: "גַּרְתָּ", en: "you lived (m.s.)" },
      { he: "גרת", he_nikud: "גַּרְתְּ", en: "you lived (f.s.)" },
      { he: "גר", he_nikud: "גָּר", en: "he lived" },
      { he: "גרה", he_nikud: "גָּרָה", en: "she lived" },
      { he: "גרנו", he_nikud: "גַּרְנוּ", en: "we lived" },
      { he: "גרתם", he_nikud: "גַּרְתֶּם", en: "you lived (m.p.)" },
      { he: "גרתן", he_nikud: "גַּרְתֶּן", en: "you lived (f.p.)" },
      { he: "גרו", he_nikud: "גָּרוּ", en: "they lived" }
    ],
    future: [
      { he: "אגור", he_nikud: "אָגוּר", en: "I will live" },
      { he: "תגור", he_nikud: "תָּגוּר", en: "you will live (m.s.)" },
      { he: "תגורי", he_nikud: "תָּגוּרִי", en: "you will live (f.s.)" },
      { he: "יגור", he_nikud: "יָגוּר", en: "he will live" },
      { he: "תגור", he_nikud: "תָּגוּר", en: "she will live" },
      { he: "נגור", he_nikud: "נָגוּר", en: "we will live" },
      { he: "תגורו", he_nikud: "תָּגוּרוּ", en: "you will live (m.p.)" },
      { he: "תגורנה", he_nikud: "תָּגֹרְנָה", en: "you will live (f.p.)" },
      { he: "יגורו", he_nikud: "יָגוּרוּ", en: "they will live" }
    ],
    example: { he: "הם גרים בתל אביב.", he_nikud: "הֵם גָּרִים בְּתֵל אָבִיב.", en: "They live in Tel Aviv." }
  }
];
