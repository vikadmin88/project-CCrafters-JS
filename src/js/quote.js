// import { API_QUOTE_POINT, api } from './api.js';
// import { notify } from './notifier.js';

// // API_QUOTE_POINT
// apiReqParams = {};
// api
//   .get(API_QUOTE_POINT, apiReqParams)
//   .then(data => console.log(data))
//   .catch(error => notify('error', `API error: ${error}`));



import { API_QUOTE_POINT, api } from './api.js';
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
    document.querySelector('quote-favorites-text').textContent = storedQuote;
  } else {
    api
      .get(API_QUOTE_POINT, {})
      .then(quote => {
        if (quote) {
          localStorage.setItem('quoteOfTheDay', quote);
          localStorage.setItem('quoteDate', currentDate);
          document.querySelector('.quote-text').textContent = quote;
          document.querySelector('quote-favorites-text').textContent = quote;
        } else {
          console.log('Не вдалося оновити через помилку.');
        }
      })
      .catch(error => {
        console.error('Під час отримання цитати сталася помилка:', error);
        notify('error', `API error: ${error}`);
      });
  }
}

document.addEventListener('DOMContentLoaded', updateQuote);
