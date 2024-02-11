const favoriteCardData = {
    name: "barbell bent arm pullover",
    burnedCalories:324,
    bodyPart:"back",
    target:"lats",
}
const fillFavoriteCard = ({
    name,
    burnedCalories,
    bodyPart,
    target,
}) => {
    return
    `<div class="favorites-list-container">
                    {/* <svg class="favorites-list-svg" width="24" height="24">
                        <use href="./img/icons.svg#icon-running_man"></use>
                    </svg> */}
                    <h3 class="favorites-list-text">${name}</h3>
                </div>`
}