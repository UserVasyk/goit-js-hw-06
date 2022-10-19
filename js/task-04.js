

// Добав кнопку Очистити для практики


const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector('[data-action="increment"]');
const cleanBtn = document.querySelector('[data-actiron="clean"]' )
const counterEl = document.querySelector('#value');

let counterValue = 0;


decrementBtn.addEventListener('click', onTargetDecrementValue)
incrementBtn.addEventListener("click", onTargetIncrementValue)
cleanBtn.addEventListener('click', onTargetCleaningValue )
function onTargetDecrementValue() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}
function onTargetIncrementValue() {
       counterValue += 1;
    counterEl.textContent = counterValue;
}

function onTargetCleaningValue() {
    counterValue = 0;
    counterEl.textContent = counterValue;
}