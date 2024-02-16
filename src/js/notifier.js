import {NotifierIziToast} from './NotifierIziToast.js';

export const notify = new NotifierIziToast({
  position: "topRight",
  timeout: 5000,
  resetOnHover: true,
  transitionIn: "flipInX",
  transitionOut: "flipOutX",
  displayMode: "replace"
});
