const t=document.querySelector(".backdrop"),o=document.querySelector(".btn-close-mob"),s=document.querySelector(".first-link-home"),n=document.querySelector(".link-favorites"),e=window.location.pathname;e.endsWith("/")||e.endsWith("/index.html")?s.classList.add("active"):e.endsWith("/favorites.html")&&n.classList.add("active");o.addEventListener("click",()=>{t.classList.remove("is-open")});
//# sourceMappingURL=mobile_menu-31ab7219.js.map