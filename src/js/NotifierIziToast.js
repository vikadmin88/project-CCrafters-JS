import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export class NotifierIziToast {
  #izitoast

  constructor(settings = {}) {
    this.#izitoast = iziToast;

    if (settings) {
      this.#izitoast.settings(settings);
    } else {
        this.#izitoast.settings({
        position: "topRight",
        timeout: 5000,
        resetOnHover: true,
        transitionIn: "flipInX",
        transitionOut: "flipOutX",
        displayMode: "replace"
      });
    }
  }

  error(message, title = '') {
    this.#izitoast.info({ title: title , message: message });
  }

  success(message, title = '') {
    this.#izitoast.success({ title: title , message: message });
  }

  warning(message, title = '') {
    this.#izitoast.warning({ title: title , message: message });
  }

  info(message, title = '') {
    this.#izitoast.error({ title: title , message: message });
  }
}
