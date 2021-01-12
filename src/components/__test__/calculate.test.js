import calculate from '../../logic/calculate';

test('+/- button on initial', () => {
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

test('+/- button on total', () => {
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

test('number buttons', () => {
  const button = '5';
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  expect(calculate(obj, button)).toEqual({
    total: null,
    next: '5',
    operation: null,
  });
});
