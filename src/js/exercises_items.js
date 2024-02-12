import { API_EXERCISES_POINT, api } from './api.js';
import { refs } from './exercises_category_filter.js';
import Pagination from 'tui-pagination';

const paramsCard = {
  bodypart: '',
  muscles: '',
  equipment: '',
  keyword: '',
  page: 1,
  limit: 8,
};

const container = document.getElementById('tui-pagination-container');

const options = {
  itemsPerPage: 8,
  visiblePages: 3,
  centerAlign: true,
};
const instance = new Pagination(container, options);

let category = '';

refs.subcategory.addEventListener('click', searchCard);
refs.search.addEventListener('submit', searchCardForm);

function searchCardForm(e) {
  e.preventDefault();
  const form = e.target;
  paramsCard.keyword = form.elements.searchstr.value.trim().toLowerCase();

  console.log(paramsCard);
  form.reset();
  getSubcategoryExercises(paramsCard);
}

function searchCard(e) {
  e.preventDefault();
  // if (e.target === e.currentTarget) {
  //   return;
  // }
  if (
    !e.target.classList.contains('exercises-subcategory-item') ||
    !e.target.closest('.exercises-subcategory-item')
  ) {
    return;
  }

  refs.search.classList.add('is-visible');
  const liEl = e.target.closest('.exercises-subcategory-item');

  category = liEl.children[1].textContent.toLowerCase();
  const subcategoryName = liEl.children[0].textContent;

  refs.title.insertAdjacentHTML(
    'beforeend',
    ` / <span class="exercises-title-span"> ${subcategoryName}</span>`
  );

  refs.subcategory.classList.add('open-card');
  checkCategory(category, liEl);
}

function checkCategory(check, liEl) {
  paramsCard.muscles = '';
  paramsCard.bodypart = '';
  paramsCard.equipment = '';
  paramsCard.keyword = '';

  if (check === 'muscles') {
    paramsCard.muscles = liEl.children[0].textContent.toLowerCase();
    getSubcategoryExercises();
  } else if (check === 'body parts') {
    paramsCard.bodypart = liEl.children[0].textContent.toLowerCase();
    getSubcategoryExercises();
  } else if (check === 'equipment') {
    paramsCard.equipment = liEl.children[0].textContent.toLowerCase();
    getSubcategoryExercises();
  }
}

function createMarkupCard(results) {
  const arr = results
    .map(
      ({
        _id,
        bodyPart,
        name,
        rating,
        burnedCalories,
        target,
      }) => `<li class="exercices-card">

          <div class="card-header">
            <div class="card-header-container">
              <p class="card-category">WORKOUT</p>

               <div class="card-rating-container">
                  <p class="card-rating">
                     ${rating}
                  </p>
                 <svg class="card-rating-svg" width="15" height="15">
                   <use href="./img/icons.svg#icon-star"></use>
                 </svg>
               </div>
               
            </div>

                 <button class="card-button" type="submit" data-id = "${_id}">
              Start
              <svg class="card-search-svg" >
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </button >
           
          </div>

          <div class="card-bodi">
            <svg class="card-bodi-svg" width="24" height="24">
              <use href="./img/icons.svg#icon-running_man"></use>
            </svg>
            <h3 class="card-name">${name}</h3>
          </div>

            <ul class="card-inform-list">
              <li class="card-inform-item">Burned calories:  <span class="card-inform-item-span">${burnedCalories} / 3 min</span></li>
              <li class="card-inform-item">Body part: <span class="card-inform-item-span">${bodyPart}</span></li>
              <li class="card-inform-item">Target: <span class="card-inform-item-span">${target}</span></li>
            </ul>
          
        </li>`
    )
    .join('');

  refs.subcategory.innerHTML = arr;
}

function getSubcategoryExercises() {
  const pageWidth = window.innerWidth;
  if (pageWidth >= 1440) {
    paramsCard.limit = 9;
  }

  api
    .get(API_EXERCISES_POINT, paramsCard)
    .then(({ page, totalPages, results }) => {
      createMarkupCard(results);
      if (results.length === 0) {
        refs.subcategory.innerHTML = `<li class = "exercises-text"><p>Unfortunately, <span class = "exercises-text-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></li>`;
      }

      instance.reset(totalPages * 8);
    })
    .catch(error => console.log(error)).finally;
  instance.on('afterMove', event => {
    const currentPage = event.page;
    paramsCard.page = currentPage;
    api
      .get(API_EXERCISES_POINT, paramsCard)
      .then(({ results }) => {
        createMarkupCard(results);
      })
      .catch(error => console.log(error));
  });
}
