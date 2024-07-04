let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let answer;
let displayValue ='';
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');

/*fix why when you click an operator, it doesnt remove the current display
fixed the above problem but only works for first calculation, once AC is pressed
same problem reoccurs */



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
        display.textContent = 0;
        initialize();
        firstNumber = 0;
        console.log('First number: '+firstNumber);
        console.log('Second number: '+secondNumber);
        console.log('Current operator: '+currentOperator);
        console.log('display value: '+displayValue);
        console.log('answer: ' + answer);
    
    });

}

function checkCalulationStatus(operator) {
    currentOperator = operator;
    if(firstNumber === 0) {
        firstNumber = parseInt(displayValue);
        displayValue = '';
        
    } else if(secondNumber === 0) {
        secondNumber = parseInt(displayValue); 
        display.textContent = secondNumber;
    } else {
        operate(firstNumber,secondNumber,currentOperator);
        console.log('First number: '+firstNumber);
        console.log('Second number: '+secondNumber);
        console.log('Current operator: '+currentOperator);
        console.log('display value: '+displayValue);
        console.log('answer: ' + answer);
    
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
