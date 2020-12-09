import Button from './Button';

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
        <Button name={button} key={buttonGroups.groupOne.id} />
      ))}
    </div>

    <div className="groupTwo">
      {buttonGroups.groupTwo.group.map(button => (
        <Button name={button} key={buttonGroups.groupTwo.id} />
      ))}
    </div>

    <div className="groupThree">
      {buttonGroups.groupThree.group.map(button => (
        <Button name={button} key={buttonGroups.groupThree.id} />
      ))}
    </div>

    <div className="groupFour">
      {buttonGroups.groupFour.group.map(button => (
        <Button name={button} key={buttonGroups.groupFour.id} />
      ))}
    </div>

    <div className="groupFive">
      {buttonGroups.groupFive.group.map(button => (
        <Button name={button} key={buttonGroups.groupFive.id} />
      ))}
    </div>
  </>
);

export default ButtonPanel;
