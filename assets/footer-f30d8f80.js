import{n as r,a as n,d as o}from"./api-7a975c30.js";import"./vendor-064ed679.js";const s=document.querySelector(".footer-form");s.addEventListener("submit",i);function i(t){t.preventDefault();const a=s.elements.email.value.trim();if(!a){r.error("Please, fill in the field before sending!");return}n.post(o,{email:a}).then(e=>{r.success(e.data.message),s.reset()}).catch(e=>{e.message&&e.message.response.status===409?r.warning("You are already subscribed."):r.error("An error occurred. Please try again later.")})}
//# sourceMappingURL=footer-f30d8f80.js.map
