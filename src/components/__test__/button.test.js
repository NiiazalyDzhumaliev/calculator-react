import renderer from 'react-test-renderer';
import Button from '../Button';

const button = '+';
const handleClick = buttonName => buttonName;

it('renders correctly', () => {
  const tree = renderer
    .create(<Button name={button} clickHandler={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
