import operate from './operate';

const calculate = (calcObject, buttonName) => {
  let { total, next, operation } = calcObject;
  const operands = ['+', '-', 'X', '%', '÷'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '=') {
    total = operate(total, next, buttonName);
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    if (next) {
      next *= (-1);
    } else {
      total *= (-1);
    }
  }

  if (operands.includes(buttonName)) {
    total = operate(total, next, buttonName);
  }

  if (buttonName === '.') {
    next = `${next}.`;
  }
  return { total, next, operation };
};

export default calculate;
