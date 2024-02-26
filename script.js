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
let operator = '';

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

let userSelectedKey = '';
const display = document.querySelector('#displayOutput');

const dummyText = document.createElement('p')
dummyText.textContent = '0'

display.appendChild(dummyText);

buttons.forEach((button) => {
    if (button.textContent !== 'Clear') {
        button.addEventListener('click', () => {
            if (display.firstChild === dummyText) {
                display.removeChild(dummyText);
            };

            userSelectedKey = button.textContent;

            display.textContent += userSelectedKey;
        })
    }
});

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    if (display.firstChild !== dummyText) {
        display.appendChild(dummyText);
    }
})