const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const iconsContainer = document.querySelector(".flex.items-center.space-x-4"); // Target heart & search icons

// Open Sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    menuBtn.classList.add("hidden"); // Hide menu button
    closeBtn.classList.remove("hidden"); // Show close button
    iconsContainer.classList.add("hidden"); // Hide heart & search icons
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    menuBtn.classList.remove("hidden"); // Show menu button again
    closeBtn.classList.add("hidden"); // Hide close button
    iconsContainer.classList.remove("hidden"); // Show heart & search icons again
});

// Close Sidebar When Clicking Outside
window.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && !closeBtn.contains(e.target)) {
        sidebar.classList.add("translate-x-full");
        menuBtn.classList.remove("hidden"); // Show menu button again
        closeBtn.classList.add("hidden"); // Hide close button
        iconsContainer.classList.remove("hidden"); // Show heart & search icons again
    }
});
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scroll");
        navbar.classList.remove("nav-transparent");
    } else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-scroll");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    let triggered = false; // Ensure it runs only once

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            let increment = Math.ceil(target / 100); // Adjust speed

            function updateCount() {
                if (count < target) {
                    count += increment;
                    counter.innerText = count;
                    setTimeout(updateCount, 30); // Speed of counting
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
        });
    }

    // Observe only this specific section
    const section = document.getElementById('about');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !triggered) {
                triggered = true; // Prevent multiple triggers
                startCounter();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});


AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
});
