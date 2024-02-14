import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
iziToast.settings({
  position: "topRight",
  timeout: 3000,
  resetOnHover: true,
  transitionIn: "flipInX",
  transitionOut: "flipOutX"
});

export function notify(type, message) {
  switch (type) {
    case "error":
      iziToast.error({ message: message });
      break;
    case "warning":
      iziToast.warning({ message: message });
      break;
    case "success":
      iziToast.success({ message: message });
      break;
    default:
  }
}