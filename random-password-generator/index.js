const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");



btnEl.addEventListener("click", () => {
    creatPwd();
});

copyIconEl.addEventListener("click", () => {
    if (inputEl.value) {
        copyPwd();
        alertEl.classList.remove("active");
        setTimeout(() => alertEl.classList.add("active"), 2000);
    }
});

function creatPwd() {
    const chars = "1234567890qwertyuiopasdfghjklzxcvbnm,./;'[]\-=+()*&^%$#@!~";
    let pwd = "";
    const pwdLen = 14;
    for (let i = 0; i < pwdLen; i++) {
        let index = Math.floor(Math.random() * chars.length);
        pwd += chars.substring(index, index + 1);
    }
    inputEl.value = pwd;
    alertEl.innerText = `[${pwd}] Copied!`;
}

function copyPwd() {
    console.log("00000000", inputEl.value)
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
}