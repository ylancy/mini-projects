const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const progressEL = document.querySelector(".progress-upward");
const stepsEL = document.querySelectorAll(".step");

let currentChecked = 0;

nextEl.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepsEL.length - 1) {
        currentChecked = stepsEL.length - 1;
    }
    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 0;
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepsEL.forEach((stepEl, idx) => {
        if (idx <= currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-check"></i>
            <small>${idx === 0 ? "Start" : idx === stepsEL.length - 1 ? "Final" : "Step " + (idx)}</small>`;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }

        progressEL.style.width = (currentChecked / (stepsEL.length - 1)) * 100 + "%";

        if (currentChecked === 0) {
            prevEl.disabled = true;
        } else if (currentChecked === stepsEL.length - 1) {
            nextEl.disabled = true;
        } else {
            prevEl.disabled = false;
            nextEl.disabled = false;
        }
    });
}