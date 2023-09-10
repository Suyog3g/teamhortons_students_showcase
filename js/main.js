// Burger Menu

const navIcon = document.getElementById("nav-icon1");
const menu = document.querySelector(".menu");

navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    menu.classList.toggle("active");
});

// let button = document.querySelector("#button");
// let burgerCon = document.querySelector("#burger-con");

// function burgerMenu() {
//     burgerCon.classList.toggle("slide-toggle");
//     button.classList.toggle("expanded");
// };

// button.addEventListener("click", burgerMenu, false);