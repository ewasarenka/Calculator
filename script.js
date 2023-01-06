
/* FUNCTIONS */
const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => (a - b);
const multiply = (...arr) => arr.reduce((total, number) => { 
    return total * number;
}, 1);
const divide = (a, b) => a / b;
const operate = (operator,num1,num2) => operator(num1,num2);


/* Calculator events */

let numbers = [];
let operators = [];
let i = 0;

const OperationView = document.querySelector('.operations');
const ResultView = document.querySelector('.result');

const Buttons = document.querySelectorAll('button');
Buttons.forEach(btn => {
    
    btn.addEventListener('click', event => {

        if (btn.textContent == '=') {
            let calc = operators.length;
            let result;

            while (operators.indexOf('x')>=0) {
                let j = operators.indexOf('x');
                numbers[j] = operate(multiply,numbers[j],numbers[j+1])
                operators.splice(j,1);
                numbers.splice(j+1,1);
                console.log(operators,numbers);
            }

            while (operators.indexOf('÷')>=0) {
                let j = operators.indexOf('÷');
                numbers[j] = operate(divide,numbers[j],numbers[j+1])
                operators.splice(j,1);
                numbers.splice(j+1,1);
                console.log(operators,numbers);
            }

            while (operators.indexOf('-')>=0) {
                let j = operators.indexOf('-');
                numbers[j] = operate(subtract,numbers[j],numbers[j+1])
                operators.splice(j,1);
                numbers.splice(j+1,1);
                console.log(operators,numbers);
            }

            while (operators.indexOf('+')>=0) {
                let j = operators.indexOf('+');
                numbers[j] = operate(add,numbers[j],numbers[j+1])
                operators.splice(j,1);
                numbers.splice(j+1,1);
                console.log(operators,numbers);
            }
                
            OperationView.textContent = numbers[0];
            ResultView.textContent = numbers[0];
            operators = [];
            i=0;
            
        } else if (btn.className == 'digit') {
            OperationView.textContent += btn.textContent;
            if (numbers[i] == undefined) numbers[i] = ''; 
            numbers[i] += btn.textContent;  

        } else if (btn.className == 'fun') {
            OperationView.textContent += btn.textContent;
            if (operators[i] == undefined) operators[i] = ''; 
            operators[i] = btn.textContent;
            i++  

        } else if (btn.textContent == 'DEL'  ) {
            let string = OperationView.textContent;
            console.log(string.charAt(-1));
            if ( (numbers.length > operators.length && ResultView!='') || (ResultView=='') ) {
                console.log('yes')
                numbers[i].splice(numbers[i].length,1);
            } else {
                console.log("no")
            }
            OperationView.textContent = string.slice(0, -1);
            operators = [];
            i=0;

        } else if (btn.textContent == 'AC'  ) {
            OperationView.textContent = '';
            ResultView.textContent = '';
            numbers = [];
            operators = [];
            i=0;
        }

        console.log(numbers,operators); 

    }) 
});

