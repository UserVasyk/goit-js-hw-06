
const inputEl = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');





inputEl.addEventListener("input", onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    userName.textContent = event.currentTarget.value;
    if (userName.textContent === '' ) {
        userName.textContent = 'Anonymous';
    }
}