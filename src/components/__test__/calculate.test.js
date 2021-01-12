import calculate from '../../logic/calculate';

test('+/- button', () => {
  const button = '+/-';
  const obj = {
    total: null,
    next: 5,
    operation: null,
  };
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: '-5',
    operation: null,
  });
});

test('+/- button', () => {
  const button = '+/-';
  const obj = {
    total: 5,
    next: null,
    operation: null,
  };
  expect(calculate(obj, button)).toEqual({
    total: '-5',
    next: null,
    operation: null,
  });
});
