let currentInput = '';

function addNumber(num) {
  currentInput += num;
  updateDisplay();
}

function addOperator(op) {
  if (currentInput !== '' && !/[+\-*/]$/.test(currentInput)) {
    currentInput += op;
    updateDisplay();
  }
}

function percent() {
  try {
    const match = currentInput.match(/(\d+(?:\.\d+)?)([\+\-\*\/])(\d+(?:\.\d+)?)$/);
    if (match) {
      const num1 = parseFloat(match[1]);
      const op = match[2];
      const num2 = parseFloat(match[3]);
      const percentValue = (num1 * num2) / 100;
      currentInput = currentInput.replace(/(\d+(?:\.\d+)?)([\+\-\*\/])(\d+(?:\.\d+)?)$/, num1 + op + percentValue);
    } else {
      // Caso não encontre padrão, divide o número direto
      currentInput = String(eval(currentInput) / 100);
    }
    updateDisplay();
  } catch (e) {
    currentInput = 'Erro';
    updateDisplay();
  }
}

function calculate() {
  try {
    currentInput = String(eval(currentInput));
    updateDisplay();
  } catch (e) {
    currentInput = 'Erro';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').textContent = currentInput || '0';
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function addDot() {
  // Evita múltiplos pontos em um mesmo número
  const partes = currentInput.split(/[\+\-\*\/]/);
  const ultimo = partes[partes.length - 1];
  if (!ultimo.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

let abreParenteses = true;
function addParenthesis() {
  currentInput += abreParenteses ? '(' : ')';
  abreParenteses = !abreParenteses;
  updateDisplay();
}

function clearAll() {
  currentInput = '';
  updateDisplay();
}
