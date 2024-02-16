import{P as I}from"./vendor-72a3c01e.js";import{n as j}from"./api-ff36a7fc.js";import{o as _}from"./rating_modal-06224254.js";document.querySelector(".modal-favorite");let p=document.querySelector(".close-modal-btn"),y=document.querySelector(".add-favorite-btn"),L=document.querySelector(".give-rating-btn"),l=document.querySelector(".backdrop-favorite");document.querySelector(".loader-favorites");let w={};function k(t){if(!t.target&&!t.target.classList.contains("favorites-list-button")&&!t.target.closest(".favorites-list-button").classList.contains("favorites-list-button"))return;let e;try{e=t.target.closest(".favorites-list-button").dataset.id}catch{e=""}e&&(A(),N(e),document.addEventListener("keydown",r),l.addEventListener("click",r))}function r(t){!t.target.classList.contains("backdrop-favorite")&&!t.target.classList.contains("close-modal-btn")&&!t.target.closest(".close-modal-btn")&&t.code!=="Escape"&&!l.classList.contains("visually-hidden")||(l.classList.add("visually-hidden"),document.removeEventListener("keydown",r),l.removeEventListener("click",r))}function A(){document.querySelector(".backdrop-favorite").classList.remove("visually-hidden"),document.querySelector(".modal-favorite").innerHTML='<div class="loader-favorite"></div>',document.querySelector(".loader-favorite").style.display="block"}function H(t){const e=t.target.dataset.id;let o=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(a=>a._id!==e);localStorage.setItem("favorites",JSON.stringify(o)),j.success("The exercise has been removed from your favorites list"),d(),p.click()}function P(t){if(t){let e,i=t;return e=(JSON.parse(localStorage.getItem("favorites"))||[]).filter(a=>a._id===i),e.length?(w=e[0],w):!1}}function N(t){const e=P(t);e&&V(e)}function V(t){document.querySelector(".modal-favorite").innerHTML=R(t),p=document.querySelector(".close-modal-btn"),p.addEventListener("click",r),y=document.querySelector(".add-favorite-btn"),y.addEventListener("click",H),L=document.querySelector(".give-rating-btn"),L.addEventListener("click",J)}function J(t){document.querySelector(".backdrop-favorite").classList.add("visually-hidden"),_(document.querySelector(".backdrop-favorite"),t)}function v(t){return t.charAt(0).toUpperCase()+t.slice(1)}function R({_id:t,bodyPart:e,equipment:i,gifUrl:o,name:a,target:n,description:$,rating:h,burnedCalories:q,time:E,popularity:O,isFavorite:W}){let C=5,b=Number(h.toFixed());C-=b;let T='<r class="star-1"/>'.repeat(b).concat('<r class="star-0"/>'.repeat(C));return`<div class="modal-description-container">
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
            src="${o}"
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
          <p class="modal-exercises-rating">${h.toFixed(1)}</p>
          ${T}
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${v(n)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${v(e)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${v(i)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${O}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${q}/${E} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${$}</p>
        <div class="modal-buttons-container">
          <button data-id="${t}" class="add-favorite-btn">
            Remove from
            <svg class="icon-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button data-id="${t}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const Y=Object.freeze(Object.defineProperty({__proto__:null,closeFavoriteModalHandler:r,openModalFavoritesHandler:k},Symbol.toStringTag,{value:"Module"})),f="favorites",c=document.querySelector(".favorites-list"),m=document.querySelector(".empty-text-container");let x=document.querySelectorAll('button[data-btn="trash"]');const z={itemsPerPage:8,visiblePages:3,centerAlign:!0},g=document.getElementById("tui-pagination-container"),S=new I(g,z),s={page:1,limit:8};let F;function d(){let t=JSON.parse(localStorage.getItem(f))||[];F=t;const e=window.innerWidth;S.reset(t.length),e<768&&t.length>s.limit&&(g.style.display="flex",t=t.slice(0,s.limit)),M(t)}S.on("afterMove",t=>{s.page=t.page;let e=s.limit*s.page,i=e-s.limit,o=F.slice(i,e);M(o)});function M(t){m.style.display="none",c.innerHTML=t.map(U).join(""),x=document.querySelectorAll('button[data-btn="trash"]');for(let e of x)e.addEventListener("click",B);t.length||(m.style.display="flex",c.style.display="none",g.style.display="none")}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}const U=({_id:t,name:e,burnedCalories:i,bodyPart:o,target:a,time:n})=>`<li class="favorites-list-item" tabindex="0">
    <div class="favorites-card-header">
      <div class="favorites-oval">
        <span>WORKOUT</span>
        <button class="favorites-icon-svg trash-button" data-id="${t}" data-btn="trash">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10.6667 4V3.46667C10.6667 2.71993 10.6667 2.34656 10.5213 2.06135C10.3935 1.81046 10.1895 1.60649 9.93865 1.47866C9.65344 1.33333 9.28007 1.33333 8.53333 1.33333H7.46667C6.71993 1.33333 6.34656 1.33333 6.06135 1.47866C5.81046 1.60649 5.60649 1.81046 5.47866 2.06135C5.33333 2.34656 5.33333 2.71993 5.33333 3.46667V4M6.66667 7.66667V11M9.33333 7.66667V11M2 4H14M12.6667 4V11.4667C12.6667 12.5868 12.6667 13.1468 12.4487 13.5746C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6667 10.5868 14.6667 9.46667 14.6667H6.53333C5.41323 14.6667 4.85318 14.6667 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5746C3.33333 13.1468 3.33333 12.5868 3.33333 11.4667V4" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <button class="favorites-list-button" data-id="${t}" type="button">
        Start
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="favorites-list-button-icon">
          <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="favorites-list-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="favorite-list-svg">
        <circle cx="12" cy="12" r="12" fill="#7E847F"/>
        <path d="M18.8234 8.7254C18.6138 8.47501 18.2403 8.44209 17.9899 8.65089L16.349 10.0293L15.5943 8.15964C15.5675 8.08946 15.5267 8.03054 15.4799 7.97856C15.3257 7.63546 15.058 7.34088 14.6889 7.17019C14.5286 7.09742 14.3631 7.05843 14.1977 7.03937C14.1613 7.02031 14.1283 6.99518 14.0868 6.98218L11.199 6.17729C11.037 6.1331 10.8741 6.16169 10.7407 6.23967C10.5821 6.29339 10.4461 6.40862 10.3811 6.57584L9.29378 9.37174C9.17594 9.67585 9.3267 10.019 9.63168 10.1385C9.93492 10.2563 10.2789 10.1047 10.3976 9.79975L11.316 7.43878L12.6312 7.80441C12.5991 7.85639 12.5645 7.90491 12.5385 7.96036L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7786L8.7488 15.2139L5.31955 16.3611C4.9314 16.6513 4.84909 17.198 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7707L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2718C10.1576 16.225 10.2078 16.1878 10.2416 16.1297L11.4633 14.0815L13.6319 15.9296L11.3116 18.5444C10.9919 18.9049 11.024 19.4602 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4425C15.6082 16.342 15.6619 16.2259 15.6983 16.1046C15.7199 16.0388 15.7199 15.9703 15.7251 15.9019C15.7251 15.8672 15.7381 15.836 15.7355 15.804C15.7277 15.5648 15.6307 15.3326 15.4349 15.1672L13.4395 13.4655C13.5834 13.3286 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2778C15.5181 11.3758 15.551 11.4719 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7154 15.8664 11.7162 15.8768 11.7188C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.737C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7318 16.2831 11.7353 16.3013 11.7275C16.3975 11.6911 16.4711 11.6296 16.5344 11.5577L18.8893 9.55889C19.1397 9.34835 19.034 8.97579 18.8234 8.7254Z" fill="#F6F6F6"/>
        <path d="M15.8446 7.30102C16.7562 7.30102 17.4951 6.56206 17.4951 5.65051C17.4951 4.73896 16.7562 4 15.8446 4C14.9331 4 14.1941 4.73896 14.1941 5.65051C14.1941 6.56206 14.9331 7.30102 15.8446 7.30102Z" fill="#F6F6F6"/>
      </svg>

      <h3 class="favorites-list-text">${u(e)}</h3>
    </div>

    <ul class="favorites-card-text-list">
      <li class="favorites-card-text-item">
          <h4 class="favorites-card-text-title">Burned calories:</h4>
          <p class="favorites-card-text-block">${i}/${n} min</p>
      </li>

      <li class="favorites-card-text-item">
          <h4 class="favorites-card-text-title">Body part:</h4>
          <p class="favorites-card-text-block">${u(o)}</p>
      </li>

      <li class="favorites-card-text-item">
          <h4 class="favorites-card-text-title">Target:</h4>
          <p class="favorites-card-text-block">${u(a)}</p>
      </li>
    </ul>
  </li>`;d();c.addEventListener("click",k);function B(t){const e=t.target;if(e){let i=e.dataset.id,a=(JSON.parse(localStorage.getItem(f))||[]).filter(n=>n._id!==i);localStorage.setItem(f,JSON.stringify(a)),d()}}const D=Object.freeze(Object.defineProperty({__proto__:null,containerForTextOfEmptyList:m,deleteExercise:B,renderFavorites:d,ulFavList:c},Symbol.toStringTag,{value:"Module"}));export{D as a,Y as f};
//# sourceMappingURL=favorites-dda97cec.js.map
