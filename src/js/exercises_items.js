import { API_FILTER_POINT, API_EXERCISES_POINT, api } from './api.js';
import { refs } from './exercises_category_filter.js';

const paramsCard = {
  bodypart: '',
  muscles: 'abductors',
  equipment: '',
  keyword: '',
  page: 1,
  limit: 9,
};

refs.subcategory.addEventListener('click', searchCard);

function searchCard(e) {
  //   if (e.target.nodeName !== 'li') {
  //     return;
  //   }
  e.preventDefault();
  paramsCard.muscles = e.target.textContent.toLowerCase();

  getSubcategoryExercises();
}

function createMarkupCard(results) {
  const arr = results
    .map(
      ({
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
                 <svg class="card-rating-svg" width="18" height="18">
                   <use href="./img/icons.svg#icon-star"></use>
                 </svg>
               </div>
               
            </div>

                 <button class="card-button" type="submit">
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

async function getSubcategoryExercises() {
  const http = await api
    .get(API_EXERCISES_POINT, paramsCard)
    .then(({ page, results }) => {
      createMarkupCard(results);
    })
    .catch(error => console.log(error));
}
