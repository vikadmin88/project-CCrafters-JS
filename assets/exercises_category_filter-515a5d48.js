import{a as i,c as o,n}from"./notifier-44391d19.js";import{P as y}from"./vendor-4c9dc65a.js";const s={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container"),title:document.querySelector(".exercises-title"),search:document.querySelector(".exercices-form")},r={filter:"Muscles",maxPage:0,page:1,limit:12},m=window.innerWidth;m<768&&(r.limit=8);const a=document.getElementById("tui-pagination-container"),p={totalItems:r.maxPage,itemsPerPage:r.limit,visiblePages:3,centerAlign:!0},g=new y(a,p);u();s.category.addEventListener("click",f);function f(e){e.target.nodeName==="BUTTON"&&([...s.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),r.filter=e.target.textContent,r.page=1,u())}function l({filter:e,name:t,imgUrl:c}){const d=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${c}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${c}" style="background-image: ${d}">
        <p class="exercises-subcategory-name">${b(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function b(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function u(){i.get(o,r).then(({results:e,totalPages:t})=>{s.subcategory.classList.contains("open-card")&&(s.subcategory.classList.remove("open-card"),s.title.textContent="Exercises",s.search.classList.remove("is-visible")),s.subcategory.innerHTML=e.map(l).join(""),r.maxPage=t,t===1?a.classList.add("is-hidden"):a.classList.remove("is-hidden"),g.reset(t*r.limit)}).catch(e=>n("error",`API error: ${e}`)).finally(()=>{[...s.category.children].forEach(e=>{e.disabled=!1}),g.on("afterMove",e=>{r.page=e.page,i.get(o,r).then(({results:t})=>{s.subcategory.innerHTML=t.map(l).join("")}).catch(t=>n("error",`API error: ${t}`))})})}export{s as refs};
//# sourceMappingURL=exercises_category_filter-515a5d48.js.map
