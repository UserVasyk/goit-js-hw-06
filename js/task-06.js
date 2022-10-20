

const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener("blur", onInputCheck)

function onInputCheck(event) {
    
    const lengthOfInput = event.currentTarget.value.length;

    if (Number(inputEl.getAttribute("data-length"))   !== lengthOfInput) {
      
              
     inputEl.classList.add('invalid'); 
     inputEl.classList.replace('valid', 'invalid'); 

    } else {

     inputEl.classList.add('valid');
     inputEl.classList.replace('invalid', 'valid');
    }
}