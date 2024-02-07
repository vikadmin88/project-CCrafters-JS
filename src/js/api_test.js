'use strict';

// Import this for partial js files that use the API.
// import {API_BASE_URL, API_FILTER_POINT, API_EXERCISES_POINT, API_SUBSCRIPTION_POINT, API_QUOTE_POINT, api} from './api.js';
// import {notify} from './notifier.js';

import {notify} from "./notifier.js";
import {ApiPerformer} from "./ApiPerformer.js";


const API_BASE_URL = "https://energyflow.b.goit.study/api/";
const API_FILTER_POINT = "filters";
const API_EXERCISES_POINT = "exercises";
const API_SUBSCRIPTION_POINT = "subscription";
const API_QUOTE_POINT = "quote";
const api = new ApiPerformer(API_BASE_URL);
let apiReqParams = {};

// API_FILTER_POINT
apiReqParams = {
  filter: "Muscles",
  page: 1,
  limit: 12
}
api.get(API_FILTER_POINT, apiReqParams)
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));


// API_QUOTE_POINT
apiReqParams = {};
api.get(API_QUOTE_POINT, apiReqParams)
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));

// API_EXERCISES_POINT
apiReqParams = {
  bodypart: "back",
  muscles: "lats",
  equipment: "barbell",
  keyword: "pull",
  page: 1,
  limit: 10
}
api.get(API_EXERCISES_POINT, apiReqParams)
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));

// API_EXERCISES_POINT + id
api.get(API_EXERCISES_POINT + "/64f389465ae26083f39b17a2", apiReqParams)
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));


// API_EXERCISES_POINT rating
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

// API_SUBSCRIPTION_POINT
apiReqParams = {
  email: "test222@gmail.com"
};
api.post(API_SUBSCRIPTION_POINT, apiReqParams)
  .then(response => {
    notify("success", response.data.message);
  })
  .catch(error => {
    if (error.message.response.status === 409) {
      notify("warning", `Warning: ${error.message.response.data.message}`);
    } else {
      notify("error", `API error: ${error.message.response.data.message}`);
    }
  });


