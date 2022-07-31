const slides = document.getElementsByClassName("carousel-item");
const btnPrev = document.getElementById("carousel-button-prev");
const btnNext = document.getElementById("carousel-button-next");
const dots = document.getElementsByClassName("dot");

let slidePosition = 0;
const totalSlides = slides.length;

btnPrev.addEventListener("click", moveToPrevSlide);

btnNext.addEventListener("click", moveToNextSlide);

function moveToPrevSlide() {
  slides[slidePosition].classList.remove("carousel-item-visible");
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  slides[slidePosition].classList.remove("carousel-item-visible");
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
  }
}

function removeActiveFromAllDots() {
  for (const dot of dots) {
    dot.classList.remove("dot-active");
  }
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    hideAllSlides();
    removeActiveFromAllDots();
    dots[i].classList.add("dot-active");
    slides[i].classList.add("carousel-item-visible");
  });
}
