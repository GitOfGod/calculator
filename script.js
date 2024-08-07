let firstNumber = 0;
let secondNumber = 0;
let currentOperator;
let answer;
let displayValue ='';
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let decimal = document.querySelector('#decimal');

function initialize() {
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = '';
    answer = 0;
    displayValue = '';
    display.textContent = 0;
    decimal.addEventListener('click', handleDecimalClick);
}

function handleDecimalClick() {
    populateDisplay('.');
}

function populateDisplay(content) {
    if(content == ".") {
        decimal.removeEventListener('click', handleDecimalClick)
    }
    displayValue = displayValue + content;
    display.textContent = displayValue;
}

function addEventListeners() {
    //digit event listeners
    let digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.addEventListener('click', () => populateDisplay(digit.textContent));
    })

    //decimal event listener
    decimal.addEventListener('click', handleDecimalClick);

    //operator event listeners
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if (displayValue !== '') {
                if (firstNumber === 0 || currentOperator === '') {
                    firstNumber = parseFloat(displayValue);
                } else if (secondNumber === 0 && currentOperator) {
                    secondNumber = parseFloat(displayValue);
                    answer = operate(firstNumber, secondNumber, currentOperator);
                    firstNumber = answer;
                    display.textContent = answer;
                }
                displayValue = '';
                secondNumber = 0;
            }
            currentOperator = operator.textContent;
            decimal.addEventListener('click', handleDecimalClick);
        });
        
    })

    //equals event listener
    let equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        if (displayValue !== '') {
            secondNumber = parseFloat(displayValue);
            answer = operate(firstNumber, secondNumber, currentOperator);
            display.textContent = answer;
            firstNumber = answer; 
            displayValue = '';
            secondNumber = 0; // Reset second number
            currentOperator = '';
        }
        decimal.addEventListener('click', handleDecimalClick); 
    });

    let backspace = document.querySelector('.delete');
    backspace.addEventListener('click', () => {
        display.textContent = 0; 
        displayValue = '';
        decimal.addEventListener('click', handleDecimalClick);
    })

    //clear event listener
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        initialize();
    });
    //Keyboard event listener for number keys
    document.addEventListener('keydown', handleKeyDown);

}

function handleKeyDown(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        populateDisplay(key);
    } else if (key === '.') {
        handleDecimalClick();
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
    let temp
    switch(currentOperator) {
        case '+':
            temp = add(firstNumber, secondNumber);
            break;
        case '-':
            temp = subtract(firstNumber, secondNumber);
            break;
        case 'x':
            temp = multiply(firstNumber, secondNumber);
                break;
        case '÷':
            if (secondNumber !== 0) {
               temp = divide(firstNumber, secondNumber);
            } else {
                alert("You cannot divide by 0. DO BETTER!")
            }            
            break;
        default:
            return "Err: Invalid Operator";
    }
    answer = Math.round(temp * 100000)/100000;
    return answer;
}


// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);
