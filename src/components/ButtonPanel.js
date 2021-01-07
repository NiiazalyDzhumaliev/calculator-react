import propTypes from 'prop-types';
import Button from './Button';

const { v4: UuidV4 } = require('uuid');

const buttonGroups = {
  groupOne: {
    id: 1,
    group: ['AC', '+/-', '%', '/'],
  },

  groupTwo: {
    id: 2,
    group: ['7', '8', '9', 'X'],
  },

  groupThree: {
    id: 3,
    group: ['4', '5', '6', '-'],
  },

  groupFour: {
    id: 4,
    group: ['1', '2', '3', '+'],
  },

  groupFive: {
    id: 5,
    group: ['0', '.', '='],
  },
};

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);
  return (
    <>
      <div className="groupOne button-group">
        {buttonGroups.groupOne.group.map(button => (
          <Button name={button} key={UuidV4()} clickHandler={handleClick} />
        ))}
      </div>

      <div className="groupTwo button-group">
        {buttonGroups.groupTwo.group.map(button => (
          <Button name={button} key={UuidV4()} clickHandler={handleClick} />
        ))}
      </div>

      <div className="groupThree button-group">
        {buttonGroups.groupThree.group.map(button => (
          <Button name={button} key={UuidV4()} clickHandler={handleClick} />
        ))}
      </div>

      <div className="groupFour button-group">
        {buttonGroups.groupFour.group.map(button => (
          <Button name={button} key={UuidV4()} clickHandler={handleClick} />
        ))}
      </div>

      <div className="groupFive button-group">
        {buttonGroups.groupFive.group.map(button => (
          <Button name={button} key={UuidV4()} clickHandler={handleClick} />
        ))}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

export default ButtonPanel;
