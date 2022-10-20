function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColorToChange = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');


changeColorBtn.addEventListener('click', onTargetChengeBtn)


function onTargetChengeBtn(event) {
  currentColorToChange.textContent = getRandomHexColor();
  document.body.style.backgroundColor = currentColorToChange.textContent;





}




