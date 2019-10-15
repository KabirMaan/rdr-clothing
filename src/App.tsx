import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
