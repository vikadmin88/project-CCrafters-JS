import {API_QUOTE_POINT, api} from './api.js';
import {notify} from './notifier.js';


// API_QUOTE_POINT
apiReqParams = {};
api.get(API_QUOTE_POINT, apiReqParams)
  .then(data => console.log(data))
  .catch(error => notify("error", `API error: ${error}`));