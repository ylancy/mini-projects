const searchContainerEl = document.querySelector(".search-container");
const manifierEl = document.querySelector(".magnifier");

manifierEl.addEventListener("click", () => {
    searchContainerEl.classList.toggle("active");
});