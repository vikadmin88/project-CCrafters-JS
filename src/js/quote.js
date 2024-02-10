// import { API_QUOTE_POINT, api } from './api.js';
// import { notify } from './notifier.js';

// function getCurrentDate() {
//   const date = new Date();
//   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// }

// function updateQuote() {
//   const storedData = JSON.parse(localStorage.getItem('quoteOfTheDay'));
//   const storedDate = localStorage.getItem('quoteDate');
//   const currentDate = getCurrentDate();

//   if (
//     storedData &&
//     storedData.quote &&
//     storedData.author &&
//     storedDate === currentDate
//   ) {
//     document.querySelector('.quote-text').textContent = storedData.quote;
//     document.querySelector('.quote-author').textContent = storedData.author;
//   } else {
//     api
//       .get(API_QUOTE_POINT, {})
//       .then(({ quote, author }) => {
//         if (quote && author) {
//           localStorage.setItem(
//             'quoteOfTheDay',
//             JSON.stringify({ quote, author })
//           );
//           localStorage.setItem('quoteDate', currentDate);
//           document.querySelector('.quote-text').textContent = quote;
//           document.querySelector('.quote-author').textContent = author;
//         } else {
//           console.log('Не вдалося оновити через помилку.');
//         }
//       })
//       .catch(error => {
//         console.error('Під час отримання цитати сталася помилка:', error);
//         notify('error', `API error: ${error}`);
//       });
//   }
// }

// updateQuote();
