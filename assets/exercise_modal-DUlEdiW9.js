import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{n as t,o as n,t as r}from"./notifier-BTcOYbl6.js";var i=e({openRatingModal:()=>d}),a,o,s={icons:document.querySelectorAll(`.rating-star-icon`),form:document.querySelector(`.rating-form`),stars:document.querySelector(`.rating-star-list`),backdrop:document.querySelector(`.backdrop-rating`)};s.icons.forEach((e,t)=>{e.addEventListener(`mouseover`,()=>{for(let e=0;e<t;e++)s.icons[e].classList.add(`hovered`)}),e.addEventListener(`mouseout`,()=>{for(let e=0;e<t;e++)s.icons[e].classList.remove(`hovered`)})}),s.form.addEventListener(`submit`,l),s.stars.addEventListener(`click`,c),s.backdrop.addEventListener(`click`,u),document.addEventListener(`keydown`,u);function c(e){if(e.target.nodeName!==`INPUT`)return;let t=e.currentTarget.previousElementSibling;t.textContent=parseFloat(e.target.value).toFixed(1);let n=Array.from(e.currentTarget.querySelectorAll(`.rating-star-icon`)),r=n.indexOf(e.target.nextElementSibling);n.forEach((e,t)=>{e.classList.toggle(`selected`,t<=r)})}function l(e){e.preventDefault();let i={rate:parseInt(s.form.querySelector(`.rating-value`).textContent),email:e.currentTarget.elements.email.value,review:e.currentTarget.elements.comment.value};n.patch(`${t}/${o}/rating`,JSON.stringify(i)).then(e=>{r.success(`Rating has been updated!`),s.form.reset(),s.backdrop.click()}).catch(e=>{e.message.response.status===409?r.warning(`Warning: ${e.message.response.data.message}`):r.error(`API error: ${e.message.response.data.message}`)})}function u(e){!e.target.classList.contains(`backdrop-rating`)&&!e.target.classList.contains(`close`)&&!e.target.closest(`.close`)&&e.code!==`Escape`||(s.form.reset(),a&&a.classList.remove(`visually-hidden`),s.backdrop.classList.add(`visually-hidden`),document.addEventListener(`keydown`,b))}function d(e,t){a=e,o=t.target.dataset.id,s.backdrop.classList.remove(`visually-hidden`),document.removeEventListener(`keydown`,b)}var f=e({closeModalHandler:()=>b,openModalHandler:()=>v});document.querySelector(`.modal`);var p=document.querySelector(`.close-modal-btn`),m=document.querySelector(`.add-favorite-btn`),h=document.querySelector(`.give-rating-btn`),g=document.querySelector(`.backdrop-modal`);document.querySelector(`.loader`);var _={isFavorite:!1};function v(e){if(!e.target&&!e.target.classList.contains(`card-button`)&&!e.target.closest(`.card-button`).classList.contains(`card-button`))return;let t;try{t=e.target.closest(`.card-button`).dataset.id}catch{t=``}t&&(y(),T(t),document.addEventListener(`keydown`,b),document.querySelector(`.backdrop-modal`).addEventListener(`click`,b))}function y(){document.querySelector(`.backdrop-modal`).classList.remove(`visually-hidden`),document.querySelector(`.modal`).innerHTML=`<div class="loader-modal"></div>`,document.querySelector(`.loader-modal`).style.display=`block`}function b(e){!e.target.classList.contains(`backdrop-modal`)&&!e.target.classList.contains(`give-rating-btn`)&&!e.target.closest(`.close-modal-btn`)&&e.code!==`Escape`&&!g.classList.contains(`visually-hidden`)||(g.classList.add(`visually-hidden`),document.removeEventListener(`keydown`,b),g.removeEventListener(`click`,b))}function x(e){Object.hasOwn(_,`isFavorite`)&&_.isFavorite?(C(e),_.isFavorite=!1,r.success(`The exercise has been removed from your favorites list`)):(S(e),_.isFavorite=!0,r.success(`The exercise has been added to your favorites list`)),E(_)}function S(e){let t=JSON.parse(localStorage.getItem(`favorites`))||[];t.push(_),localStorage.setItem(`favorites`,JSON.stringify(t))}function C(e){let t=e.target.dataset.id,n=(JSON.parse(localStorage.getItem(`favorites`))||[]).filter(e=>e._id!==t);localStorage.setItem(`favorites`,JSON.stringify(n))}function w(e){if(e){let t,n=e;return t=(JSON.parse(localStorage.getItem(`favorites`))||[]).filter(e=>e._id===n),_.isFavorite=!!t.length,t}}function T(e){w(e),O(e)}function E(e){document.querySelector(`.modal`).innerHTML=A(e),p=document.querySelector(`.close-modal-btn`),p.addEventListener(`click`,b),m=document.querySelector(`.add-favorite-btn`),m.addEventListener(`click`,x),h=document.querySelector(`.give-rating-btn`),h.addEventListener(`click`,D)}function D(e){document.querySelector(`.backdrop-modal`).classList.add(`visually-hidden`),d(document.querySelector(`.backdrop-modal`),e)}function O(e){e&&n.get(`${t}/${e}`,{}).then(e=>{_.isFavorite?(_=e,_.isFavorite=!0):(_=e,_.isFavorite=!1),E(e)}).catch(e=>r.error(`API error: ${e}`)).finally(()=>{try{document.querySelector(`.loader-modal`).style.display=`none`}catch{}})}function k(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A({_id:e,bodyPart:t,equipment:n,gifUrl:r,name:i,target:a,description:o,rating:s,burnedCalories:c,time:l,popularity:u,isFavorite:d}){let f=5,p=Number(s.toFixed());f-=p;let m=`<r class="star-1"/>`.repeat(p).concat(`<r class="star-0"/>`.repeat(f));return`<div class="modal-description-container">
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
          <p class="modal-exercises-rating">${s.toFixed(1)}</p>
          ${m}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${k(a)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${k(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${k(n)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${u}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${c}/${l} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${o}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${d?`Remove from`:`Add to favorites`}
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}export{i,v as n,d as r,f as t};
//# sourceMappingURL=exercise_modal-DUlEdiW9.js.map