import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const sendBtn = document.getElementById('sendBtn');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const form= document.querySelectorAll('.modal-content');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault;
}

apiReqParams = {
  "rate": 4,
  "email": "test@gmail6.com",
  "review": "My best exercise"
}
api.patch(API_EXERCISES_POINT + "/64f389465ae26083f39b17a2/rating", apiReqParams)
  .then(response => {
    console.log(response);
    notify("success", "Rating has been updated!");
  })
  .catch(error => {
    console.log(error);
    if (error.message.response.status === 409) {
      notify("warning", `Warning: ${error.message.response.data.message}`);
    } else {
      notify("error", `API error: ${error.message.response.data.message}`);
    }
  });




// sendBtn.addEventListener('click', function() {
//   const email = emailInput.value;
//   const comment = commentInput.value;
//   const rating = getRating();

//   if (isEmailUsed(email)) {
//     alert('Ця адреса електронної пошти вже використовується!');
//     return;
//   }

//   sendDataToServer(email, comment, rating);
// });


// stars.forEach(star => {
//   star.addEventListener('click', function() {
//     this.classList.toggle('selected');
//   });
// });


// function getRating() {
//   const selectedStars = document.querySelectorAll('.star.selected');
//   return selectedStars.length;
// }


// function sendDataToServer(email, comment, rating) {
//   fetch('url_', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: email,
//       comment: comment,
//       rating: rating,
//     }),
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     handleServerResponse(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });
// }


// function handleServerResponse(data) {
// }


// function isEmailUsed(email) {
//   return usedEmails.includes(email);
// }


// function showModal() {
//   modal.style.display = 'block';
// }

// function closeModal() {
//   modal.style.display = 'none';
// }
// document.querySelectorAll('.star').forEach(item => {
//   item.addEventListener('click', event => {
//     const stars = Array.from(item.parentNode.children);
//     const index = stars.indexOf(item);
    
//     // Встановлюємо активний клас для всіх зірок, які менше або дорівнюють поточній
//     stars.forEach((star, i) => {
//       star.classList.toggle('active', i <= index);
//     });

//     // Оновлюємо значення рейтингу
//     const ratingValue = document.querySelector('.rating-value');
//     ratingValue.textContent = (index + 1); 
//   });
// });