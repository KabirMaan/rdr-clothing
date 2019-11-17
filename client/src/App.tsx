import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import { currentUser, checkUserSession } from "./redux/user/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelectors";
import CheckoutPage from "./pages/CheckoutPage";
import { Dispatch } from "redux";

interface AppProps {
  // setCurrentUser: typeof setCurrentUser;
  currentUser: currentUser | null;
  checkUserSession: typeof checkUserSession;
  // collectionsArray: any;
}

const App: React.FC<AppProps> = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/"></Redirect> : <LoginPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
