// Selecting elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('input');

let currentInput = '';
let previousInput = '';
let operator = '';
let result = '';
console.log("hello");
// Adding event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === 'AC') { 
            // Clear everything
            currentInput = '';
            previousInput = '';
            operator = '';
            result = '';
            display.value = '0';
        } else if (buttonValue === 'DEL') {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || '0';

        } else if (buttonValue === '=' && operator) {
            // Calculate the result using if-else statements
            previousInput = parseFloat(previousInput);
            currentInput = parseFloat(currentInput);

            if (operator === '+') {
                result = previousInput + currentInput;
            } else if (operator === '-') {
                result = previousInput - currentInput;
            } else if (operator === '*') {
                result = previousInput * currentInput;
            } else if (operator === '/') {
                result = previousInput / currentInput;
            } else if (operator === '%') {
                result = previousInput % currentInput;
            }

            display.value = result;
            currentInput = result;
            operator = '';

        } else if ('+-*/%'.includes(buttonValue)) {
            // Set the operator and store the previous input
            operator = buttonValue;
            previousInput = currentInput;
            currentInput = '';
            
        } else {
            // Append the number or dot to the current input
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});
