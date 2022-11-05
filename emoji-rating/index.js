const starsEl = document.querySelectorAll(".fa-star");
// console.log(starsEl);
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArr = ["red", "blue", "yellow", "green", "pink"];

upDateRating(0);

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        upDateRating(index);
    });
});

function upDateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx <= index) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });
    // console.log(emojisEl);

    emojisEl.forEach((emojiEl) => {

        emojiEl.style.transform = `translateX(${index * -50}px)`;
        emojiEl.style.color = `${colorsArr[index]}`;
    });

}