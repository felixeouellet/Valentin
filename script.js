function popUpAmoureux() {
    let btn = document.querySelector('.submit');

    btn.addEventListener("click", () => {
        document.querySelector(".amoureux").style.display = "block";
    });
}

function popUpEx() {
    let btn = document.querySelector('.submit');

    btn.addEventListener("click", () => {
        document.querySelector(".ex").style.display = "block";
    });
}

function popUpFreq() {
    let btn = document.querySelector('.submit');

    btn.addEventListener("click", () => {
        document.querySelector(".freq").style.display = "block";
    });
}