import {ApiPerformer} from './ApiPerformer.js';

export const API_BASE_URL = "https://energyflow.b.goit.study/api/";
export const API_FILTER_POINT = "filters";
export const API_EXERCISES_POINT = "exercises";
export const API_SUBSCRIPTION_POINT = "subscription";
export const API_QUOTE_POINT = "quote";

export const api = new ApiPerformer(API_BASE_URL);