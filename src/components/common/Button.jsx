import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ className, label, type, onclick, disabled }) => {
  return (
    <button className={twMerge("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", className)} type={type} onClick={onclick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
