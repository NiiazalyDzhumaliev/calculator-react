import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  const handleClick = e => props.clickHandler(e.target.innerText);
  return (
    <button type="button" className="button" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
