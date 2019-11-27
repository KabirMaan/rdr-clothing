import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { store, persistor } from "./redux/store";
import ProviderWrapper from "./ProviderWrapper";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <ProviderWrapper store={store}>
    <PersistGate persistor={persistor}>
      <App></App>
    </PersistGate>
  </ProviderWrapper>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
