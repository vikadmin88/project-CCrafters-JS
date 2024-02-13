import{a as o,b as d}from"./exercise_modal-31e8a76b.js";import{refs as i}from"./exercises_category_filter-601edb6f.js";import{P as v}from"./vendor-4c9dc65a.js";const t={bodypart:"",muscles:"",equipment:"",keyword:"",page:1,limit:8},c=document.getElementById("tui-pagination-container"),y={itemsPerPage:8,visiblePages:3,centerAlign:!0},l=new v(c,y);let p="";i.subcategory.addEventListener("click",C);i.search.addEventListener("submit",b);function b(e){e.preventDefault();const s=e.target;t.keyword=s.elements.searchstr.value.trim().toLowerCase(),console.log(t),s.reset(),n()}function C(e){if(e.preventDefault(),!e.target.classList.contains("exercises-subcategory-item")&&!e.target.parentNode.classList.contains("exercises-subcategory-item"))return;i.search.classList.add("is-visible");const s=e.target.closest(".exercises-subcategory-item");p=s.children[1].textContent.toLowerCase();const a=s.children[0].textContent;t.page=1,i.title.insertAdjacentHTML("beforeend",` / <span class="exercises-title-span"> ${a}</span>`),i.subcategory.classList.add("open-card"),w(p,s)}function w(e,s){t.muscles="",t.bodypart="",t.equipment="",t.keyword="",e==="muscles"?(t.muscles=s.children[0].textContent.toLowerCase(),n()):e==="body parts"?(t.bodypart=s.children[0].textContent.toLowerCase(),n()):e==="equipment"&&(t.equipment=s.children[0].textContent.toLowerCase(),n())}function g(e){const s=e.map(({_id:a,bodyPart:r,name:u,rating:m,burnedCalories:h,target:f})=>`<li class="exercices-card">

          <div class="card-header">
            <div class="card-header-container">
              <p class="card-category">WORKOUT</p>

               <div class="card-rating-container">
                  <p class="card-rating">
                     ${m}
                  </p>
                 <svg class="card-rating-svg" width="15" height="15">
                   <use href="/project-CCrafters-JS/assets/icons-84da4e8c.svg#icon-star"></use>
                 </svg>
               </div>

            </div>

                 <button class="card-button" type="submit" data-id = "${a}">
              Start
              <svg class="card-search-svg" >
                <use href="/project-CCrafters-JS/assets/icons-84da4e8c.svg#icon-arrow-right"></use>
              </svg>
            </button >

          </div>

          <div class="card-bodi">
            <svg class="card-bodi-svg" width="24" height="24">
              <use href="/project-CCrafters-JS/assets/icons-84da4e8c.svg#icon-running_man"></use>
            </svg>
            <h3 class="card-name">${L(u)}</h3>
          </div>

            <ul class="card-inform-list">
              <li class="card-inform-item">Burned calories:  <span class="card-inform-item-span">${h} / 3 min</span></li>
              <li class="card-inform-item">Body part: <span class="card-inform-item-span">${r}</span></li>
              <li class="card-inform-item">Target: <span class="card-inform-item-span">${f}</span></li>
            </ul>

        </li>`).join("");i.subcategory.innerHTML=s}function n(){window.innerWidth>=1440&&(t.limit=9),o.get(d,t).then(({page:s,totalPages:a,results:r})=>{g(r),r.length===0&&(i.subcategory.innerHTML='<li class = "exercises-text"><p>Unfortunately, <span class = "exercises-text-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></li>'),l.reset(a*8),a<=1?c.classList.add("is-hidden"):c.classList.remove("is-hidden")}).catch(s=>console.log(s)).finally,l.on("afterMove",s=>{const a=s.page;t.page=a,o.get(d,t).then(({results:r})=>{g(r)}).catch(r=>console.log(r))})}function L(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}
//# sourceMappingURL=exercises_items-4fd65eda.js.map
