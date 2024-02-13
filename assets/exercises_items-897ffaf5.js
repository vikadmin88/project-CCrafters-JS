import{a as c,b as l}from"./notifier-44391d19.js";import{refs as i}from"./exercises_category_filter-515a5d48.js";import{P as f}from"./vendor-4c9dc65a.js";import{openModalHandler as v}from"./exercise_modal-bac36720.js";const s={bodypart:"",muscles:"",equipment:"",keyword:"",page:1,limit:8},o=document.getElementById("tui-pagination-container"),b={itemsPerPage:8,visiblePages:3,centerAlign:!0},d=new f(o,b);let u="";i.subcategory.addEventListener("click",w);i.search.addEventListener("submit",L);function L(e){e.preventDefault();const t=e.target;s.keyword=t.elements.searchstr.value.trim().toLowerCase(),console.log(s),t.reset(),n()}function w(e){if(e.preventDefault(),!e.target.classList.contains("exercises-subcategory-item")&&!e.target.parentNode.classList.contains("exercises-subcategory-item"))return;i.search.classList.add("is-visible");const t=e.target.closest(".exercises-subcategory-item");u=t.children[1].textContent.toLowerCase();const a=t.children[0].textContent;s.page=1,i.title.insertAdjacentHTML("beforeend",` / <span class="exercises-title-span"> ${a}</span>`),i.subcategory.classList.add("open-card"),C(u,t)}function C(e,t){s.muscles="",s.bodypart="",s.equipment="",s.keyword="",e==="muscles"?(s.muscles=t.children[0].textContent.toLowerCase(),n()):e==="body parts"?(s.bodypart=t.children[0].textContent.toLowerCase(),n()):e==="equipment"&&(s.equipment=t.children[0].textContent.toLowerCase(),n())}function p(e){const t=e.map(({_id:a,bodyPart:r,name:g,rating:m,burnedCalories:h,target:y})=>`<li class="exercices-card">

          <div class="card-header">
            <div class="card-header-container">
              <p class="card-category">WORKOUT</p>

               <div class="card-rating-container">
                  <p class="card-rating">
                     ${m}
                  </p>
                 <svg class="card-rating-svg" width="15" height="15">
                   <use href="../img/icons.svg#icon-star"></use>
                 </svg>
               </div>

            </div>

                 <button class="card-button" type="submit" data-id="${a}" data-modal>
              Start
              <svg class="card-search-svg" >
                <use href="../img/icons.svg#icon-arrow-right"></use>
              </svg>
            </button >

          </div>

          <div class="card-bodi">
            <svg class="card-bodi-svg" width="24" height="24">
              <use href="../img/icons.svg#icon-running_man"></use>
            </svg>
            <h3 class="card-name">${x(g)}</h3>
          </div>

            <ul class="card-inform-list">
              <li class="card-inform-item">Burned calories:  <span class="card-inform-item-span">${h} / 3 min</span></li>
              <li class="card-inform-item">Body part: <span class="card-inform-item-span">${r}</span></li>
              <li class="card-inform-item">Target: <span class="card-inform-item-span">${y}</span></li>
            </ul>

        </li>`).join("");i.subcategory.innerHTML=t,i.subcategory.addEventListener("click",v)}function n(){window.innerWidth>=1440&&(s.limit=9),document.querySelector(".loader").style.display="block",c.get(l,s).then(({page:t,totalPages:a,results:r})=>{p(r),r.length===0&&(i.subcategory.innerHTML='<li class = "exercises-text"><p>Unfortunately, <span class = "exercises-text-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></li>'),d.reset(a*8),a<=1?o.classList.add("is-hidden"):o.classList.remove("is-hidden")}).catch(t=>console.log(t)).finally(()=>{document.querySelector(".loader").style.display="none"}),d.on("afterMove",t=>{const a=t.page;s.page=a,document.querySelector(".loader").style.display="block",c.get(l,s).then(({results:r})=>{p(r)}).catch(r=>console.log(r)).finally(()=>{document.querySelector(".loader").style.display="none"})})}function x(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}
//# sourceMappingURL=exercises_items-897ffaf5.js.map
