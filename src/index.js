// 
// CSS
// 

import 'normalize.css';
import './styles/style.scss';

// 
// JS
// 

import "./js/products";
import "./js/navbar";
import "./js/slider";
import "./js/customer-reviews";
import "lazyload";
lazyload(); // this makes sure that all images with "lazyload" class will be lazy-loaded

window.onscroll = function () {
    window.scrollTo(0, 0); //prevent scrolling when preloader is visible;
};

window.onload = function () {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("preloader--hidden");
        window.onscroll = undefined;
        document.body.style.overflow = "auto";
    }, 500); // add a slight delay so that the preloader doesn't flicker if page loads fast
}