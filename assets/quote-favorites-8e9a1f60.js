import{a as n,A as u,n as c}from"./api-0d4e8fa1.js";import"./vendor-064ed679.js";function s(){const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}function l(){const e=JSON.parse(localStorage.getItem("quoteOfTheDay")),a=localStorage.getItem("quoteDate"),r=s();e&&e.quote&&e.author&&a===r?(document.querySelector(".quote-favorites-text").textContent=e.quote,document.querySelector(".quote-favorites-author").textContent=e.author):n.get(u,{}).then(({quote:t,author:o})=>{t&&o?(localStorage.setItem("quoteOfTheDay",JSON.stringify({quote:t,author:o})),localStorage.setItem("quoteDate",r),document.querySelector(".quote-favorites-text").textContent=t,document.querySelector(".quote-favorites-author").textContent=o):console.log("Update failed due to an error.")}).catch(t=>{console.error("An error occurred while retrieving the quote:",t),c("error",`API error: ${t}`)})}l();
//# sourceMappingURL=quote-favorites-8e9a1f60.js.map
