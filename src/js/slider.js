// 
// variables
// 

const buttonLeft = document.querySelector(".slider__button--left");
const buttonRight = document.querySelector(".slider__button--right");

const slides = document.getElementsByClassName("slider__item");
const sliderContainer = document.querySelector(".slider__container");

// 
// MAIN
// 

buttonLeft.addEventListener("click", previousSlide);
buttonRight.addEventListener("click", nextSlide);

moveLastToFront();  
let autoSlideChange = window.setInterval(nextSlide, 5000);

// 
// functions
// 
    
function previousSlide() {
    const currentSlide = document.querySelector(".slider__item--active");
    currentSlide.classList.remove("slider__item--active");
    currentSlide.previousElementSibling.classList.add("slider__item--active");
    moveLastToFront();
}

function nextSlide() {
    const currentSlide = document.querySelector(".slider__item--active");
    currentSlide.classList.remove("slider__item--active");
    currentSlide.nextElementSibling.classList.add("slider__item--active");
    moveFirstToBack();
}

function moveLastToFront() {
    const lastSlide = slides[slides.length - 1];
    sliderContainer.insertBefore(lastSlide, slides[0]);
}

function moveFirstToBack() {
    const firstSlide = slides[0];
    sliderContainer.appendChild(firstSlide);
}