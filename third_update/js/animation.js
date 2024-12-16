let slider = document.querySelector('.main_fleet--slider');
let slidesContainer = slider.querySelector('.main_fleet--slider-slides');
let slides = Array.from(slidesContainer.querySelectorAll('.main_fleet--slider-slides-slide'));
let slideCount = slides.length;
let slideIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function autoSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

let slideInterval = setInterval(autoSlide, 2500);