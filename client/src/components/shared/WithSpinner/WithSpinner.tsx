import React from "react";

import "./WithSpinner.scss";
interface SpinnerProps {
  isLoading: boolean;
}

interface WithSpinnerProps {}

const WithSpinner = (WrappedComponent: React.ComponentType) => {
  const Spinner: React.FC<SpinnerProps> = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner">
        <div className="spinner__container" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
