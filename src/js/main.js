'use strict';

import {notify} from "./notifier.js";
import {ApiPerformer} from "./ApiPerformer.js";


const apiBaseUrl = "https://energyflow.b.goit.study/api/";
const apiPerformer = new ApiPerformer(apiBaseUrl);

let par = {
  filter: "Muscles",
  page: 1,
  limit: 12
}
apiPerformer.get({reqPoint: "filters", params: par})
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));

let par2 = {
  bodypart: "back",
  muscles: "lats",
  equipment: "barbell",
  keyword: "pull",
  page: 1,
  limit: 10
}
apiPerformer.get({reqPoint: "exercises", params: par2})
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));
// apiPerformer.get({reqPoint: "quote", params: {}})
//   .then(data => console.log(data))
//   .catch(error => notify("error", `API error: ${error}`));


//   apiPerformer.get({reqPoint: "exercises/64f389465ae26083f39b17a2", params: {}})
//   .then(data => console.log(data))
//   .catch(error => notify("error", `API error: ${error}`));


// subscriptions
// apiPerformer.post({reqPoint: "subscription", params: {email: "test@gmail8.com"}})
//   .then(response => {
//     notify("success", response.data.message);
//   })
//   .catch(error => {
//     if (error.message.response.status === 409) {
//       notify("warning", `Warning: ${error.message.response.data.message}`);
//     } else {
//       notify("error", `API error: ${error.message.response.data.message}`);
//     }
//   });

// rating
// apiPerformer.patch({reqPoint: "exercises/64f389465ae26083f39b17a2/rating", params: {
//   "rate": 4,
//   "email": "test@gmail6.com",
//   "review": "My best exercise"
// }})
//   .then(response => {
//     console.log(response);
//     notify("success", "Rating has been updated!");
//   })
//   .catch(error => {
//     console.log(error);
//     if (error.message.response.status === 409) {
//       notify("warning", `Warning: ${error.message.response.data.message}`);
//     } else {
//       notify("error", `API error: ${error.message.response.data.message}`);
//     }
//   });

console.log("GET");