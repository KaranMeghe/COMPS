import PropTypes from "prop-types";

const Buttons = ({
  children,
  plain,
  primary,
  secondary,
  success,
  danger,
  warning,
  rounded,
  outline,
}) => {
  return <button>{children}</button>;
};

Buttons.propTypes = {
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

export default Buttons;
