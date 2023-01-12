let input=document.querySelector('.input__number');
let result=document.querySelector('.input__result');
let button=document.querySelector('.form__button');

result.disabled=true;

button.addEventListener('click', makeResult); 
function makeResult() {
    result.value= document.getElementById('inputOne').value**2;
}

button.addEventListener('click', function (evt) {
evt.preventDefault();
});