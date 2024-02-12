import{a as o,b as n,n as g}from"./exercise_modal-ea39554b.js";import"./vendor-7f21c288.js";const a={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container"),title:document.querySelector(".exercises-title"),search:document.querySelector(".exercices-form")},r={filter:"Muscles",maxPage:0,page:1,limit:12},l=window.innerWidth;l<768&&(r.limit=8);s();a.category.addEventListener("click",u);function u(e){e.target.nodeName==="BUTTON"&&([...a.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),r.filter=e.target.textContent,r.page=1,s())}function y({filter:e,name:t,imgUrl:c}){const i=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${c}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${c}" style="background-image: ${i}">
        <p class="exercises-subcategory-name">${b(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function b(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function s(){o.get(n,r).then(({results:e,totalPages:t})=>{a.subcategory.classList.contains("open-card")&&(a.subcategory.classList.remove("open-card"),a.title.textContent="Exercises",a.search.classList.remove("is-visible")),a.subcategory.innerHTML=e.map(y).join(""),r.maxPage=t,r.page===1&&p()}).catch(e=>g("error",`API error: ${e}`)).finally(()=>{[...a.category.children].forEach(e=>{e.disabled=!1})})}function p(){if(r.maxPage<2)a.pagescategory.innerHTML="",a.pagescategory.classList.remove("is-visible");else if(r.maxPage>=2){let e=`
          <button type="button" class="exercises-subcategory-page-btn exercises-subcategory-page-btn-active">1</button>
        `;for(let t=1;t<r.maxPage;t++)e+=`
        <button type="button" class="exercises-subcategory-page-btn">${t+1}</button>
      `;a.pagescategory.innerHTML=e,a.pagescategory.classList.add("is-visible"),a.pagescategory.addEventListener("click",d)}}function d(e){e.target.nodeName==="BUTTON"&&([...e.currentTarget.children].find(t=>t.classList.contains("exercises-subcategory-page-btn-active")).classList.remove("exercises-subcategory-page-btn-active"),e.target.classList.add("exercises-subcategory-page-btn-active"),r.page=e.target.textContent,s())}export{a as refs};
//# sourceMappingURL=exercises_category_filter-8ac5984d.js.map
