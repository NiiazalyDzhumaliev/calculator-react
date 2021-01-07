import PropTypes from 'prop-types';

const Button = props => {
  const { name, color } = props;
  const handleClick = e => props.clickHandler(e.target.innerText);
  return (
    <button
      type="button"
      className="button"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
