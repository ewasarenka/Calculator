const add = (a, b) => a + b;

const subtract = (a, b) => (a - b);


const multiply = (...arr) => arr.reduce((total, number) => {
    return total * number;
}, 1);

const divide = (a, b) => a / b;

const sum = (...arr) => arr.reduce((total, number) => {
    return total + number;
}, 0);

const operate = (operator,num1,num2) => operator(num1,num2);

let input = '';

const OperationView = document.querySelector('.operations');
const ResultView = document.querySelector('.result');
const Digits = document.querySelectorAll('.digit');

Digits.forEach(digit => {
    digit.addEventListener('click', event => {
      input +=digit.textContent;
      OperationView.textContent = input;
    })

});
