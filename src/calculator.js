// Converts inputs to numbers safely
function toNumber(value) {
  return Number(value);
}

export function add(a, b) {
  const fig1 = toNumber(a);
  const fig2 = toNumber(b);
  return fig1 + fig2;
}

export function subtract(a, b) {
  const fig1 = toNumber(a);
  const fig2 = toNumber(b);
  return fig1 - fig2;
}

export function multiply(a, b) {
  const fig1 = toNumber(a);
  const fig2 = toNumber(b);
  return fig1 * fig2;
}

export function divide(a, b) {
  const fig1 = toNumber(a);
  const fig2 = toNumber(b);

  if (fig2 === 0) {
    return "Cannot divide by zero";
  }

  return fig1 / fig2;
}