const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const containerEL = document.querySelector(".container");

leftEl.addEventListener("mouseenter", () => {
    containerEL.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
    containerEL.classList.remove("active-left");
});

rightEl.addEventListener("mouseenter", () => {
    containerEL.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
    containerEL.classList.remove("active-right");
});