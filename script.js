
window.addEventListener("scroll", function () {
    let hiddenSections = document.querySelectorAll(".hidden");
    let scrollPosition = window.scrollY;
    
    hiddenSections.forEach(section => {
        if (scrollPosition > window.innerHeight * 0.8) {
            section.style.display = "block"; // Show sections when scrolling down
        }
    });
});

function toggleMenu() {
    let menu = document.getElementById("nav-links");
    menu.classList.toggle("show");
}

// Close menu when clicking an option
document.querySelectorAll("#nav-links li a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("nav-links").classList.remove("show");
    });
});


