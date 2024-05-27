import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  plain,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  outline,
  ...rest
}) => {
  const classes = twMerge(
    classNames(rest.className, "flex  items-center px-3 py-1.5 border mx-2", {
      "border-gray-600": plain,
      "bg-blue-500 text-white border-blue-600": primary,
      "bg-gray-500 text-white border-gray-600": secondary,
      "bg-green-500 text-white border-green-600": success,
      "bg-red-500 text-white border-red-600": danger,
      "bg-orange-500 text-white border-orange-600": warning,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({
    plain,
    primary,
    secondary,
    success,
    danger,
    warning,
  }) => {
    const count =
      Number(!!plain) +
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);

    if (count > 1) {
      return new Error(`You can pass only one value from plain,
        primary,
        secondary,
        success,
        danger,
        warning, only one can be true`);
    }
  },
};

export default Button;
