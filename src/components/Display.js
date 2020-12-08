import PropTypes from 'prop-types';

const Display = ({ calcResult }) => (
  <div>
    {calcResult }
  </div>
);

Display.defaultProps = {
  calcResult: '0',
};

Display.propTypes = {
  calcResult: PropTypes.string,
};

export default Display;
