import { notify } from './notifier.js';
import { API_FILTER_POINT, api } from './api.js';
import Pagination from 'tui-pagination';

export { refs };
const refs = {
  category: document.querySelector('.exercises-category-container'),
  subcategory: document.querySelector('.exercises-subcategory-list'),
  pagescategory: document.querySelector(
    '.exercises-subcategory-page-container'
  ),
  title: document.querySelector('.exercises-title'),
  search: document.querySelector('.exercices-form'),
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

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: queryParams.maxPage,
  itemsPerPage: queryParams.limit,
  visiblePages: 3,
  centerAlign: true,
};
const instance = new Pagination(container, options);

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
      if (refs.subcategory.classList.contains('open-card')) {
        refs.subcategory.classList.remove('open-card');
        refs.title.textContent = 'Exercises';
        refs.search.classList.remove('is-visible');
      }

      refs.subcategory.innerHTML = results.map(markupCategory).join('');
      queryParams.maxPage = totalPages;

      if (totalPages === 1) {
        container.classList.add('is-hidden');
      } else {
        container.classList.remove('is-hidden');
      }

      instance.reset(totalPages * queryParams.limit);
    })
    .catch(error => notify('error', `API error: ${error}`))
    .finally(() => {
      [...refs.category.children].forEach(btn => {
        btn.disabled = false;
      });

      instance.on('afterMove', event => {
        queryParams.page = event.page;

        api
          .get(API_FILTER_POINT, queryParams)
          .then(({ results }) => {
            refs.subcategory.innerHTML = results.map(markupCategory).join('');
          })
          .catch(error => notify('error', `API error: ${error}`));
      });
    });
}
