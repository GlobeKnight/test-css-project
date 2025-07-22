let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});
setInterval(() => {
    changeSlide(1);
  }, 3000);
