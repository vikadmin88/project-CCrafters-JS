var l=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var o=(e,t,r)=>(l(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},n=(e,t,r,a)=>(l(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r);import{n as b}from"./quote-13ba2a7f.js";import{a as g,A as p}from"./vendor-0a6bc612.js";var c;class d{constructor(t){y(this,c,void 0);n(this,c,t)}get apiUrl(){return o(this,c)}set apiUrl(t){n(this,c,t)}async get(t,r){try{return await g.get(o(this,c)+t,{params:r}).then(({data:a})=>a)}catch(a){throw new Error(a)}}async post(t,r){try{return await g.post(o(this,c)+t,{params:r}).then(a=>a)}catch(a){throw new p(a)}}async patch(t,r){try{return await g.patch(o(this,c)+t,{params:r}).then(a=>a)}catch(a){throw new p(a)}}}c=new WeakMap;const h="https://energyflow.b.goit.study/api/",f="filters",x=new d(h),i={category:document.querySelector(".exercises-category-container"),subcategory:document.querySelector(".exercises-subcategory-list"),pagescategory:document.querySelector(".exercises-subcategory-page-container")},s={filter:"Muscles",maxPage:0,page:1,limit:12},m=window.innerWidth;m<768&&(s.limit=8);u();i.category.addEventListener("click",L);function L(e){e.target.nodeName==="BUTTON"&&([...i.category.children].forEach(t=>{t.classList.contains("exercises-category-btn-active")&&t.classList.remove("exercises-category-btn-active"),t.disabled=!0}),e.target.classList.add("exercises-category-btn-active"),s.filter=e.target.textContent,s.page=1,u())}function w({filter:e,name:t,imgUrl:r}){const a=`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${r}')
  `;return`
    <li class="exercises-subcategory-item" data-url="${r}" style="background-image: ${a}">
        <p class="exercises-subcategory-name">${P(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function P(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function u(){x.get(f,s).then(({results:e,totalPages:t})=>{i.subcategory.innerHTML=e.map(w).join(""),s.maxPage=t,s.page===1&&A()}).catch(e=>b("error",`API error: ${e}`)).finally(()=>{[...i.category.children].forEach(e=>{e.disabled=!1})})}function A(){if(s.maxPage<2)i.pagescategory.innerHTML="",i.pagescategory.classList.remove("is-visible");else if(s.maxPage>=2){let e=`
          <button type="button" class="exercises-subcategory-page-btn exercises-subcategory-page-btn-active">1</button>
        `;for(let t=1;t<s.maxPage;t++)e+=`
        <button type="button" class="exercises-subcategory-page-btn">${t+1}</button>
      `;i.pagescategory.innerHTML=e,i.pagescategory.classList.add("is-visible"),i.pagescategory.addEventListener("click",T)}}function T(e){e.target.nodeName==="BUTTON"&&([...e.currentTarget.children].find(t=>t.classList.contains("exercises-subcategory-page-btn-active")).classList.remove("exercises-subcategory-page-btn-active"),e.target.classList.add("exercises-subcategory-page-btn-active"),s.page=e.target.textContent,u())}
//# sourceMappingURL=exercises-b226c681.js.map
