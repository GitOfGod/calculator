let firstNumber;
let secondNumber;
let operator;
let display = document.querySelector('.display');

function populateDisplay(content) {
    display.textContent = content;
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
        operator.addEventListener('click', () => populateDisplay(operator.textContent));
    })

    //clear event listener
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => populateDisplay(''));

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

function operate(firstNumber, secondNumber, operator) {
    let answer;
    switch(operator) {
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