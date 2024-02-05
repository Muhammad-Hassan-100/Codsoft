let currentInput = '';
let operator = '';
let result = 0;
let isDarkTheme = false;

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    operator = '';
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    if (currentInput !== '') {
        result = parseFloat(currentInput);
        currentInput = '';
    }
    updateDisplay();
}

function calculate() {
    if (currentInput !== '') {
        let secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                result += secondOperand;
                break;
            case '-':
                result -= secondOperand;
                break;
            case '*':
                result *= secondOperand;
                break;
            case '/':
                result /= secondOperand;
                break;
        }
        currentInput = '';
        operator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput === '' ? result : currentInput;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    isDarkTheme = !isDarkTheme;
}
