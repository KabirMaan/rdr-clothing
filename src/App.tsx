import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./layout/Header";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
