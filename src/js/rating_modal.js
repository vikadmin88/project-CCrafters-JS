import { notify } from './notifier.js';
import { API_EXERCISES_POINT, api } from './api.js';
import { closeModalHandler } from './exercise_modal.js';

let callerContext;
let exerciseId;

const refs = {
  icons: document.querySelectorAll('.rating-star-icon'),
  form: document.querySelector('.rating-form'),
  stars: document.querySelector('.rating-star-list'),
  backdrop: document.querySelector('.backdrop-rating'),
};

refs.icons.forEach((icon, index) => {
  icon.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      refs.icons[i].classList.add('hovered');
    }
  });

  icon.addEventListener('mouseout', () => {
    for (let i = 0; i < index; i++) {
      refs.icons[i].classList.remove('hovered');
    }
  });
});

refs.form.addEventListener('submit', sendRating);
refs.stars.addEventListener('click', changeRating);
refs.backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

function changeRating(event) {
  if (event.target.nodeName !== 'INPUT') {
    return;
  }

  const rating = event.currentTarget.previousElementSibling;

  rating.textContent = parseFloat(event.target.value).toFixed(1);

  const stars = Array.from(
    event.currentTarget.querySelectorAll('.rating-star-icon')
  );
  const index = stars.indexOf(event.target.nextElementSibling);

  stars.forEach((star, i) => {
    star.classList.toggle('selected', i <= index);
  });
}

function sendRating(event) {
  event.preventDefault();

  const rate = parseInt(refs.form.querySelector('.rating-value').textContent);
  const email = event.currentTarget.elements.email.value;
  const review = event.currentTarget.elements.comment.value;

  const ratingParams = {
    rate,
    email,
    review,
  };

  api
    .patch(
      `${API_EXERCISES_POINT}/${exerciseId}/rating`,
      JSON.stringify(ratingParams)
    )
    .then(response => {
      notify('success', 'Rating has been updated!');
    })
    .catch(error => {
      if (error.message.response.status === 409) {
        notify('warning', `Warning: ${error.message.response.data.message}`);
      } else {
        notify('error', `API error: ${error.message.response.data.message}`);
      }
    });
}

function closeModal(e) {
  if (
    !e.target.classList.contains('backdrop-rating') &&
    !e.target.classList.contains('close') &&
    !e.target.closest('.close') &&
    e.code !== 'Escape'
  ) {
    return;
  }

  if (callerContext) {
    callerContext.classList.remove('visually-hidden');
  }

  refs.backdrop.classList.add('visually-hidden');

  document.addEventListener('keydown', closeModalHandler);
}

export function openRatingModal(callContext, event) {
  callerContext = callContext;
  exerciseId = event.target.dataset.id;
  refs.backdrop.classList.remove('visually-hidden');

  document.removeEventListener('keydown', closeModalHandler);
}
