import PropTypes from "prop-types";

function Button({ text }) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button; // App.js에서 Button을 가져올 수 있게 하기 위해서
