import{n as o}from"./footer-399ffbd4.js";import{a as g,b as n}from"./api-4422eb7b.js";import"./vendor-7f21c288.js";const r={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container")},a={filter:"Muscles",maxPage:0,page:1,limit:12},u=window.innerWidth;u<768&&(a.limit=8);s();r.category.addEventListener("click",l);function l(e){e.target.nodeName==="BUTTON"&&([...r.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),a.filter=e.target.textContent,a.page=1,s())}function y({filter:e,name:t,imgUrl:c}){const i=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${c}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${c}" style="background-image: ${i}">
        <p class="exercises-subcategory-name">${p(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function p(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function s(){g.get(n,a).then(({results:e,totalPages:t})=>{r.subcategory.innerHTML=e.map(y).join(""),a.maxPage=t,a.page===1&&b()}).catch(e=>o("error",`API error: ${e}`)).finally(()=>{[...r.category.children].forEach(e=>{e.disabled=!1})})}function b(){if(a.maxPage<2)r.pagescategory.innerHTML="",r.pagescategory.classList.remove("is-visible");else if(a.maxPage>=2){let e=`
          <button type="button" class="exercises-subcategory-page-btn exercises-subcategory-page-btn-active">1</button>
        `;for(let t=1;t<a.maxPage;t++)e+=`
        <button type="button" class="exercises-subcategory-page-btn">${t+1}</button>
      `;r.pagescategory.innerHTML=e,r.pagescategory.classList.add("is-visible"),r.pagescategory.addEventListener("click",d)}}function d(e){e.target.nodeName==="BUTTON"&&([...e.currentTarget.children].find(t=>t.classList.contains("exercises-subcategory-page-btn-active")).classList.remove("exercises-subcategory-page-btn-active"),e.target.classList.add("exercises-subcategory-page-btn-active"),a.page=e.target.textContent,s())}
//# sourceMappingURL=exercises_category_filter-6c706226.js.map
