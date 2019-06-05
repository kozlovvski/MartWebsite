import 'normalize.css';
import './styles/style.scss';
import './index.html';

console.log('☠️ Arr! JS on board!');

document.querySelector(".navbar__menu-button").addEventListener("click", () => {
    document.querySelectorAll(".navbar--site .navbar__list").forEach(item => {
        item.classList.toggle("navbar__list--visible");
    })
});