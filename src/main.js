'use strict';

import {notify} from './js/notifier.js';
import {ApiPerformer} from './js/ApiPerformer.js';
import('./js/exercises.js');
import('./js/exercises_modal.js');
import('./js/footer.js');
import('./js/quote.js');

const API_BASE_URL = "https://energyflow.b.goit.study/api/";
const API_FILTER_POINT = "filters";
const API_EXERCISES_POINT = "exercises";
const API_SUBSCRIPTION_POINT = "subscription";
const api = new ApiPerformer(API_BASE_URL);
let apiReqParams = {};
