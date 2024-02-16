import{a as o,c as n,n as l}from"./api-ff36a7fc.js";import{P as p}from"./vendor-72a3c01e.js";const r={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container"),title:document.querySelector(".exercises-title"),search:document.querySelector(".exercices-form")},a=document.querySelector(".loader-pagination"),m=document.querySelector(".loader");m.style.display="block";const s={filter:"Muscles",page:1,limit:12},b=window.innerWidth;b<768&&(s.limit=8);const i=document.getElementById("tui-pagination-container"),f={itemsPerPage:s.limit,visiblePages:3,centerAlign:!0},g=new p(i,f);d();r.category.addEventListener("click",h);function h(e){e.target.nodeName==="BUTTON"&&([...r.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),s.filter=e.target.textContent,s.page=1,d())}function y({filter:e,name:t,imgUrl:c}){const u=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${c}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${c}" style="background-image: ${u}">
        <p class="exercises-subcategory-name">${x(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function x(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function d(){o.get(n,s).then(({results:e,totalPages:t})=>{r.subcategory.classList.contains("open-card")&&(r.subcategory.classList.remove("open-card"),r.title.textContent="Exercises",r.search.classList.remove("is-visible")),r.subcategory.innerHTML=e.map(y).join(""),t===1?i.classList.add("is-hidden"):i.classList.remove("is-hidden"),g.reset(t*s.limit)}).catch(e=>l.error(`API error: ${e}`)).finally(()=>{[...r.category.children].forEach(e=>{e.disabled=!1})})}g.on("afterMove",e=>{s.page=e.page,a.style.display="block",o.get(n,s).then(({results:t})=>{r.subcategory.innerHTML=t.map(y).join(""),a.style.display="none"}).catch(t=>l.error(`API error: ${t}`)).finally(()=>{a.style.display="none",r.title.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})});export{r as refs};
//# sourceMappingURL=exercises_category_filter-dabafdee.js.map
