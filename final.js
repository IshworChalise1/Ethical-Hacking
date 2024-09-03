const heading = "Please Meet Our Team";
let i = 0;
const typing = () => {
  if (i < heading.length) {
    document.querySelector(".heading").innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  } else {
    setTimeout(() => {
      i = 0;
      document.querySelector(".heading").innerHTML = ""; // Clear the text
      typing(); // Restart the typing effect
    }, 1000);
  }
};

typing(); // Starts the typing animation for the heading

// Carousel slider functionality
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll(".carousel img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 0,
  intervalId;

// Function to start automatic image slider
const autoSlide = () => {
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  if (imageIndex >= images.length) {
    imageIndex = 0; // Loop back to the first image
  } else if (imageIndex < 0) {
    imageIndex = images.length - 1; // Loop to the last image
  }

  // Calculate the transform value for the carousel
  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

// Function to update the image index and handle clicks
const updateClick = (e) => {
  clearInterval(intervalId); // Stop auto-slide on button click
  imageIndex += e.target.id === "next" ? 1 : -1; // Update index based on button
  slideImage(); // Show the new image
  autoSlide(); // Restart auto-slide
};

// Initialize the auto-slide on page load
autoSlide(); // Starts the carousel auto-slide functionality

// Add event listeners to navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Pause auto-slide when hovering over the carousel, resume on mouse leave
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);

const imagesList = [
  // "/images/bg3.png",
  "fnalbg.png",
  "bg2.png",
  // "/images/lastbg.png",
  // "images/ishhh.png",
];

let currentImageIndex = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url(${imagesList[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % imagesList.length;
}, 5000);

function showSection(sectionId) {
  // Remove active class from all buttons
  document.querySelectorAll('.button-container button').forEach(button => {
    button.classList.remove('active');
  });

  // Add active class to the clicked button
  const activeButton = document.getElementById(`${sectionId}-btn`);
  activeButton.classList.add('active');

  // Hide all content containers
  document.querySelectorAll('.content-container').forEach(container => {
    container.classList.remove('active');
  });

  // Show the selected content container
  const activeContent = document.getElementById(sectionId);
  activeContent.classList.add('active');
}


const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Autoplay settings
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Transition speed
  speed: 600, // Duration of transition in milliseconds

  // Effect settings for smoother transitions
  effect: 'slide', // Other options: 'fade', 'cube', 'coverflow', 'flip'
  
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

