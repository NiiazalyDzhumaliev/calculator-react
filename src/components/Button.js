import PropTypes from 'prop-types';

const Button = props => {
  const { name, color } = props;
  const handleClick = e => props.clickHandler(e.target.innerText);
  let needColor = color;
  const orangeArr = ['/', 'X', '-', '+', '='];
  const colorPicker = colorName => {
    if (orangeArr.includes(colorName)) {
      needColor = '#e8813c';
    }
    return needColor;
  };

  let needWidth = '25%';

  const widthPicker = widthName => {
    if (widthName === '0') {
      needWidth = '50%';
    }
    return needWidth;
  };
  const buttonStyle = {
    backgroundColor: colorPicker(name),
    width: widthPicker(name),
  };
  return (
    <button
      type="button"
      className="button"
      onClick={handleClick}
      style={buttonStyle}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: '#e0e0e0',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
