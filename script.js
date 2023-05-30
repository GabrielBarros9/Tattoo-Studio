const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = carousel.clientWidth;
let currentIndex = 0;

function slideCarousel() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselInner.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

setInterval(slideCarousel, 3000);