import{a as o,b as c}from"./exercise_modal-31e8a76b.js";import{refs as r}from"./exercises_category_filter-601edb6f.js";import{P as f}from"./vendor-4c9dc65a.js";const t={bodypart:"",muscles:"",equipment:"",keyword:"",page:1,limit:8},v=document.getElementById("tui-pagination-container"),y={itemsPerPage:8,visiblePages:3,centerAlign:!0},d=new f(v,y);let l="";r.subcategory.addEventListener("click",w);r.search.addEventListener("submit",b);function b(s){s.preventDefault();const e=s.target;t.keyword=e.elements.searchstr.value.trim().toLowerCase(),console.log(t),e.reset(),i()}function w(s){if(s.preventDefault(),!s.target.classList.contains("exercises-subcategory-item")&&!s.target.parentNode.classList.contains("exercises-subcategory-item"))return;r.search.classList.add("is-visible");const e=s.target.closest(".exercises-subcategory-item");l=e.children[1].textContent.toLowerCase();const n=e.children[0].textContent;r.title.insertAdjacentHTML("beforeend",` / <span class="exercises-title-span"> ${n}</span>`),r.subcategory.classList.add("open-card"),x(l,e)}function x(s,e){t.muscles="",t.bodypart="",t.equipment="",t.keyword="",s==="muscles"?(t.muscles=e.children[0].textContent.toLowerCase(),i()):s==="body parts"?(t.bodypart=e.children[0].textContent.toLowerCase(),i()):s==="equipment"&&(t.equipment=e.children[0].textContent.toLowerCase(),i())}function g(s){const e=s.map(({_id:n,bodyPart:a,name:u,rating:p,burnedCalories:m,target:h})=>`<li class="exercices-card">

          <div class="card-header">
            <div class="card-header-container">
              <p class="card-category">WORKOUT</p>

               <div class="card-rating-container">
                  <p class="card-rating">
                     ${p}
                  </p>
                 <svg class="card-rating-svg" width="15" height="15">
                   <use href="./img/icons.svg#icon-star"></use>
                 </svg>
               </div>

            </div>

                 <button class="card-button" type="submit" data-id = "${n}">
              Start
              <svg class="card-search-svg" >
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </button >

          </div>

          <div class="card-bodi">
            <svg class="card-bodi-svg" width="24" height="24">
              <use href="../img/icons.svg#icon-running_man"></use>
            </svg>
            <h3 class="card-name">${u}</h3>
          </div>

            <ul class="card-inform-list">
              <li class="card-inform-item">Burned calories:  <span class="card-inform-item-span">${m} / 3 min</span></li>
              <li class="card-inform-item">Body part: <span class="card-inform-item-span">${a}</span></li>
              <li class="card-inform-item">Target: <span class="card-inform-item-span">${h}</span></li>
            </ul>

        </li>`).join("");r.subcategory.innerHTML=e}function i(){window.innerWidth>=1440&&(t.limit=9),o.get(c,t).then(({page:e,totalPages:n,results:a})=>{g(a),a.length===0&&(r.subcategory.innerHTML='<li class = "exercises-text"><p>Unfortunately, <span class = "exercises-text-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></li>'),d.reset(n*8)}).catch(e=>console.log(e)).finally,d.on("afterMove",e=>{const n=e.page;t.page=n,o.get(c,t).then(({results:a})=>{g(a)}).catch(a=>console.log(a))})}
//# sourceMappingURL=exercises_items-e3b26124.js.map
