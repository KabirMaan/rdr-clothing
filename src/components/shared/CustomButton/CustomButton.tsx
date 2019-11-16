import React from "react";
import classNames from "classnames";
import "./CustomButton.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
  invertedColors?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  invertedColors,
  ...otherProps
}): JSX.Element => (
  <button
    {...otherProps}
    className={classNames({
      "custom-button": true,
      "google-sign-in": isGoogleSignIn,
      "inverted-colors": invertedColors
    })}
  >
    {children}
  </button>
);

CustomButton.defaultProps = {
  type: "button"
};

export default CustomButton;
