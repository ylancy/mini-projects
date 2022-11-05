const menueEl = document.querySelector(".menue");
const socialListEl = document.querySelector(".social-lists");
const ListEl = document.querySelectorAll(".social-lists li");
const content = document.querySelector(".menue p");
console.log(content)

menueEl.addEventListener("click", () => {
    menueEl.classList.toggle("rotate");
    socialListEl.classList.toggle("hide");
});

ListEl.forEach(El => {
    El.addEventListener("click", () => {
        content.innerHTML = El.innerHTML;
        socialListEl.classList.add("hide");
    });
});