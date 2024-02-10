const o=document.querySelector(".scroll-up-button");o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY<230?o.classList.add("active"):o.classList.remove("active")});
//# sourceMappingURL=scroll_up-c5d587ef.js.map
