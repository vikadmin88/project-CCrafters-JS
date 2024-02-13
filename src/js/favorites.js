const ulFavList = document.querySelector(".favorites-list");
const containerForTextOfEmptyList = document.querySelector(".empty-text-container");
let btns = document.querySelectorAll('button[data-btn="trash"]');
//----------------Test data-to-local-storage---------------------------///
let favDataArr = [{"_id":"64f389465ae26083f39b1ab2",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/1316.gif",
"name":"barbell bent arm pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":324,
"time":3,
"popularity":559},
{"_id":"64f389465ae26083f39b17b3",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0022.gif",
"name":"barbell pullover to press",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":4.69,
"burnedCalories":33,
"time":3,
"popularity":1403},
{"_id":"64f389465ae26083f39b17bf",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0034.gif",
"name":"barbell decline bent arm pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":329,
"time":3,
"popularity":3},
{"_id":"64f389465ae26083f39b17c2",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",
"name":"barbell decline wide-grip pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":307,
"time":3,
"popularity":7418},
{"_id":"64f389465ae26083f39b17e5",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5w",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e51",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5f",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5j",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5t",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5dd",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5tss",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17},
{"_id":"64f389465ae26083f39b17e5ssst",
"bodyPart":"back",
"equipment":"barbell",
"gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0073.gif",
"name":"barbell pullover",
"target":"lats",
"description":"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",
"rating":3,
"burnedCalories":37,
"time":3,
"popularity":17}];


localStorage.setItem('favorites', JSON.stringify(favDataArr));


function renderFavorites() {
       let favArr = JSON.parse(localStorage.getItem('favorites')) || [];
       console.log(favArr);

       if (favArr.length) {
        containerForTextOfEmptyList.style.display = "none";
        ulFavList.innerHTML = favArr.map(fillFavoriteCard).join("");

        // reassign listeners for recreated elements
        btns = document.querySelectorAll('button[data-btn="trash"]');
        for (let btn of btns) {
          // event exercise removing
          btn.addEventListener('click', deleteExercise);
        }
       } else {
        containerForTextOfEmptyList.style.display = "block";
       }
}


//--------------------------Card-fill-function-------------------------------//
function spanToCapitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const fillFavoriteCard = ({
    _id,
    name,
    burnedCalories,
    bodyPart,
    target,
    time
  }) => {
    return `<li class="favorites-list-item" tabindex="0">
    <div class="favorites-card-header">
      <div class="favorites-oval">
        <span>WORKOUT</span>
        <button class="favorites-icon-svg trash-button" data-id="${_id}" data-btn="trash">
          <svg width="16" height="16" fill="none">
            <use href="./img/icons.svg#icon-trash"></use>
          </svg>
        </button>
      </div>
      <button class="favorites-list-button" data-id="${_id}" type="button">
        Start
        <svg
          class="favorites-list-button-icon"
          width="14"
          height="14"
          stroke="#1B1B1B"
        >
          <use href="./img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
    <div class="favorites-list-container">
      <svg class="favorite-list-svg" width="24" height="24">
        <use href="./img/icons.svg#icon-running_man"></use>
      </svg>
      <h3 class="favorites-list-text">${spanToCapitalize(name)}</h3>
    </div>
    <div class="favorites-card-text">
      <ul class="favorites-card-text-list">
        <li class="favorites-card-text-item">
          <div class="favorites-card-text-wrapper">
            <h4 class="favorites-card-text-title">Burned calories:</h4>
            <p class="favorites-card-text-block">${burnedCalories}/${time} min</p>
          </div>
          <div class="favorites-card-text-wrapper">
            <h4 class="favorites-card-text-title">Body part:</h4>
            <p class="favorites-card-text-block">${spanToCapitalize(bodyPart)}</p>
          </div>
          <div class="favorites-card-text-wrapper">
            <h4 class="favorites-card-text-title">Target:</h4>
            <p class="favorites-card-text-block">${spanToCapitalize(target)}</p>
          </div>
        </li>
      </ul>
    </div>
  </li>`;}

  //-------------------------End-Fill-Favorite-Card-function-------------//
  renderFavorites();

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
       favDataArr = updFavorites;
       renderFavorites();

     }
   }
 //-------------------------End-Favorite-remove--------------------------------//