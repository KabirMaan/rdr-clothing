import React from "react";

import Spinner from "../Spinner";
interface SpinnerProps {
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: React.ComponentType) => {
  const Component: React.FC<SpinnerProps> = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
  return Component;
};

export default WithSpinner;
