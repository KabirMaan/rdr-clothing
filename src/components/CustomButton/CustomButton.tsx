import React from "react";
import classNames from "classnames";
import "./CustomButton.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames({
      "custom-button": true,
      "google-sign-in": isGoogleSignIn
    })}
  >
    {children}
  </button>
);

CustomButton.defaultProps = {
  type: "button"
};

export default CustomButton;
