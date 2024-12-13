const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Hamburger menu toggled:", hamburger.classList.contains("active") ? "opened" : "closed");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    console.log(`Navigation link clicked: ${n.textContent.trim()}`);

    // Set the active link based on the current URL
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}));

// Show the button when scrolling down
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
        console.log("Back-to-top button displayed.");
    } else {
        button.style.display = "none";
        console.log("Back-to-top button hidden.");
    }
};

// Scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Scroll to top triggered.");
}

// Navbar behavior on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Close the hamburger menu when scrolling
    if (navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        console.log("Hamburger menu closed on scroll.");
    }

    // Add/remove active class to navbar based on scroll position
    if (window.scrollY > 0) {
        navbar.classList.add('active');
        console.log("Navbar scrolled: 'active' class added.");
    } else {
        navbar.classList.remove('active');
        console.log("Navbar at top: 'active' class removed.");
    }
});

// Modal behavior
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('comingSoonModal');
    const closeButton = document.getElementById('closeModal');

    // Check if the user has visited before
    if (!localStorage.getItem('hasVisited')) {
        modal.style.display = 'block'; // Show the modal
        localStorage.setItem('hasVisited', 'true'); // Set a flag in local storage
    }

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
