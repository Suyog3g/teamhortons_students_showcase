document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("nav-icon1");
    const menu = document.querySelector(".menu");

    navIcon.addEventListener("click", function () {
        navIcon.classList.toggle("open");
        menu.classList.toggle("active");
    });

    const toggleButton = document.querySelector(".container button");
    const videoProductionSection = document.getElementById("video-production");
    const finalIntegratedProjectSection = document.getElementById("final-integrated-project");

    let isHidden = true; // Flag to track whether sections are hidden initially

    toggleButton.addEventListener("click", function () {
        if (isHidden) {
            videoProductionSection.style.display = "block"; // Show Video Production
            finalIntegratedProjectSection.style.display = "block"; // Show Final Integrated Project
            toggleButton.textContent = "See less";
        } else {
            videoProductionSection.style.display = "none"; // Hide Video Production
            finalIntegratedProjectSection.style.display = "none"; // Hide Final Integrated Project
            toggleButton.textContent = "See more";
        }

        isHidden = !isHidden; // Toggle the flag
    });
});
