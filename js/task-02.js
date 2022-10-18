const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListOfIngredients = document.querySelector('#ingredients');


const makingItemsByIngredients = ingredients.map(element => {
  const markup = document.createElement('li');
  makeListOfIngredients.append(markup);
  markup.classList.add('item');
  markup.textContent = element;
}
);
