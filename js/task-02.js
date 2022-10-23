const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');


const makingItemsByIngredients = ingredients.map(element => {
  const markup = document.createElement('li');
  
  markup.classList.add('item');
  markup.textContent = element;
  return markup;
}
);
listOfIngredients.append(...makingItemsByIngredients);