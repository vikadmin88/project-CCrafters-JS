import{a as F,b as $,n as c}from"./notifier-44391d19.js";import"./vendor-4c9dc65a.js";document.querySelector(".modal");let u=document.querySelector(".close-modal-btn"),m=document.querySelector(".add-favorite-btn");document.querySelector(".give-rating-btn");document.querySelector(".backdrop-modal");document.querySelector(".loader");let a={isFavorite:!1};function H(e){if(!e.target&&!e.target.classList.contains("card-button")&&!e.target.closest(".card-button").classList.contains("card-button"))return;let t;try{t=e.target.closest(".card-button").dataset.id}catch{t=""}t&&(document.querySelector(".backdrop-modal").classList.remove("visually-hidden"),document.querySelector(".modal").innerHTML='<div class="loader-modal"></div>',document.querySelector(".loader-modal").style.display="block",k(t))}function N(){}function A(){}function q(){document.querySelector(".backdrop-modal").classList.add("visually-hidden")}function x(e){Object.hasOwn(a,"isFavorite")&&a.isFavorite?(I(e),a.isFavorite=!1,c("success","The exercise has been removed from favorites list")):(w(),a.isFavorite=!0,c("success","The exercise has been added to favorites list")),p(a)}function w(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.push(a),localStorage.setItem("favorites",JSON.stringify(t))}function I(e){const t=e.target.dataset.id;let o=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(i=>i._id!==t);localStorage.setItem("favorites",JSON.stringify(o))}function O(e){if(e){let t,r=e;return t=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(i=>i._id===r),a.isFavorite=!!t.length,t}}function k(e){O(e),E(e)}function p(e){document.querySelector(".modal").innerHTML=L(e),u=document.querySelector(".close-modal-btn"),u.addEventListener("click",q),m=document.querySelector(".add-favorite-btn"),m.addEventListener("click",x),document.querySelector(".give-rating-btn")}function E(e){e&&F.get(`${$}/${e}`,{}).then(t=>{a.isFavorite?(a=t,a.isFavorite=!0):(a=t,a.isFavorite=!1),p(t)}).catch(t=>c("error",`API error: ${t}`)).finally(()=>{try{document.querySelector(".loader-modal").style.display="none"}catch{}})}function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}function L({_id:e,bodyPart:t,equipment:r,gifUrl:o,name:i,target:v,description:g,rating:l,burnedCalories:f,time:h,popularity:b,isFavorite:y}){let n=5,d=Number(l.toFixed());n-=d;let S='<r class="star-1"/>'.repeat(d).concat('<r class="star-0"/>'.repeat(n));return`<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="./img/icons.svg#icon-cross"></use>
        </svg>
      </button>
      <div class="modal-gif-container">
        <picture>
          <source
            media="(max-width:767.98px)"
            type="image/gif"
            width="295"
            height="258"
          />
          <source
            media="(min-width:768px)"
            type="image/gif"
            width="270"
            height="259"
          />
          <img
            class="modal-gif"
            src="${o}"
            alt="${i}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${i}</h4>
        <div class="rating-container">
          <div class="star-block">
          <p class="modal-exercises-rating">${l.toFixed(1)}</p>
          ${S}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${s(v)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${s(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${s(r)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${b}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${f}/${h} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${g}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${y?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="./img/icons.svg#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}export{N as hideModalHandler,H as openModalHandler,A as showModalHandler};
//# sourceMappingURL=exercise_modal-bac36720.js.map
