import Button from './Button';

function ButtonPanel() {
  return (
    <div className="btn-panel">
      <div className="group-one">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div className="group-two">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div className="group-three">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className="group-four">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="group-five">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
