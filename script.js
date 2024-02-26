const add = function (arg1, arg2) {
    return arg1 + arg2;
};

const subtract = function (arg1, arg2) {
    return arg1 - arg2;
};

const multiply = function (arg1, arg2) {
    return arg1 * arg2;
};

const divide = function (arg1, arg2) {
    return arg1 / arg2;
};

let num1 = 0;
let num2 = 0;

// Division character for copy and pasting: ÷
let operator = '÷';

const operate = function () {
    let operation = '';

    if (operator === '+') {
        operation = add(num1, num2);
    } else if (operator === '-') {
        operation = subtract(num1, num2);
    } else if (operator === 'x') {
        operation = multiply(num1, num2);
    } else if (operator === '÷') {
        operation = divide(num1, num2);
    }

    return `${num1} ${operator} ${num2} = ${operation}`;
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    if (button.textContent !== 'Clear') {
        button.addEventListener('click', () => {
            return button.textContent;
        })
    }
});