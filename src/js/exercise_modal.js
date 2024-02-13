import { API_EXERCISES_POINT, api } from './api.js';
import { notify } from './notifier.js';

// const refs = {
let modalCard = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-modal-btn');
let favBtn = document.querySelector('.add-favorite-btn');
let ratingBtn = document.querySelector('.give-rating-btn');
let modal = document.querySelector('.backdrop-modal');
let loader = document.querySelector('.loader');
// };
let exerciseObject = { isFavorite: false };

// (open modal, get exer)
export function openModalHandler(e) {
  if (
    !e.target &&
    !e.target.classList.contains('card-button') &&
    !e.target.closest('.card-button').classList.contains('card-button')
  ) {
    return;
  }

  let id;
  try {
    id = e.target.closest('.card-button').dataset.id;
  } catch {
    id = '';
  }

  // testing
  // let id = '64f389465ae26083f39b1ab2';
  if (!id) {
    return;
  }
  document.querySelector('.backdrop-modal').classList.remove('visually-hidden');
  // let loader = document.querySelector('.loader');
  // if (loader) {
  document.querySelector('.modal').innerHTML = '<div class="loader-modal"></div>';
  document.querySelector('.loader-modal').style.display = 'block';
  // }
  openModal(id);
}

// (hide only modal, backdrop is open)
export function hideModalHandler() {}
// (show only modal, get exer from server)
export function showModalHandler() {}

// (closes the modal)
function closeModalHandler() {
  document.querySelector('.backdrop-modal').classList.add('visually-hidden');
}

function addRemoveFavoriteHandler(e) {
  if (
    Object.hasOwn(exerciseObject, 'isFavorite') &&
    exerciseObject.isFavorite
  ) {
    removeFromFavoriteStorage(e);
    exerciseObject.isFavorite = false;
    notify('success', 'The exercise has been removed from favorites list');
  } else {
    addToFavoriteStorage(e);
    exerciseObject.isFavorite = true;
    notify('success', 'The exercise has been added to favorites list');
  }
  markupAndReload(exerciseObject);
}
// (adds to favorites)
function addToFavoriteStorage(e) {
  let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  curFavorites.push(exerciseObject);
  localStorage.setItem('favorites', JSON.stringify(curFavorites));
}

// (remove from favorites)
function removeFromFavoriteStorage(e) {
  const exerciseId = e.target.dataset.id;
  let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let updFavorites = curFavorites.filter(
    exercise => exercise._id !== exerciseId
  );
  localStorage.setItem('favorites', JSON.stringify(updFavorites));
}

function getExerciseFromStorage(id) {
  if (id) {
    let itemObj;
    let exerciseId = id;
    let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    itemObj = curFavorites.filter(exercise => exercise._id === exerciseId);
    exerciseObject.isFavorite = !!itemObj.length;
    return itemObj;
  }
}

function openModal(id) {
  getExerciseFromStorage(id);
  getExerciseApi(id);
}

function markupAndReload(item) {
  document.querySelector('.modal').innerHTML = createMarkupExercisesCard(item);

  // refresh all elements after recreate them, and add listeners
  closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', closeModalHandler);

  favBtn = document.querySelector('.add-favorite-btn');
  favBtn.addEventListener('click', addRemoveFavoriteHandler);

  ratingBtn = document.querySelector('.give-rating-btn');
  // ratingBtn.addEventListener('click', openRatingModal);
}

function getExerciseApi(id) {
  if (!id) {
    return;
  }

  api
    .get(`${API_EXERCISES_POINT}/${id}`, {})
    .then(data => {
      if (exerciseObject.isFavorite) {
        exerciseObject = data;
        exerciseObject.isFavorite = true;
      } else {
        exerciseObject = data;
        exerciseObject.isFavorite = false;
      }
      markupAndReload(data);
    })
    .catch(error => notify('error', `API error: ${error}`))
    .finally(() => {
      try {
        document.querySelector('.loader-modal').style.display = 'none';
      } catch {}
    });
}

// this will call from exercises_items and favorite part
// openModalHandler();

function spanToCapitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function createMarkupExercisesCard({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
  isFavorite,
}) {
  let starsGray = 5;
  let starsOrange = Number(rating.toFixed());
  starsGray -= starsOrange;
  let stars = '<r class="star-1"/>'
    .repeat(starsOrange)
    .concat('<r class="star-0"/>'.repeat(starsGray));
  return `<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <!-- <svg class="close-modal-icon" width="24" height="24"> -->
        <svg class="close-modal-icon"  width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <!-- <use href="./img/icons.svg#icon-cross"></use> -->
        <!-- </svg> -->
      </button>
      <div class="modal-gif-container">
        <picture>
          <source
            media="(max-width:767.98px)"
            type="image/gif"
            width="295"
            height="258"
          />
          <source
            media="(min-width:768px)"
            type="image/gif"
            width="270"
            height="259"
          />
          <img
            class="modal-gif"
            src="${gifUrl}"
            alt="${name}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${name}</h4>
        <div class="rating-container">
          <div class="star-block">
          <p class="modal-exercises-rating">${rating.toFixed(1)}</p>
          ${stars}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${spanToCapitalize(target)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${spanToCapitalize(bodyPart)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${spanToCapitalize(equipment)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${popularity}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${burnedCalories}/${time} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${description}</p>
        <div class="modal-buttons-container">
          <button data-id="${_id}" class="add-favorite-btn">
            ${isFavorite ? 'Remove from' : 'Add to favorites'}
            <!-- <svg class="icon-heart" width="18" height="18"> -->
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <!--  <use href="./img/icons.svg#icon-heart"></use>
            </svg> -->
          </button>
          <button data-id="${_id}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`;
}
