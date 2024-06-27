let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let answer;
let displayValue ='';
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');



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
    operators.forEach(operator => {
        operator.addEventListener('click', () => checkCalulationStatus(operator));
    })
    
    function checkCalulationStatus(operator) {
        let test;
        currentOperator = operator.textContent;
        if(firstNumber == 0) {
            firstNumber = parseInt(displayValue);
        } else if(secondNumber == 0) {
            secondNumber = parseInt(displayValue); 
        } else {
            test = operate(firstNumber,secondNumber,currentOperator);
        }
        //console.log(test);
        displayValue = '';
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(currentOperator);
    }

    //equals event listener
    let equals = document.querySelector('#equals');
    equals.addEventListener('click', () => operate());

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
        default:
            //need to alert users somehow
            //alert("Error: Invalid Operator");
    
    }

    return answer;
}

// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);