const inputEl = document.querySelector(".input");
const formEl = document.querySelector(".form");
const ulEl = document.querySelector(".list");

let tasklist = JSON.parse(localStorage.getItem("list")) || [];
tasklist.forEach(task => {
    toDoList(task);
});


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
});

function toDoList(task) {
    let newTask = inputEl.value;

    if (task) {
        newTask = task.name;
    }

    const liEl = document.createElement("li");


    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    const checkbtnEl = document.createElement("div");
    checkbtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkbtnEl);
    const trashbtnEl = document.createElement("div");
    trashbtnEl.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    liEl.appendChild(trashbtnEl);
    inputEl.value = "";

    checkbtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });
    trashbtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage() {
    const listsEl = document.querySelectorAll("li");
    let tasklist = [];
    listsEl.forEach(listEL => {
        tasklist.push({
            name: listEL.innerText,
            checked: listEL.classList.contains("checked")
        })
    });
    localStorage.setItem("list", JSON.stringify(tasklist));
}

