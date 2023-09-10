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
const studentNames = document.querySelectorAll('#student-names div');
        const popup = document.getElementById('popup');
        const popupClose = document.getElementById('popup-close');
        const portfolioLink = document.getElementById('portfolio-link');
        const portfolioDescription = document.getElementById('portfolio-description');

        // Array of objects containing name and description
        const students = [
            {
                name: "Jong Woong Yun",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sumin Lee",
                description: "Checkout his portfolio site to know more about her work"
            },
            {
                name: "Loui Hernandez",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Suyog Ghimire",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Juliette Thomson",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Chao Chen",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Tiago Da Silva Witt",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Jintao Duan",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Viktor Kim",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Ha Anh Le",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Nikolai Meijer",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sandra Neira",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Jemima Ama Neizer",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Dev Ashish Pandya",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Meet Amrutbhai Parmar",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Harsh Patel",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sen Ghirmay",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Hit Diliphai Patel",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Jeet Alpesh Patel",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Omkumar Dipakbhai Patel",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sneh Manishkumar Patel",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Rodrigo Rocha De Freitas",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Divij Saddul",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Shauraya Salwan",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Michelle Paola Duque De La Rosa",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sahilkumar Bhaveshkumar Gosaliya",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Haem Hariharn Rajeswari Sekar",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Maria Camila Romero Contreras",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Robin Reji Vazhavilayil",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Sophia Westrop",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Aiden Wotton",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Jonathan Yates",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Jie Yang",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Abdullh Sultan",
                description: "Checkout his portfolio site to know more about his work"
            },
            {
                name: "Dan Singer",
                description: "Checkout his portfolio site to know more about his work"
            },

        ];

        studentNames.forEach(nameDiv => {
            nameDiv.addEventListener('click', () => {
                const portfolioURL = nameDiv.getAttribute('data-portfolio');
                portfolioLink.href = portfolioURL;
        
                // Find the corresponding student object based on the name
                const studentName = nameDiv.textContent;
                const student = students.find(student => student.name === studentName);
        
                if (student) {
                    // Set the name and description in the popup
                    portfolioDescription.textContent = student.description;
                } else {
                    // Clear the description if no matching student is found
                    portfolioDescription.textContent = '';
                }
        
                // Calculate and set the position of the popup based on the clicked element
                const rect = nameDiv.getBoundingClientRect();
                const offsetX = popup.offsetWidth / 2; // Adjust horizontally for centering
                const offsetY = popup.offsetHeight / 2; // Adjust vertically for centering
                popup.style.top = rect.bottom - offsetY + 'px';
                popup.style.left = rect.left - offsetX + 'px';
        
                popup.style.display = 'block';
            });
        });
        
popupClose.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor link
    popup.style.display = 'none';
    portfolioContent.textContent = '';
});


        