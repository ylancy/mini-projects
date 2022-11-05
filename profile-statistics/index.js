const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    let currentNum = counterEl.innerText;
    increaseCounter();

    function increaseCounter() {
        const numCeil = counterEl.getAttribute("data-ceil");
        const increment = numCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < numCeil) {
            counterEl.innerText = currentNum;
            setTimeout(increaseCounter, 50);
        } else {
            counterEl.innerText = numCeil
        }

    }

});
