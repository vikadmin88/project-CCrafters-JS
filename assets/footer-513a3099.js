import{n as t,a as o,d as n}from"./api-0d4e8fa1.js";import"./vendor-064ed679.js";const a=document.querySelector(".footer-form");l();a.addEventListener("submit",i);function i(r){r.preventDefault();const s=a.elements.email.value.trim();if(!s){t("error","Please, fill in the field before sending!");return}o.post(n,{email:s}).then(e=>{t("success",e.data.message),localStorage.setItem("feedback-form-state",JSON.stringify({email:s})),a.reset()}).catch(e=>{e.message&&e.message.response.status===409?t("warning","You are already subscribed."):t("error","An error occurred. Please try again later.")})}function l(){const r=JSON.parse(localStorage.getItem("feedback-form-state"))??{};a.elements.email.value=r.email||""}
//# sourceMappingURL=footer-513a3099.js.map
