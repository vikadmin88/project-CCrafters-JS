import{a as S,b as L,n as l}from"./api-0d4e8fa1.js";document.querySelector(".modal");let y=document.querySelector(".close-modal-btn"),b=document.querySelector(".add-favorite-btn"),h=document.querySelector(".give-rating-btn"),d=document.querySelector(".backdrop-modal");document.querySelector(".loader");let r={isFavorite:!1};function I(e){if(!e.target&&!e.target.classList.contains("card-button")&&!e.target.closest(".card-button").classList.contains("card-button"))return;let t;try{t=e.target.closest(".card-button").dataset.id}catch{t=""}t&&(T(),N(t),document.addEventListener("keydown",c),document.querySelector(".backdrop-modal").addEventListener("click",c))}function T(){document.querySelector(".backdrop-modal").classList.remove("visually-hidden"),document.querySelector(".modal").innerHTML='<div class="loader-modal"></div>',document.querySelector(".loader-modal").style.display="block"}function c(e){!e.target.classList.contains("backdrop-modal")&&!e.target.classList.contains("give-rating-btn")&&!e.target.closest(".close-modal-btn")&&e.code!=="Escape"&&!d.classList.contains("visually-hidden")||(d.classList.add("visually-hidden"),document.removeEventListener("keydown",c),d.removeEventListener("click",c))}function M(e){Object.hasOwn(r,"isFavorite")&&r.isFavorite?(A(e),r.isFavorite=!1,l("success","The exercise has been removed from your favorites list")):(_(),r.isFavorite=!0,l("success","The exercise has been added to your favorites list")),k(r)}function _(e){let t=JSON.parse(localStorage.getItem("favorites"))||[];t.push(r),localStorage.setItem("favorites",JSON.stringify(t))}function A(e){const t=e.target.dataset.id;let i=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(s=>s._id!==t);localStorage.setItem("favorites",JSON.stringify(i))}function B(e){if(e){let t,a=e;return t=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(s=>s._id===a),r.isFavorite=!!t.length,t}}function N(e){B(e),j(e)}function k(e){document.querySelector(".modal").innerHTML=R(e),y=document.querySelector(".close-modal-btn"),y.addEventListener("click",c),b=document.querySelector(".add-favorite-btn"),b.addEventListener("click",M),h=document.querySelector(".give-rating-btn"),h.addEventListener("click",P)}function P(e){document.querySelector(".backdrop-modal").classList.add("visually-hidden"),x(document.querySelector(".backdrop-modal"),e)}function j(e){e&&S.get(`${L}/${e}`,{}).then(t=>{r.isFavorite?(r=t,r.isFavorite=!0):(r=t,r.isFavorite=!1),k(t)}).catch(t=>l("error",`API error: ${t}`)).finally(()=>{try{document.querySelector(".loader-modal").style.display="none"}catch{}})}function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function R({_id:e,bodyPart:t,equipment:a,gifUrl:i,name:s,target:n,description:E,rating:p,burnedCalories:F,time:q,popularity:$,isFavorite:C}){let v=5,f=Number(p.toFixed());v-=f;let O='<r class="star-1"/>'.repeat(f).concat('<r class="star-0"/>'.repeat(v));return`<div class="modal-description-container">
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
            src="${i}"
            alt="${s}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${s}</h4>
        <div class="rating-container">
          <div class="star-block">
          <p class="modal-exercises-rating">${p.toFixed(1)}</p>
          ${O}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${u(n)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${u(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${u(a)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${$}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${F}/${q} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${E}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${C?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const G=Object.freeze(Object.defineProperty({__proto__:null,closeModalHandler:c,openModalHandler:I},Symbol.toStringTag,{value:"Module"}));let m,w;const o={icons:document.querySelectorAll(".rating-star-icon"),form:document.querySelector(".rating-form"),stars:document.querySelector(".rating-star-list"),backdrop:document.querySelector(".backdrop-rating")};o.icons.forEach((e,t)=>{e.addEventListener("mouseover",()=>{for(let a=0;a<t;a++)o.icons[a].classList.add("hovered")}),e.addEventListener("mouseout",()=>{for(let a=0;a<t;a++)o.icons[a].classList.remove("hovered")})});o.form.addEventListener("submit",J);o.stars.addEventListener("click",H);o.backdrop.addEventListener("click",g);document.addEventListener("keydown",g);function H(e){if(e.target.nodeName!=="INPUT")return;const t=e.currentTarget.previousElementSibling;t.textContent=parseFloat(e.target.value).toFixed(1);const a=Array.from(e.currentTarget.querySelectorAll(".rating-star-icon")),i=a.indexOf(e.target.nextElementSibling);a.forEach((s,n)=>{s.classList.toggle("selected",n<=i)})}function J(e){e.preventDefault();const t=parseInt(o.form.querySelector(".rating-value").textContent),a=e.currentTarget.elements.email.value,i=e.currentTarget.elements.comment.value,s={rate:t,email:a,review:i};S.patch(`${L}/${w}/rating`,JSON.stringify(s)).then(n=>{l("success","Rating has been updated!"),o.form.reset(),g()}).catch(n=>{n.message.response.status===409?l("warning",`Warning: ${n.message.response.data.message}`):l("error",`API error: ${n.message.response.data.message}`)})}function g(e){!e.target.classList.contains("backdrop-rating")&&!e.target.classList.contains("close")&&!e.target.classList.contains("rating-btn")&&!e.target.closest(".close")&&e.code!=="Escape"||(m&&m.classList.remove("visually-hidden"),o.backdrop.classList.add("visually-hidden"),document.addEventListener("keydown",c))}function x(e,t){m=e,w=t.target.dataset.id,o.backdrop.classList.remove("visually-hidden"),document.removeEventListener("keydown",c)}const U=Object.freeze(Object.defineProperty({__proto__:null,openRatingModal:x},Symbol.toStringTag,{value:"Module"}));export{I as a,G as e,x as o,U as r};
//# sourceMappingURL=rating_modal-c65721c4.js.map
