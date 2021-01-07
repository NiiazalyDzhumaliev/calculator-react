import React, { useState } from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Home from './Home';
import Quote from './Quote';
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
    <BrowserRouter>
      <div className="navbar">
        <h1>Math Magicians</h1>
        <nav>
          <ul className="navigation">
            <li className="nav-item">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="app">
        <Switch>
          <Route path="/calculator">
            <div className="calculator">
              <Display calcResult={result || undefined} />
              <ButtonPanel clickHandler={handleClick} />
            </div>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
