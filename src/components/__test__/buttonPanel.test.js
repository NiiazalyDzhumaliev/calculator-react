import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

const handleClick = buttonName => buttonName;

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonPanel clickHandler={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
