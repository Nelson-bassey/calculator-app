// Get the input field
const display = document.getElementById('display');

// Variables to track input
let currentInput = '';
let total = 0;
let operator = null;
let isNewInput = true;

// Basic math operations
function operate(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return b;
    }
}

// Main button handling
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const value = button.textContent;

        if (!isNaN(value)) {
            if (isNewInput) {
                currentInput = value;
                isNewInput = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput;

        } else if (['+', '-', '*', '/'].includes(value)) {
            if (operator !== null && currentInput !== '') {
                total = operate(operator, total, parseFloat(currentInput));
            } else {
                total = parseFloat(currentInput);
            }
            operator = value;
            isNewInput = true;

        } else if (value === '=') {
            if (operator !== null && currentInput !== '') {
                total = operate(operator, total, parseFloat(currentInput));
                display.value = total;
                currentInput = total.toString();
                operator = null;
                isNewInput = true;
            }

        } else if (value === 'clear') {
            currentInput = '';
            total = 0;
            operator = null;
            isNewInput = true;
            display.value = '';
        }
    });
});
