import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result = null;

  if (operation === '+') {
    result = x.plus(y);
  } else if (operation === '-') {
    result = x.minus(y);
  } else if (operation === 'X') {
    result = x.times(y);
  } else if (operation === '÷') {
    result = x.div(y);
  } else if (operation === '%') {
    result = x.div(100);
  }
  return result.toString();
};

export default operate;
