const navIcon = document.getElementById("nav-icon1");
const menu = document.querySelector(".menu");

navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    menu.classList.toggle("active");
});
