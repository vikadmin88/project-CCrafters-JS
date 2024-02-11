import { notify } from './notifier.js';
import { API_SUBSCRIPTION_POINT, api } from './api.js';

const feedbackForm = document.querySelector('.footer-form');

checkInputStart();

feedbackForm.addEventListener('submit', sendUserInfo);

function sendUserInfo(event) {
  event.preventDefault();

  const email = feedbackForm.elements.email.value.trim();

  if (!email) {
    notify('error', 'Please, fill in the field before sending!');
    return;
  }

  api
    .post(API_SUBSCRIPTION_POINT, { email: email })
    .then(response => {
      notify('success', 'You have successfully subscribed!');
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify({ email: email })
      );
      feedbackForm.reset();
    })

    .catch(error => {
      if (error.message && error.message.response.status === 409) {
        notify('warning', 'You are already subscribed.');
      } else {
        notify('error', 'An error occurred. Please try again later.');
      }
    });
}

function checkInputStart() {
  const localInfo =
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
  feedbackForm.elements.email.value = localInfo.email || '';
}
