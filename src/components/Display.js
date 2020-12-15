import PropTypes from 'prop-types';

const Display = props => {
  const { calcResult } = props;

  return (
    <div className="calc-result">
      {calcResult}
    </div>
  );
};

Display.defaultProps = {
  calcResult: '0',
};

Display.propTypes = {
  calcResult: PropTypes.string,
};

export default Display;
