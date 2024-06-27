let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let display = document.querySelector('.display');
let displayValue ='';

function populateDisplay(content) {
    displayValue = displayValue + content;
    display.textContent = displayValue;
    //checkCalulationStatus();
}

function addEventListeners() {
    //digit event listeners
    let digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.addEventListener('click', () => populateDisplay(digit.textContent));
    })

    //operator event listeners
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            currentOperator = operator.textContent;
        });
    })

    //clear event listener
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => populateDisplay('0'));

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
    let answer;
    switch(currentOperator) {
        case '+':
            answer = add(firstNumber, secondNumber);
            break;
        case '-':
            answer = subtract(firstNumber, secondNumber);
            break;
        case '*':
            answer = multiply(firstNumber, secondNumber);
                break;
        case '/':
            answer = divide(firstNumber, secondNumber);
            break;
    
    }
    return answer;
}

// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);