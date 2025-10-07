const proverbs = [
  "Жақсы кісі байқап сөйлер, жаман кісі шайқап сөйлер",
  "Ер еліне, ит иесіне",
  "Балапан ұяда не көрсе, ұшқанда соны іледі",
  "Өнер – ағып жатқан бұлақ, Білім – жанып тұрған шырақ",
  "Жақсының аты өлмейді, Ғалымның хаты өлмейді",
  "Көз жетпеген жерге, сөз жетеді",
  "Отыз тістен шыққан сөз, отыз рулы елге тарайды",
  "Дұшпаны көптер сақтана жүреді, Досы көптер мақтана біледі",
  "Жалған достан, жау артық",
  "Өнерлінің қолы алтын, өлеңшінің сөзі алтын",
  "Еңбек етсең ерінбей, тояды қарның тіленбей",
  "Отан үшін күрес – елге тиген үлес"
];

const cardsContainer = document.getElementById('cards');

proverbs.forEach((prov, i) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const note = document.createElement('div');
  note.classList.add('note');
  note.textContent = i + 1;

  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = prov;

  note.addEventListener('click', () => {
    note.classList.add('fall');
    setTimeout(() => note.style.display = 'none', 1000);
  });

  card.appendChild(text);
  card.appendChild(note);
  cardsContainer.appendChild(card);
});
