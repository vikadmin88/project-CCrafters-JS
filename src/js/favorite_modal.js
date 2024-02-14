import { notify } from './notifier.js';
import { renderFavorites } from './favorites.js';
import { openRatingModal } from './rating_modal.js';


let modalCard = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-modal-btn');
let favBtn = document.querySelector('.add-favorite-btn');
let ratingBtn = document.querySelector('.give-rating-btn');
let modal = document.querySelector('.backdrop-favorite');
let loader = document.querySelector('.loader-favorites');

let exerciseObject = { isFavorite: false };


// (open modal, get favorites)
export function openModalFavoritesHandler(e) {
  if (
    !e.target &&
    !e.target.classList.contains('favorites-list-button') &&
    !e.target.closest('.favorites-list-button').classList.contains('favorites-list-button')
  ) {
    return;
  }

  let id;
  try {
    id = e.target.closest('.favorites-list-button').dataset.id;
  } catch {
    id = '';
  }

  // let id = '64f389465ae26083f39b1ab2';
  if (!id) {
    return;
  }
  addLoader();
  openModal(id);
}

function addLoader() {
  document.querySelector('.backdrop-favorite').classList.remove('visually-hidden');
  document.querySelector('.modal').innerHTML = '<div class="loader-favorite"></div>';
  document.querySelector('.loader-favorite').style.display = 'block';
}

document.addEventListener('keydown', closeModalHandler);
modal.addEventListener('click', closeModalHandler);
// (closes the modal)
function closeModalHandler(e) {
  console.log(e);
  if (
    !e.target.classList.contains('backdrop-favorites') &&
    !e.target.classList.contains('close-modal-btn') &&
    !e.target.closest('.close-modal-btn') &&
    e.code !== 'Escape' &&
    !modal.classList.contains('visually-hidden')
    ) {
      return;
    }
    modal.classList.add('visually-hidden');
  renderFavorites();
}

function addRemoveFavoriteHandler(e) {
  if (
    Object.hasOwn(exerciseObject, 'isFavorite') &&
    exerciseObject.isFavorite
  ) {
    removeFromFavoriteStorage(e);
    exerciseObject.isFavorite = false;
    notify('success', 'The exercise has been removed from your favorites list');
  } else {
    addToFavoriteStorage(e);
    exerciseObject.isFavorite = true;
    notify('success', 'The exercise has been added to your favorites list');
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
    let itemArrObj;
    let exerciseId = id;
    let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    itemArrObj = curFavorites.filter(exercise => exercise._id === exerciseId);
    if (itemArrObj.length) {
      exerciseObject = itemArrObj[0];
      exerciseObject.isFavorite = true;
      return exerciseObject;
    }
    return false;
  }
}

function openModal(id) {
  const item = getExerciseFromStorage(id);
  if (item) {
    markupAndReload(item);
  }
}

function markupAndReload(item) {
  document.querySelector('.modal').innerHTML = createMarkupExercisesCard(item);

  // refresh all elements after recreate them, and add listeners
  closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', closeModalHandler);

  favBtn = document.querySelector('.add-favorite-btn');
  favBtn.addEventListener('click', addRemoveFavoriteHandler);

  ratingBtn = document.querySelector('.give-rating-btn');
  ratingBtn.addEventListener('click', ratingHandler);
}

function ratingHandler(e) {
  document.querySelector('.backdrop-favorite').classList.add('visually-hidden');
  openRatingModal(document.querySelector('.backdrop-favorite'), e);
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
        <svg class="close-modal-icon"  width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button data-id="${_id}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`;
}
