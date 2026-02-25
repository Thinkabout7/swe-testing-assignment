import { add, subtract, multiply, divide } from "./calculator.js";

let expression = "";
const operators = ["+", "-", "*", "/"];

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function updateDisplay(value) {
  display.value = value;
}

function isOperator(char) {
  return operators.includes(char);
}

function hasOperation(expr) {
  const normalized = expr.startsWith("-") ? expr.slice(1) : expr;
  return /[\+\-\*\/]/.test(normalized);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // DELETE (⌫)
    if (button.classList.contains("delete")) {
      expression = expression.slice(0, -1);

      if (expression === "") {
        updateDisplay("0");
      } else {
        updateDisplay(expression);
      }

      return;
    }

    // CLEAR (C)
    if (button.classList.contains("clear")) {
      expression = "";
      updateDisplay("0");
      return;
    }

    // EQUALS (=)
    if (value === "=") {
      try {
        const result = evaluateExpression(expression);
        const formatted = formatResult(result);

        updateDisplay(formatted);
        expression = formatted.toString();
      } catch (error) {
        updateDisplay("Error");
        expression = "";
      }
      return;
    }

    // OPERATORS (+, -, *, /)
    if (isOperator(value)) {
      if (expression === "") {
        // allow starting a negative number only
        if (value === "-") {
          expression = "-";
          updateDisplay(expression);
        }
        return;
      }

      const lastChar = expression[expression.length - 1];

      // block consecutive operators (e.g., 4++)
      if (isOperator(lastChar)) {
        return;
      }

      // only allow one operation in this simple calculator (e.g., block 4+2+)
      if (hasOperation(expression)) {
        return;
      }

      expression += value;
      updateDisplay(expression);
      return;
    }

    // DECIMAL (.)
    if (value === ".") {
      const parts = expression.split(/[\+\-\*\/]/);
      const currentNumber = parts[parts.length - 1];

      // Prevent multiple dots
      if (currentNumber.includes(".")) return;

      // If first character of number
      if (currentNumber === "" || currentNumber === undefined) {
        expression += "0.";
      } else {
        expression += ".";
      }

      updateDisplay(expression);
      return;
    }

    // Default: append value
    expression += value;
    updateDisplay(expression);
  });
});

function evaluateExpression(expr) {
  // Single number case
  if (!expr.includes("+") &&
      !expr.includes("-") &&
      !expr.includes("*") &&
      !expr.includes("/")) {
    return Number(expr);
  }

  const match = expr.match(/^(-?\d+\.?\d*)([\+\-\*\/])(-?\d+\.?\d*)$/);

  if (!match) {
    throw new Error("Invalid Expression");
  }

  const a = Number(match[1]);
  const operator = match[2];
  const b = Number(match[3]);

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
}

// FORMAT DECIMALS
function formatResult(value) {
  if (typeof value !== "number") return value;

  if (Number.isInteger(value)) return value;

  return parseFloat(value.toFixed(8));
}
