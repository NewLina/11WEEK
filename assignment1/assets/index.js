let result = document.querySelector('.result');
let sumOne=document.querySelector('.sum1');
let sumTwo=document.querySelector('.sum2');
let sumThree=document.querySelector('.sum3');
let sumFour=document.querySelector('.sum4');
let button=document.querySelector('.discountButton');

result.textContent = (`${Number(sumOne.innerHTML)+Number(sumTwo.innerHTML)+Number(sumThree.innerHTML)+Number(sumFour.innerHTML)} руб.`);

button.addEventListener('click', makeDiscount); 
function makeDiscount() {
    let countDiscount=(`${Number(sumOne.innerHTML)*20/100+Number(sumTwo.innerHTML)*20/100+Number(sumThree.innerHTML)*20/100+Number(sumFour.innerHTML)*20/100}`);
    result.textContent = (`${Number(sumOne.innerHTML)+Number(sumTwo.innerHTML)+Number(sumThree.innerHTML)+Number(sumFour.innerHTML) - countDiscount} руб.`); 
    button.disabled=true;
}

