

const inputFontSizeEl = document.querySelector('#font-size-control');
const textControlSizeEl = document.querySelector('#text')

textControlSizeEl.style.fontSize = `${(Number(inputFontSizeEl.getAttribute("min")) + Number(inputFontSizeEl.getAttribute("max"))) / 2}px`
// додав начальний fontSize тому що якщо сайт перезагрузити начальний fontSize буде 16 і при 
// пересуванні повзунка fontSize різько збільшується тому я додав два значення і поділив на 2
inputFontSizeEl.addEventListener('input', onInputChangeRange)


function onInputChangeRange(event) {
    textControlSizeEl.style.fontSize = `${event.currentTarget.value}px`;
 
}