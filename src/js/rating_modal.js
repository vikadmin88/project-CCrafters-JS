const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const sendBtn = document.getElementById('sendBtn');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const stars = document.querySelectorAll('.star');


const usedEmails = [];


closeBtn.addEventListener('click', closeModal);


sendBtn.addEventListener('click', function() {
  const email = emailInput.value;
  const comment = commentInput.value;
  const rating = getRating();

  if (isEmailUsed(email)) {
    alert('Ця адреса електронної пошти вже використовується!');
    return;
  }

  sendDataToServer(email, comment, rating);
});


stars.forEach(star => {
  star.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});


function getRating() {
  const selectedStars = document.querySelectorAll('.star.selected');
  return selectedStars.length;
}


function sendDataToServer(email, comment, rating) {
  fetch('url_', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      comment: comment,
      rating: rating,
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    handleServerResponse(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}


function handleServerResponse(data) {
}


function isEmailUsed(email) {
  return usedEmails.includes(email);
}


function showModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
