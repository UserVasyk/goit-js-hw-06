

const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        console.log("Всі поля повинні бути заповнені!");
        return alert('Всі поля повинні бути заповнені!');
       
    }
    console.log("Email:", formElements.email.value)
    console.log("Password:", formElements.password.value);
  
    
event.currentTarget.reset();
}

