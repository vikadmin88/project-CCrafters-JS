import{a as x,b as L,n}from"./notifier-44391d19.js";import"./vendor-4c9dc65a.js";document.querySelector(".modal");let u=document.querySelector(".close-modal-btn"),p=document.querySelector(".add-favorite-btn");document.querySelector(".give-rating-btn");document.querySelector(".backdrop-modal");document.querySelector(".loader");let o={isFavorite:!1};function H(e){if(!e.target&&!e.target.classList.contains("card-button")&&!e.target.closest(".card-button").classList.contains("card-button"))return;let t;try{t=e.target.closest(".card-button").dataset.id}catch{t=""}t&&(m(),v(t))}function T(e){if(!e.target&&!e.target.classList.contains("favorites-list-button")&&!e.target.closest(".favorites-list-button").classList.contains("favorites-list-button"))return;let t;try{t=e.target.closest(".favorites-list-button").dataset.id}catch{t=""}t&&(m(),v(t))}function m(){document.querySelector(".backdrop-modal").classList.remove("visually-hidden"),document.querySelector(".modal").innerHTML='<div class="loader-modal"></div>',document.querySelector(".loader-modal").style.display="block"}function N(){}function A(){}function C(){document.querySelector(".backdrop-modal").classList.add("visually-hidden")}function $(e){Object.hasOwn(o,"isFavorite")&&o.isFavorite?(q(e),o.isFavorite=!1,n("success","The exercise has been removed from your favorites list")):(k(),o.isFavorite=!0,n("success","The exercise has been added to your favorites list")),f(o)}function k(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.push(o),localStorage.setItem("favorites",JSON.stringify(t))}function q(e){const t=e.target.dataset.id;let r=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(a=>a._id!==t);localStorage.setItem("favorites",JSON.stringify(r))}function M(e){if(e){let t,i=e;return t=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(a=>a._id===i),o.isFavorite=!!t.length,t}}function v(e){M(e),I(e)}function f(e){document.querySelector(".modal").innerHTML=O(e),u=document.querySelector(".close-modal-btn"),u.addEventListener("click",C),p=document.querySelector(".add-favorite-btn"),p.addEventListener("click",$),document.querySelector(".give-rating-btn")}function I(e){e&&x.get(`${L}/${e}`,{}).then(t=>{o.isFavorite?(o=t,o.isFavorite=!0):(o=t,o.isFavorite=!1),f(t)}).catch(t=>n("error",`API error: ${t}`)).finally(()=>{try{document.querySelector(".loader-modal").style.display="none"}catch{}})}function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}function O({_id:e,bodyPart:t,equipment:i,gifUrl:r,name:a,target:g,description:h,rating:l,burnedCalories:b,time:y,popularity:S,isFavorite:F}){let c=5,d=Number(l.toFixed());c-=d;let w='<r class="star-1"/>'.repeat(d).concat('<r class="star-0"/>'.repeat(c));return`<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon"  width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
            src="${r}"
            alt="${a}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${a}</h4>
        <div class="rating-container">
          <div class="star-block">
          <p class="modal-exercises-rating">${l.toFixed(1)}</p>
          ${w}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${s(g)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${s(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${s(i)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${S}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${b}/${y} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${h}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${F?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}export{N as hideModalHandler,T as openModalFavoritesHandler,H as openModalHandler,A as showModalHandler};
//# sourceMappingURL=exercise_modal-7c8a2389.js.map
