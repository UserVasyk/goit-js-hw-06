function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxeEl = document.querySelector('#boxes');


let totalInputNumber = 0;

createBtn.addEventListener('click', createBoxes)
inputEl.addEventListener('input', onInputNumber)
destroyBtn.addEventListener('click', destroyBoxes)

function onInputNumber(event) {
  totalInputNumber = event.currentTarget.value;

}

function createBoxes(amount){
  amount = totalInputNumber;
 
  for (let i = 1; i <= amount; i += 1) {
    
    const total = 30 + (boxeEl.children.length) * 10;
    


    const markup = document.createElement('div');

    markup.style.backgroundColor = getRandomHexColor(); 
   
    markup.style.width = `${total}px`;
    markup.style.height = `${total}px`;
    boxeEl.append(markup);
  
  }

}
function destroyBoxes() {
  boxeEl.querySelectorAll('div').forEach(element => element.remove())
}