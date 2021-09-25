const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav");
const body = document.querySelector("body");

let menuOpen = false;


menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        navBar.classList.add("open");
        menuBtn.classList.add("open");
        body.classList.add("fixed-position");
        menuOpen = true;
    } else {
        navBar.classList.remove("open");
        menuBtn.classList.remove("open");
        body.classList.remove("fixed-position");
        menuOpen = false;
    }
});