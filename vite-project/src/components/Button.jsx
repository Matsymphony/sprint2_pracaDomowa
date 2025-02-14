import PropTypes from 'prop-types';

function Button({ label, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
};

export default Button;
