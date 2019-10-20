import React from "react";
import classNames from "classnames";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: any) => (
  <button
    // className="custom-button"
    {...otherProps}
    className={classNames({
      "custom-button": true,
      "google-sign-in": isGoogleSignIn
    })}
  >
    {children}
  </button>
);

export default CustomButton;
