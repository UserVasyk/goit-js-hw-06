function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxeEl = document.querySelector('#boxes');

console.log(boxeEl.previousSibling)
let totalInputNumber = 0;

createBtn.addEventListener('click', createBoxes)
inputEl.addEventListener('input', onInputNumber)
destroyBtn.addEventListener('click', destroyBoxes)

function onInputNumber(event) {
  totalInputNumber = event.currentTarget.value;
  

  
}
function createBoxes(amount){
  amount = totalInputNumber;
  console.log(amount);
 
  for (let i = 1; i <= amount; i += 1) {
     let total = 0;
  if (!boxeEl.firstChild) {
      total = 0;
      console.log('fisrt')
  }
  else {
  total += i * 10;
  console.log('gdd')
    }

    console.log(total);

    const markup = document.createElement('div');

    markup.style.backgroundColor = getRandomHexColor(); 
    

markup.style.width = `${30 + total}px`;
    markup.style.height = `${total + 30}px`;
    boxeEl.append( markup);
  }

}

function destroyBoxes() {
  boxeEl.querySelectorAll('div').forEach(element => element.remove())
}