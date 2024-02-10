import {
  API_BASE_URL,
  API_FILTER_POINT,
  API_EXERCISES_POINT,
  API_SUBSCRIPTION_POINT,
  API_QUOTE_POINT,
  api,
} from './api.js';
import { notify } from './notifier.js';

function getCurrentDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function updateQuote() {
  const storedQuote = localStorage.getItem('quoteOfTheDay');
  const storedDate = localStorage.getItem('quoteDate');
  const currentDate = getCurrentDate();

  if (storedQuote && storedDate === currentDate) {
    document.querySelector('.quote-text').textContent = storedQuote;
  } else {
    api
      .getQuote(API_QUOTE_POINT)
      .then(quote => {
        if (quote) {
          localStorage.setItem('quoteOfTheDay', quote);
          localStorage.setItem('quoteDate', currentDate);
          document.querySelector('.quote-text').textContent = quote;
        } else {
          console.log('Could not update the quote due to an error.');
        }
      })
      .catch(error => {
        console.error('An error occurred while fetching the quote:', error);
        notify.error('An error occurred while fetching the quote.');
      });
  }
}

document.addEventListener('DOMContentLoaded', updateQuote);
