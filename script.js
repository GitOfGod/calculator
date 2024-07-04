let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let answer;
let displayValue ='';
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');


function initialize() {
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
    answer = 0;
    displayValue = '';
    display.textContent = 0;
}

function populateDisplay(content) {
    displayValue = displayValue + content;
    display.textContent = displayValue;
}

function addEventListeners() {
    //digit event listeners
    let digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.addEventListener('click', () => populateDisplay(digit.textContent));
    })

    //operator event listeners
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if (displayValue !== '') {
                if (firstNumber === 0 || currentOperator === '') {
                    firstNumber = parseInt(displayValue);
                } else if (secondNumber === 0 && currentOperator) {
                    secondNumber = parseInt(displayValue);
                    answer = (operate(firstNumber, secondNumber, currentOperator)).toFixed(4);
                    firstNumber = answer;
                    display.textContent = answer;
                }
                displayValue = '';
                secondNumber = 0;
            }
            currentOperator = operator.textContent;
        });
        
    })

    //equals event listener
    let equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        if (displayValue !== '') {
            secondNumber = parseInt(displayValue);
            answer = (operate(firstNumber, secondNumber, currentOperator)).toFixed(4);
            display.textContent = answer;
            firstNumber = answer;
            displayValue = '';
            secondNumber = 0; // Reset second number
            currentOperator = '';
        }
        
    });

    //clear event listener
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        initialize();
        // console.log('First number: '+firstNumber);
        // console.log('Second number: '+secondNumber);
        // console.log('Current operator: '+currentOperator);
        // console.log('display value: '+displayValue);
        // console.log('answer: ' + answer);
    });
    

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, secondNumber, currentOperator) {
    
    switch(currentOperator) {
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case 'x':
            return multiply(firstNumber, secondNumber);
                break;
        case '÷':
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "Err: Invalid Operator";
    
    }
}

// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);
