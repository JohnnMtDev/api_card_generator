// ==============================
// DARK MODE
// ==============================

const darkMode = () => {
  document.body.classList.toggle('dark');
};

let btnDrk = document.querySelector('#d_switch');
btnDrk.addEventListener('click', darkMode);

// ==============================
// API RICK & MORTY + PAGINACIÓN
// ==============================

let url = `https://rickandmortyapi.com/api/character/`;

// DOM
const cardsContainer = document.getElementById('cards');

// Footer para la paginación
let footer = document.querySelector('footer');
if (!footer) {
  footer = document.createElement('footer');
  document.body.appendChild(footer);
}

// Configuración
const cardsPerPage = 6;
let currentPage = 1;
let characters = [];

// ==============================
// FETCH
// ==============================

fetch(url)
  .then(response => response.json())
  .then(data => {
    characters = data.results;
    updateView();
  })
  .catch(error => console.error('Error API:', error));

// ==============================
// RENDER CARDS
// ==============================

function renderPage() {
  cardsContainer.innerHTML = '';

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  characters.slice(start, end).forEach(element => {
    let divCard = document.createElement('div');
    divCard.classList.add('card');

    divCard.innerHTML = `
      <h3>${element.name}</h3>
      <img src="${element.image}" alt="${element.name}">
    `;

    cardsContainer.appendChild(divCard);
  });
}

// ==============================
// PAGINATION (PILLS)
// ==============================

function renderPagination() {
  footer.innerHTML = '';

  const totalPages = Math.ceil(characters.length / cardsPerPage);

  const nav = document.createElement('nav');
  nav.classList.add('pagination');

  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement('button');
    page.textContent = i;
    page.classList.add('page-pill');

    if (i === currentPage) {
      page.classList.add('active');
      page.setAttribute('aria-current', 'page');
    }

    page.addEventListener('click', () => {
      currentPage = i;
      updateView();
    });

    nav.appendChild(page);
  }

  footer.appendChild(nav);
}

// ==============================
// UPDATE VIEW
// ==============================

function updateView() {
  renderPage();
  renderPagination();
}
