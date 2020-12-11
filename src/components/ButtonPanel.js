import Button from './Button';

const { v4: UuidV4 } = require('uuid');

const buttonGroups = {
  groupOne: {
    id: 1,
    group: ['AC', '+/-', '%', '÷'],
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

const ButtonPanel = () => (
  <>
    <div className="groupOne">
      {buttonGroups.groupOne.group.map(button => (
        <Button name={button} key={UuidV4()} />
      ))}
    </div>

    <div className="groupTwo">
      {buttonGroups.groupTwo.group.map(button => (
        <Button name={button} key={UuidV4()} />
      ))}
    </div>

    <div className="groupThree">
      {buttonGroups.groupThree.group.map(button => (
        <Button name={button} key={UuidV4()} />
      ))}
    </div>

    <div className="groupFour">
      {buttonGroups.groupFour.group.map(button => (
        <Button name={button} key={UuidV4()} />
      ))}
    </div>

    <div className="groupFive">
      {buttonGroups.groupFive.group.map(button => (
        <Button name={button} key={UuidV4()} />
      ))}
    </div>
  </>
);

export default ButtonPanel;
