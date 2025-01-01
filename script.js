let slideIndex = 0;
let autoSlideInterval;

// Function to show slides
function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    
    slides[slideIndex].style.display = "block"; // Show current slide
}

// Function to change slides on button click
function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide(); // Restart auto sliding after manual control
}

// Function for auto sliding
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    autoSlideInterval = setTimeout(autoSlide, 9000); // Change every 9 seconds
}

// Reset auto-slide timer when manual control is used
function resetAutoSlide() {
    clearTimeout(autoSlideInterval); // Stop current timer
    autoSlideInterval = setTimeout(autoSlide, 9000); // Restart timer
}

// Initialize the slideshow
showSlides(slideIndex); // Show first slide initially
autoSlide(); // Start auto-sliding

// Function to change the header background color on scroll
window.onscroll = function() {
    const header = document.getElementById("header");
    // Change the background color based on scroll position
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "rgba(36, 35, 35, 0.8)"; // Darker color when scrolled
    } else {
        header.style.backgroundColor = "rgba(36, 35, 35, 0)"; // Fully transparent when at the top
    }
};

