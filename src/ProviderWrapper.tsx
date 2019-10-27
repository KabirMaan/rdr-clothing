import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

interface ProviderWrapperProps {
  store: Store;
}
const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
  store
}) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export default ProviderWrapper;
