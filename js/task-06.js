

const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener("blur", onInputCheck)

function onInputCheck(event) {
    
    const lengthOfInput = event.currentTarget.value.length;

    if (Number(inputEl.getAttribute("data-length"))   !== lengthOfInput) {
      
              
     inputEl.classList.add('invalid'); 
     inputEl.classList.remove('valid'); 

    } else {

     inputEl.classList.add('valid');
     inputEl.classList.remove('invalid');
    }
}