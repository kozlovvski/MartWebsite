// 
// variables
// 

const reviews = document.querySelectorAll(".review");
const buttons = document.querySelectorAll(".review__select");

// 
// MAIN
// 

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        removeObsoleteClasses();
        button.classList.add("review__select--active");
        reviews[index].classList.add("review--active");
    })
});

// 
// functions
// 

function removeObsoleteClasses() {
    reviews.forEach(review => {
        review.classList.remove("review--active");
    })

    buttons.forEach(button => {
        button.classList.remove("review__select--active");
    })
}