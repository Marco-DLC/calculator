function add(arg1, arg2) {
    return arg1 + arg2;
};

function subtract(arg1, arg2) {
    return arg1 - arg2;
};

function multiply(arg1, arg2) {
    return arg1 * arg2;
};

function divide(arg1, arg2) {
    return arg1 / arg2;
};

function operate() {
    if (num2 !== '0' && !display.textContent.includes('=')) {
        let operation = '';

        if (operator === '+') {
            operation = add(+num1, +num2);
        } else if (operator === '-') {
            operation = subtract(+num1, +num2);
        } else if (operator === 'x') {
            operation = multiply(+num1, +num2);
        } else if (operator === '÷') {
            operation = divide(+num1, +num2);
        }
        if (num1 == 0 && num2 == 0 && operator === '÷') {
            display.textContent += `= y tho?`;
        } else {
            display.textContent += `= ${operation}`;
            num1 = operation;
            console.log(operation);
        }
    } else if (display.textContent.includes('=')) {
        display.textContent = '';
        display.textContent = num1 + operator + +num2;
        operate();
    }
}

function updateNums(button) {
    if (display.firstChild === dummyText) {
        display.removeChild(dummyText);
    }
    if (operator === '') {
        num1 += button.textContent;
        display.textContent += button.textContent;

        console.log(num1);
    } else if (operator !== '' &&
        !display.textContent.includes('=')) {
        num2 += button.textContent;
        display.textContent += button.textContent;

        console.log(num2);
    } else if (display.textContent.includes('=')) {
        clearDisplay();
        updateNums(button);
    }
}

function updateOperator(button) {
    if (display.firstChild !== dummyText &&
        operator === '') {
        operator = button.textContent;
        display.textContent += button.textContent;

        console.log(operator);
    } else if (display.textContent.includes('=')) {
        num2 = '0';
        operator = button.textContent;
        display.textContent = num1 + operator;
    }
}

function addDecimal(button) {
    if (!num1.includes('.') ||
        (!num2.includes('.') && operator !== '')) {
        updateNums(button)
    }
}

function clearDisplay() {
    display.textContent = '';
    num1 = '0';
    num2 = '0';
    operator = '';
}

let num1 = '0';
let operator = '';
let num2 = '0';

const display = document.querySelector('#displayOutput');

const dummyText = document.createElement('p');
dummyText.textContent = '0';
display.appendChild(dummyText);

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    if (button.textContent !== 'Clear') {
        button.addEventListener('click', () => {
            
            if (button.classList.contains('number')) {
                if (button.id === "decimal") {
                    return addDecimal(button);
                } else {
                    return updateNums(button);
                }

            } else if (button.classList.contains('operator') &&
                button.id !== 'equals') {
                return updateOperator(button)
                
            } else if (button.id === 'equals') {
                return operate();
            }
        })
    }
});

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    clearDisplay();
    if (display.firstChild !== dummyText) {
        display.appendChild(dummyText);
    }
})
