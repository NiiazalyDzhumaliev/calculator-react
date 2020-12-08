import PropTypes from 'prop-types';

function Display({ calcResult }) {
  return (
    <div>
      {calcResult || '0'}
    </div>
  );
}

Display.propTypes = {
  calcResult: PropTypes.string.isRequired,
};

export default Display;
