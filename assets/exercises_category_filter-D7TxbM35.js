import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./vendor-eN7fkcT1.js";import{o as n,r,t as i}from"./notifier-BTcOYbl6.js";var a=e(t(),1),o={category:document.querySelector(`.exercises-category-container`),subcategory:document.querySelector(`.exercises-subcategory-list`),pagescategory:document.querySelector(`.exercises-subcategory-page-container`),title:document.querySelector(`.exercises-title`),search:document.querySelector(`.exercices-form`)},s=document.querySelector(`.loader-pagination`),c=document.querySelector(`.loader`);c.style.display=`block`;var l={filter:`Muscles`,page:1,limit:12};window.innerWidth<768&&(l.limit=8);var u=document.getElementById(`tui-pagination-container`),d=new a.default(u,{itemsPerPage:l.limit,visiblePages:3,centerAlign:!0});h(),o.category.addEventListener(`click`,f);function f(e){e.target.nodeName===`BUTTON`&&([...o.category.children].forEach(e=>{e.classList.contains(`exercises-category-btn-active`)&&e.classList.remove(`exercises-category-btn-active`),e.disabled=!0}),e.target.classList.add(`exercises-category-btn-active`),l.filter=e.target.textContent,l.page=1,h())}function p({filter:e,name:t,imgUrl:n}){return`
    <li class="exercises-subcategory-item" data-url="${n}" style="background-image: ${`
    linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${n}')
  `}">
        <p class="exercises-subcategory-name">${m(t)}</p>
        <p class="exercises-subcategory-type">${e}</p>
    </li>
  `}function m(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}function h(){n.get(r,l).then(({results:e,totalPages:t})=>{o.subcategory.classList.contains(`open-card`)&&(o.subcategory.classList.remove(`open-card`),o.title.textContent=`Exercises`,o.search.classList.remove(`is-visible`)),o.subcategory.innerHTML=e.map(p).join(``),t===1?u.classList.add(`is-hidden`):u.classList.remove(`is-hidden`),d.reset(t*l.limit)}).catch(e=>i.error(`API error: ${e}`)).finally(()=>{[...o.category.children].forEach(e=>{e.disabled=!1})})}d.on(`afterMove`,e=>{l.page=e.page,s.style.display=`block`,n.get(r,l).then(({results:e})=>{o.subcategory.innerHTML=e.map(p).join(``),s.style.display=`none`}).catch(e=>i.error(`API error: ${e}`)).finally(()=>{s.style.display=`none`,o.title.scrollIntoView({behavior:`smooth`,block:`start`,inline:`nearest`})})});export{o as refs};
//# sourceMappingURL=exercises_category_filter-D7TxbM35.js.map