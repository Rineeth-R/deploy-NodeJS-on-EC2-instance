let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += ' ' + operator + ' ';
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString(); // Evaluates the expression
  } catch (e) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);  // Remove the last character
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
