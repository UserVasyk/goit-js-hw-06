

const categoriesOfLinks = document.querySelector('#categories');
const numbersOfCategories = document.querySelectorAll('.item');



console.log('Number of categories:', numbersOfCategories.length);

categoriesOfLinks.querySelectorAll('.item').forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
    
});


