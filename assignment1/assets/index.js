let result = document.querySelector('.result');
let sumOne=document.querySelector('.sum1');
let sumTwo=document.querySelector('.sum2');
let sumThree=document.querySelector('.sum3');
let sumFour=document.querySelector('.sum4');
let button=document.querySelector('.discountButton');

result.textContent = (`${+(sumOne.innerHTML)+ +(sumTwo.innerHTML) + +(sumThree.innerHTML) + +(sumFour.innerHTML)} руб.`);

button.addEventListener('click', makeDiscount); 
function makeDiscount() {
    let countDiscount=(`${+(sumOne.innerHTML)*20/100 + +(sumTwo.innerHTML)*20/100 + +(sumThree.innerHTML)*20/100 + +(sumFour.innerHTML)*20/100}`);
    result.textContent = (`${+(sumOne.innerHTML) + +(sumTwo.innerHTML)+ +(sumThree.innerHTML)+ +(sumFour.innerHTML) - countDiscount} руб.`); 
    button.disabled=true;
    button.style.cursor="default";
}

