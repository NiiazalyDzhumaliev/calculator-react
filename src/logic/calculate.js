import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operands = ['+', 'X', '-', '/'];
  if (buttonName === '+/-' && next) {
    return {
      total,
      next: (parseFloat(next) * -1).toString(),
      operation,
    };
  }
  if (buttonName === '+/-' && !next && total) {
    return {
      total: (parseFloat(total) * -1).toString(),
      next,
      operation,
    };
  }

  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '.' && next && !next.includes('.')) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (operands.includes(buttonName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (operands.includes(buttonName) && !next && total) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (operands.includes(buttonName) && next && total) {
    return {
      total: operate(parseFloat(total), parseFloat(next), buttonName).toString(),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName === '%' && next && total) {
    return {
      total,
      next: operate(parseFloat(next), 100, '/').toString(),
      operation,
    };
  }

  if (buttonName === '%' && next && !total) {
    return {
      total: operate(parseFloat(next), 100, '/').toString(),
      next: null,
      operation: null,
    };
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=' && next && total) {
    return {
      total: operate(parseFloat(total), parseFloat(next), operation).toString(),
      next: null,
      operation: null,
    };
  }
  return { total, next, operation };
};

export default calculate;
