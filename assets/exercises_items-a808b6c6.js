import{a as d,b as p}from"./api-ff36a7fc.js";import{refs as r}from"./exercises_category_filter-dabafdee.js";import{P as f}from"./vendor-72a3c01e.js";import{a as y}from"./rating_modal-06224254.js";const s={bodypart:"",muscles:"",equipment:"",keyword:"",page:1,limit:8},c=document.getElementById("tui-pagination-container"),o=document.querySelector(".loader-pagination"),v={itemsPerPage:8,visiblePages:3,centerAlign:!0},C=new f(c,v);let l="";r.subcategory.addEventListener("click",b);r.search.addEventListener("submit",w);function w(e){e.preventDefault();const t=e.target;s.keyword=t.elements.searchstr.value.trim().toLowerCase(),t.reset(),n()}function b(e){if(e.preventDefault(),!e.target.classList.contains("exercises-subcategory-item")&&!e.target.parentNode.classList.contains("exercises-subcategory-item"))return;r.search.classList.add("is-visible");const t=e.target.closest(".exercises-subcategory-item");l=t.children[1].textContent.toLowerCase();const a=t.children[0].textContent;s.page=1,r.title.insertAdjacentHTML("beforeend",` / <span class="exercises-title-span"> ${a}</span>`),r.subcategory.classList.add("open-card"),x(l,t)}function x(e,t){s.muscles="",s.bodypart="",s.equipment="",s.keyword="",e==="muscles"?(s.muscles=t.children[0].textContent.toLowerCase(),n()):e==="body parts"?(s.bodypart=t.children[0].textContent.toLowerCase(),n()):e==="equipment"&&(s.equipment=t.children[0].textContent.toLowerCase(),n())}function g(e){const t=e.map(({_id:a,bodyPart:i,name:u,rating:m,burnedCalories:h,target:L})=>`<li class="exercices-card">

          <div class="card-header">
            <div class="card-header-container">
              <p class="card-category">WORKOUT</p>

               <div class="card-rating-container">
                  <p class="card-rating">
                     ${m}
                  </p>

                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" class="card-rating-svg">
                    <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
                  </svg>
               </div>
            </div>

            <button class="card-button" type="submit" data-id="${a}">
              Start

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="card-search-svg">
                <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

          </div>

          <div class="card-bodi">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="card-bodi-svg">
              <circle cx="12" cy="12" r="12" fill="#7E847F"/>
              <path d="M18.8234 8.72537C18.6138 8.47498 18.2403 8.44206 17.9899 8.65086L16.349 10.0293L15.5943 8.15961C15.5675 8.08943 15.5267 8.03051 15.4799 7.97853C15.3257 7.63543 15.058 7.34085 14.6889 7.17017C14.5286 7.09739 14.3631 7.0584 14.1977 7.03934C14.1613 7.02028 14.1283 6.99515 14.0868 6.98216L11.199 6.17726C11.037 6.13307 10.8741 6.16167 10.7407 6.23964C10.5821 6.29336 10.4461 6.40859 10.3811 6.57581L9.29378 9.37172C9.17594 9.67583 9.3267 10.0189 9.63168 10.1385C9.93492 10.2563 10.2789 10.1047 10.3976 9.79972L11.316 7.43876L12.6312 7.80438C12.5991 7.85636 12.5645 7.90488 12.5385 7.96033L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7786L8.7488 15.2139L5.31955 16.361C4.9314 16.6513 4.84909 17.198 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7707L9.86907 16.5621C9.97651 16.4841 10.0545 16.3818 10.1134 16.2718C10.1576 16.225 10.2078 16.1878 10.2416 16.1297L11.4633 14.0815L13.6319 15.9296L11.3116 18.5444C10.9919 18.9048 11.024 19.4602 11.3862 19.779C11.7474 20.1005 12.3011 20.0667 12.6225 19.7045L15.5181 16.4425C15.6082 16.342 15.6619 16.2259 15.6983 16.1046C15.7199 16.0387 15.7199 15.9703 15.7251 15.9019C15.7251 15.8672 15.7381 15.836 15.7355 15.8039C15.7277 15.5648 15.6307 15.3326 15.4349 15.1671L13.4395 13.4655C13.5834 13.3286 13.7055 13.1657 13.7939 12.9743L15.0866 10.1749L15.5007 11.2778C15.5181 11.3757 15.551 11.4719 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.711C15.856 11.7154 15.8664 11.7162 15.8768 11.7188C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7647 16.1757 11.7561 16.2441 11.737C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7318 16.2831 11.7353 16.3013 11.7275C16.3975 11.6911 16.4711 11.6296 16.5344 11.5577L18.8893 9.55886C19.1397 9.34832 19.034 8.97577 18.8234 8.72537Z" fill="#F6F6F6"/>
              <path d="M15.8448 7.30102C16.7564 7.30102 17.4954 6.56206 17.4954 5.65051C17.4954 4.73896 16.7564 4 15.8448 4C14.9333 4 14.1943 4.73896 14.1943 5.65051C14.1943 6.56206 14.9333 7.30102 15.8448 7.30102Z" fill="#F6F6F6"/>
            </svg>

            <h3 class="card-name">${M(u)}</h3>
          </div>

          <ul class="card-inform-list">
            <li class="card-inform-item">Burned calories:  <span class="card-inform-item-span">${h} / 3 min</span></li>
            <li class="card-inform-item">Body part: <span class="card-inform-item-span">${i}</span></li>
            <li class="card-inform-item">Target: <span class="card-inform-item-span">${L}</span></li>
          </ul>
        </li>`).join("");r.subcategory.innerHTML=t,r.subcategory.addEventListener("click",y)}function n(){window.innerWidth>=1440&&(s.limit=9),d.get(p,s).then(({page:t,totalPages:a,results:i})=>{g(i),i.length===0&&(r.subcategory.innerHTML='<li class = "exercises-text"><p>Unfortunately, <span class = "exercises-text-span">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></li>'),C.reset(a*8),a<=1?c.classList.add("is-hidden"):c.classList.remove("is-hidden")}).catch(t=>notify.error(`API error: ${t}`))}C.on("afterMove",e=>{o.style.display="block";const t=e.page;s.page=t,d.get(p,s).then(({results:a})=>{g(a),o.style.display="none"}).catch(a=>notify.error(`API error: ${a}`)).finally(()=>o.style.display="none")});function M(e){return e.charAt(0).toLowerCase()===e.charAt(0)?e.charAt(0).toUpperCase()+e.slice(1):e}
//# sourceMappingURL=exercises_items-a808b6c6.js.map
