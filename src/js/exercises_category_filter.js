import { notify } from './notifier.js';
import { API_FILTER_POINT, api } from './api.js';

export { refs };

const refs = {
  category: document.querySelector('.exercises-category-container'),
  subcategory: document.querySelector('.exercises-subcategory-list'),
  pagescategory: document.querySelector(
    '.exercises-subcategory-page-container'
  ),
  exercises: document.querySelector('exercises-title'),
};

const queryParams = {
  filter: 'Muscles',
  maxPage: 0,
  page: 1,
  limit: 12,
};

const pageWidth = window.innerWidth;
if (pageWidth < 768) {
  queryParams.limit = 8;
}

getCategoryExercises();

refs.category.addEventListener('click', categorySearch);

function categorySearch(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  [...refs.category.children].forEach(btn => {
    if (btn.classList.contains('exercises-category-btn-active')) {
      btn.classList.remove('exercises-category-btn-active');
    }

    btn.disabled = true;
  });

  event.target.classList.add('exercises-category-btn-active');

  queryParams.filter = event.target.textContent;
  queryParams.page = 1;

  getCategoryExercises();
}

function markupCategory({ filter, name, imgUrl }) {
  const backImg = `
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${imgUrl}')
  `;

  return `
    <li class="exercises-subcategory-item" data-url="${imgUrl}" style="background-image: ${backImg}">
        <p class="exercises-subcategory-name">${capitalizeFirstLetter(name)}</p>
        <p class="exercises-subcategory-type">${filter}</p>
    </li>
  `;
}

function capitalizeFirstLetter(name) {
  if (name.charAt(0).toLowerCase() === name.charAt(0)) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    return name;
  }
}

function getCategoryExercises() {
  api
    .get(API_FILTER_POINT, queryParams)
    .then(({ results, totalPages }) => {
      refs.subcategory.innerHTML = results.map(markupCategory).join('');
      queryParams.maxPage = totalPages;

      if (queryParams.page === 1) {
        markupPages();
      }
    })
    .catch(error => notify('error', `API error: ${error}`))
    .finally(() => {
      [...refs.category.children].forEach(btn => {
        btn.disabled = false;
      });
    });
}

function markupPages() {
  if (queryParams.maxPage < 2) {
    refs.pagescategory.innerHTML = '';
    refs.pagescategory.classList.remove('is-visible');
  } else if (queryParams.maxPage >= 2) {
    let markupPage = `
          <button type="button" class="exercises-subcategory-page-btn exercises-subcategory-page-btn-active">1</button>
        `;
    for (let i = 1; i < queryParams.maxPage; i++) {
      markupPage += `
        <button type="button" class="exercises-subcategory-page-btn">${
          i + 1
        }</button>
      `;
    }

    refs.pagescategory.innerHTML = markupPage;

    refs.pagescategory.classList.add('is-visible');

    refs.pagescategory.addEventListener('click', categoryPages);
  }
}

function categoryPages(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  [...event.currentTarget.children]
    .find(btn =>
      btn.classList.contains('exercises-subcategory-page-btn-active')
    )
    .classList.remove('exercises-subcategory-page-btn-active');

  event.target.classList.add('exercises-subcategory-page-btn-active');

  queryParams.page = event.target.textContent;

  getCategoryExercises();
}
