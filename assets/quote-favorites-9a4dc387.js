import{a as n,A as u,n as c}from"./exercise_modal-ea39554b.js";import"./vendor-7f21c288.js";function s(){const t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}function l(){const t=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=localStorage.getItem("quoteDate"),r=s();t&&t.quote&&t.author&&a===r?(document.querySelector(".quote-favorites-text").textContent=t.quote,document.querySelector(".quote-favorites-author").textContent=t.author):n.get(u,{}).then(({quote:e,author:o})=>{e&&o?(localStorage.setItem("quoteOfTheDay",JSON.stringify({quote:e,author:o})),localStorage.setItem("quoteDate",r),document.querySelector(".quote-favorites-text").textContent=e,document.querySelector(".quote-favorites-author").textContent=o):console.log("Не вдалося оновити через помилку.")}).catch(e=>{console.error("Під час отримання цитати сталася помилка:",e),c("error",`API error: ${e}`)})}l();
//# sourceMappingURL=quote-favorites-9a4dc387.js.map
