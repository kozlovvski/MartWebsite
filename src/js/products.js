const filterButtons = document.querySelectorAll(".filter-list__button");
const featuredProducts = document.querySelectorAll(".product--featured");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        removeObsoleteClasses();
        button.classList.add("filter-list__button--active");
        const currentCategory = button.innerText.toLowerCase();
        hideUnmatchingProducts(currentCategory);
    });
});

const removeObsoleteClasses = () => {
    filterButtons.forEach(button => {
        button.classList.remove("filter-list__button--active");
    });

    featuredProducts.forEach(product => {
        product.classList.remove("product--hidden");
    });
}

const hideUnmatchingProducts = (currentCategory) => {
    //if category is "all" we want to show every product (so we don't want to hide any items)
    if(currentCategory != "all") {
        featuredProducts.forEach(product => {
            const productCategories = product.dataset.productCategories;
            if(!productCategories.includes(currentCategory)) {
                product.classList.add("product--hidden");
            }
        })
    }
}