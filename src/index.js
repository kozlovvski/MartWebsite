import 'normalize.css';
import './styles/style.scss';

console.log('☠️ Arr! JS on board!');

document.querySelector(".navbar__menu-button").addEventListener("click", () => {
    document.querySelectorAll(".navbar--site .navbar__list").forEach(item => {
        item.classList.toggle("navbar__list--visible");
    })
});