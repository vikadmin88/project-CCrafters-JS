const ulFavList = document.querySelector(".favorites-list");
const containerForTextOfEmptyList = document.querySelector(".pagination-mobile-list");
const btns = document.querySelectorAll('button[data-id=icon-trash]');

//----------------------Favorite render------------------------------//
 function renderFavorites() {
    if (window.location.pathname.endsWith("/favorites.html")) {
     let favArr = JSON.parse(localStorage.getItem('favorites')) || [];
    
      if (viewPortWidth < 768) {
        if (favArr.length > 8) {
          const activePaginationBtn = document.querySelector(".exersizes-pagination-item-active")
          let cutFavArr = [];
          let i = 1;
          let minNumOfCard = 0;
       
          if (!activePaginationBtn) {
            currentPage = 1;
          } else {
            currentPage = activePaginationBtn.textContent;
            minNumOfCard = cardsPerPage * (currentPage - 1);
          }
  
          favArr.map(workoutCard => {
            if (i > minNumOfCard && i <= Math.ceil(cardsPerPage * currentPage)) {
              cutFavArr.push(workoutCard);
            };
            i += 1;
          });
          favArr = cutFavArr;
        };
    }
}
}
const favoritesContainer = document.querySelector('.favorites-contanier-block');
  const mobilePagination = document.querySelector('.pagination-mobile-list');

  favoritesContainer.innerHTML = '';

  if (JSON.parse(localStorage.getItem('favorites')).length === 0) {
    favoritesContainer.innerHTML = `<img class="message-info-svg" src="../img/icons.svg#icon-dumbbells-dark" alt="dumbbell" />
      <p class="message-info-text">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`;
    favoritesContainer.style.overflowY = 'hidden';
    mobilePagination.style.display = 'none';
  }
  const favoritesList = document.createElement('ul');
  favoritesList.classList.add('favorites-list');
  favoritesContainer.appendChild(favoritesList);

  const favoritesHTML = favArr
    .map(item => {
      let exerciseName = item.name;
      let exerciseTarget = item.target;
      const viewPortWidth = window.innerWidth;
      if (viewPortWidth >= 1440) {
        if (exerciseName.length > 25) {
          exerciseName = item.name[0].toUpperCase() + item.name.slice(1, 25).trim() + '...';
        }
        if (exerciseTarget.length > 20) {
          exerciseTarget = item.target[0].toUpperCase() + item.target.slice(1, 17).trim() + '...';
        }
      } else if (viewPortWidth < 1440 && viewPortWidth >= 768) {
        if (exerciseName.length > 17) {
          exerciseName = item.name[0].toUpperCase() + item.name.slice(1, 16).trim() + '...';
        }
      } else {
        exerciseName = item.name[0].toUpperCase() + item.name.slice(1, 20).trim() + '...';
      }
      return `<li class="favorites-list-item" tabindex="0">
          <div class="favorites-card-heder">
            <div class="favorites-oval">
              <span>WORKOUT</span>
              <button class="favorites-icon-svg" data-id="${item._id}">
                <svg width="16" height="16" fill="none">
                  <use href="${icons}#icon-trash"></use>
                </svg>
              </button>
            </div>
            <button class="favorites-list-button" data-id="${item._id}" type="button">
              Start
              <svg
                class="favorites-list-button-icon"
                width="14"
                height="14"
                stroke="#1B1B1B"
              >
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
          <div class="favorites-list-container">
            <svg class="favorite-list-svg" width="24" height="24">
              <use href="${icons}#icon-running_man"></use>
            </svg>
            <h3 class="favorites-list-text">${exerciseName}</h3>
          </div>
          <div class="favorites-card-text">
            <ul class="favorites-card-text-list">
              <li class="favorites-card-text-item">
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Burned calories:</h4>
                  <p class="favorites-card-text-block">${item.burnedCalories}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Body part:</h4>
                  <p class="favorites-card-text-block">${item.bodyPart}</p>
                </div>
                <div class="favorites-card-text-wrapper">
                  <h4 class="favorites-card-text-title">Target:</h4>
                  <p class="favorites-card-text-block">${exerciseTarget}</p>
                </div>
              </li>
            </ul>
          </div>
        </li>`;
    })
    .join('');

    favoritesList.innerHTML = favoritesHTML;

    document.addEventListener('DOMContentLoaded', renderFavorites);
    
if (viewPortWidth < 768) {
    document.addEventListener('DOMContentLoaded', renderPagination);
  }; 
 //--------------------Favorite-remove-----------------------//
 containerForTextOfEmptyList.innerHTML = '';
 // get exercises stored in storage

 
 for (let btn of btns) {
     // event exercise removing
     btn.addEventListener('click', deleteExercise);
   }
 
   // get removing button
 function deleteExercise(e) {
     const trashBtn = e.target
   
     if (trashBtn) {
       let exerciseId = trashBtn.dataset.id;
       console.log(exerciseId);
       let curFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
       let updFavorites = curFavorites.filter(
         exercise => exercise._id !== exerciseId
       );
   
       localStorage.setItem('favorites', JSON.stringify(updFavorites));
       favArr = updFavorites;
       generateFavList();
     }
   }
 