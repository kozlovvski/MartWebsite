// when menu button is clicked, show every list in the menu
document.querySelector(".navbar__menu-button").addEventListener("click", () => {
    document.querySelectorAll(".navbar--site .navbar__list").forEach(item => {
        item.classList.toggle("navbar__list--visible");
    })
});