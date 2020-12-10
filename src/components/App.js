import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calculate';

const App = () => (
  <div>
    <Display />
    <ButtonPanel name={calculate} />
  </div>
);

export default App;
