import {API_EXERCISES_POINT, api} from './api.js';
import { notify } from './notifier.js';

let id = '64f389465ae26083f39b1ab2';
let exerciseItem = {};

// (open modal, get exer)
export function openModalHandler() {
  getExerciseItem(id);
}

// (hide only modal, backdrop is open)
export function hideModalHandler() {

}
// (show only modal, get exer fro server)
export function showModalHandler() {

}

// (closes the modal)
function closeModalHandler() {

}

// (adds to favorites)
function addFavoriteHandler() {
    const trashBtn = e.target

    if (trashBtn) {
      let exerciseId = trashBtn.dataset.id;
      console.log(exerciseId);
      let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let updFavorites = curFavorites.filter(
        exercise => exercise._id !== exerciseId
      );

      localStorage.setItem('favorites', JSON.stringify(updFavorites));
      favArr = updFavorites;
      generateFavList();
    }
}

// (remove from favorites)
function removeFavoriteHandler() {
  const trashBtn = e.target

  if (trashBtn) {
    let exerciseId = trashBtn.dataset.id;
    console.log(exerciseId);
    let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updFavorites = curFavorites.filter(
      exercise => exercise._id !== exerciseId
    );

    localStorage.setItem('favorites', JSON.stringify(updFavorites));
    favArr = updFavorites;
    generateFavList();
  }
}

function getFavoriteFromStorage(id) {

  if (n) {
    let exerciseId = trashBtn.dataset.id;
    console.log(exerciseId);
    let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updFavorites = curFavorites.filter(
      exercise => exercise._id !== exerciseId
    );

    localStorage.setItem('favorites', JSON.stringify(updFavorites));
    favArr = updFavorites;
    generateFavList();
  }
}


function addToFavoriteOnClick(event) {
  const element = event.target.closest('.add-favorite-btn');
  const elementId = element.dataset.id;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    const condition = favoriteList.some(({ _id }) => _id === elementId);
    if (condition) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favoriteList.filter(({ _id }) => _id !== elementId))
      );
      element.innerHTML = addInnerHTML();
      /* Remove card from DOM in favorite page */
      const favCard = document.getElementById('card-' + elementId);
      if (favCard) {
        favCard.remove();
        onClick();
        showAlert('Card removed from favorites!');
      }
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favoriteList, exercisesInfo])
      );
      element.innerHTML = addInnerHTML('remove');
    }
  } else {
    localStorage.setItem('favorites', JSON.stringify([exercisesInfo]));
    element.innerHTML = addInnerHTML('remove');
  }
}

function getExerciseItem(id) {
  api.get(API_EXERCISES_POINT + `/${id}`, {})
  .then(data => {
    exerciseItem = data;
    console.log(exerciseItem)
  })
  .catch(error => notify("error", `API error: ${error}`));
}

openModalHandler();

function addInnerHTML(value = 'add') {
  if (value === 'add') {
    return `Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  } else {
    return `Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  }
}



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
}) {
  let isAdded = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    isAdded = favoriteList.some(item => item._id === _id);
  }

  return `<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${icons}#icon-cross"></use>
        </svg>
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
          <p class="modal-exercises-rating">${rating.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
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
            ${isAdded ? 'Remove from' : 'Add to favorites'}
            <svg class="icon-heart" width="18" height="18">
              <use href="${icons}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${_id}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`;
}