/*      FUNCTIONS       */
const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => (a - b);
const multiply = (...arr) => arr.reduce((total, number) => { 
    return total * number;
}, 1);
const divide = (a, b) => a / b;
const changeNumSign = (a) => {
    return (
        a === '-'? '':
        a === '' || a === undefined? '-':
        String(-Number(a)));
}

const operate = (operator,num1,num2) => operator(num1,num2);
const calculations = (sign,op) => {
    while (operators.indexOf(sign)>=0) {
        let j = operators.indexOf(sign);
        numbers[j] = operate(op,numbers[j],numbers[j+1])
        operators.splice(j,1);
        numbers.splice(j+1,1);
    }
}

const display = () => {
    let view = '';
    if (operators == undefined) {
        view = numbers[0];
    } else {
        for (let i = 0; i < operators.length; i++) view += numbers[i] + operators[i];
        if (numbers.length > operators.length) view += numbers[i];
    }
    OperationView.textContent = view;
}

/*      Calculator events       */

let numbers = [];
let operators = [];
let i = 0;

const OperationView = document.querySelector('.operations');
const ResultView = document.querySelector('.result');
const Buttons = document.querySelectorAll('button');
Buttons.forEach(btn => {
    
    btn.addEventListener('click', event => {

        if (btn.className == 'digit') {
            if (numbers[i] == undefined) numbers[i] = ''; 
            numbers[i] += btn.textContent;  
            display()

        } else if (btn.className == 'fun') {
            if (numbers.length == operators.length) {
                operators[i-1] = btn.textContent;
            } else {
                operators[i] = btn.textContent;
                i++;
            }
            display();

        } else if (btn.className == 'sign') {
            numbers[i] = changeNumSign(numbers[i]);
            display();

        } else if (btn.textContent == 'AC'  ) {
            OperationView.textContent = '';
            ResultView.textContent = '';
            numbers = [];
            operators = [];
            i=0;
        }
        
        // NEED FIX
        else if (btn.textContent == 'DEL'  ) {
            if (numbers.length > operators.length && numbers[i] != '') {
                numbers[i] = numbers[i].slice(0,numbers[i].length-1)
            } else {
                operators.pop();
                numbers.pop();
                i--;
                console.log("no");
            }
            display();
            
        // Calculations
        } else if (btn.textContent == '=') {
            
            if (numbers.length == operators.length) operators.splice(i-1,1);

            calculations('&#215',multiply);
            calculations('÷',divide);
            calculations('-',subtract);
            calculations('+',add);
            numbers[0] = Math.round(numbers[0]*Math.pow(10,9))/Math.pow(10,9);
            ResultView.textContent = numbers[0];
            operators = [];
            i=0;
            display();                  
        } 

        // console.log(numbers,operators); 

    }) 
});

