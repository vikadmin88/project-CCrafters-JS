import{a,c as o,n}from"./api-7a975c30.js";import{P as d}from"./vendor-064ed679.js";const r={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container"),title:document.querySelector(".exercises-title"),search:document.querySelector(".exercices-form")},s={filter:"Muscles",page:1,limit:12},m=window.innerWidth;m<768&&(s.limit=8);const i=document.getElementById("tui-pagination-container"),p={itemsPerPage:s.limit,visiblePages:3,centerAlign:!0},l=new d(i,p);u();r.category.addEventListener("click",f);function f(e){e.target.nodeName==="BUTTON"&&([...r.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),s.filter=e.target.textContent,s.page=1,u())}function g({filter:e,name:t,imgUrl:c}){const y=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${c}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${c}" style="background-image: ${y}">
        <p class="exercises-subcategory-name">${b(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function b(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function u(){a.get(o,s).then(({results:e,totalPages:t})=>{r.subcategory.classList.contains("open-card")&&(r.subcategory.classList.remove("open-card"),r.title.textContent="Exercises",r.search.classList.remove("is-visible")),r.subcategory.innerHTML=e.map(g).join(""),t===1?i.classList.add("is-hidden"):i.classList.remove("is-hidden"),l.reset(t*s.limit)}).catch(e=>n.error(`API error: ${e}`)).finally(()=>{[...r.category.children].forEach(e=>{e.disabled=!1})})}l.on("afterMove",e=>{s.page=e.page,a.get(o,s).then(({results:t})=>{r.subcategory.innerHTML=t.map(g).join("")}).catch(t=>n.error(`API error: ${t}`)).finally(()=>{r.title.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})});export{r as refs};
//# sourceMappingURL=exercises_category_filter-d21a546c.js.map
