const o=document.querySelector(".scroll-up-button");o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY<230?o.classList.add("scroll-up-button-active"):o.classList.remove("scroll-up-button-active")});
//# sourceMappingURL=scroll_up-598e12cd.js.map
