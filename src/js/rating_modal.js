
// import { showModalHandler } from './exercise_modal.js';
import { notify } from './notifier.js';
import { API_EXERCISES_POINT, api } from './api.js';

const refs = {
  icons: document.querySelectorAll('.rating-star-icon'),
  form: document.querySelector('.rating-form'),
  stars: document.querySelector('.rating-star-list'),
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

  console.log(ratingParams);
  console.log(JSON.stringify(ratingParams));

  const id = '64f389465ae26083f39b182b';

  api
    .patch(`${API_EXERCISES_POINT}/${id}/rating`, JSON.stringify(ratingParams))
    .then(response => {
      console.log(response);
      notify('success', 'Rating has been updated!');
    })
    .catch(error => {
      console.log(error);
      if (error.message.response.status === 409) {
        notify('warning', `Warning: ${error.message.response.data.message}`);
      } else {
        notify('error', `API error: ${error.message.response.data.message}`);
      }
    });
  
   

   
  document.querySelector('.open-rating-modal-button').addEventListener('click', openRatingModal);
  document.querySelector('.close-rating-modal-button').addEventListener('click', closeModal);

  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', closeModal); 
      
var backdrop = document.querySelector('.backdrop-rating');
backdrop.addEventListener('click', function(event) {
    if (event.target === backdrop) {
        closeModal();
    }
});
}
 function closeModal() {
   var modal = document.querySelector('.backdrop-rating');
   modal.classList.add('visually-hidden');
    // modal.style.display = 'none';
}
export function openRatingModal() {
    var modal = document.querySelector('.rating-modal'); 
    modal.style.display = 'block';
      }