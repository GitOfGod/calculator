let firstNumber;
let secondNumber;
let operator;

function addEventListeners() {
    //digit event listeners
    let digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        addEventListener('click', populateDisplay(digit));
    })

    //operator event listeners
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        addEventListener('click', populateDisplay(operator));
    })

    //clear event listener
    let clear = document.querySelector('.clear');
    addEventListener('click', populateDisplay(operator));

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
