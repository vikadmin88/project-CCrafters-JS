const c={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list")};c.category.addEventListener("click",r);function r(e){e.target.nodeName==="BUTTON"&&([...e.currentTarget.children].find(t=>t.classList.contains("exercises-category-btn-active")).classList.remove("exercises-category-btn-active"),e.target.classList.add("exercises-category-btn-active"))}
//# sourceMappingURL=exercises-97469979.js.map