const slides = document.getElementsByClassName("carousel-item");
const btnPrev = document.getElementById("carousel-button-prev");
const btnNext = document.getElementById("carousel-button-next");
const dots = document.getElementsByClassName("dot");

let slidePosition = 0;
const totalSlides = slides.length;

btnPrev.addEventListener("click", moveToPrevSlide);

btnNext.addEventListener("click", moveToNextSlide);

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  goToSlide(slidePosition);
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  goToSlide(slidePosition);
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
    goToSlide(i);
  });
}


function goToSlide(index){
  hideAllSlides();
  removeActiveFromAllDots();
  dots[index].classList.add("dot-active");
  slides[index].classList.add("carousel-item-visible");
}