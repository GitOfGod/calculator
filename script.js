let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let answer;
let displayValue ='';
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');

function initialize() {
    secondNumber = 0;
    currentOperator = '';
    answer = 0;
    displayValue = '';
}

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
        operator.addEventListener('click', () => checkCalulationStatus(operator.textContent));
    })

    //equals event listener
    let equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        secondNumber = parseInt(displayValue);
        operate(firstNumber, secondNumber,currentOperator)
    });

    //clear event listener
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        populateDisplay('0');
        initialize();
    });

}

function checkCalulationStatus(operator) {
    currentOperator = operator;
    if(firstNumber === 0) {
        firstNumber = parseInt(displayValue);
        displayValue = '';
    } else if(secondNumber === 0) {
        secondNumber = parseInt(displayValue); 
    } else {
        displayValue = '';
        console.log(`First Number: ${firstNumber}`);
        console.log(`Second Number: ${secondNumber}`);
        console.log(`Current Operator: ${currentOperator}`);
        operate(firstNumber,secondNumber,currentOperator);
    }
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
        case 'x':
            answer = multiply(firstNumber, secondNumber);
                break;
        case '÷':
            answer = divide(firstNumber, secondNumber);
            break;
        default:
            //need to alert users somehow
            //alert("Error: Invalid Operator");
            //answer = "Err: Invalid Operator";
            console.log("Err: Invalid Operator");
    
    }
    display.textContent = answer;
    initialize();

}

// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);