import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const { total, next, operation } = state;
    setState(calculate({ total, next, operation }, buttonName));
  };

  const { total, next, operation } = state;
  let result = total || next;

  if (total && next && operation) {
    result = `${total} ${operation} ${next}`;
  } else if (total && operation) {
    result = `${total} ${operation}`;
  }

  return (
    <div className="app">
      <div className="calculator">
        <Display calcResult={result || undefined} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
