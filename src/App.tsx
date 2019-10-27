import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./layout/Header";
import LoginPage from "./pages/LoginPage";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import { auth, createUserProfileDocument } from "./utils/firebase";
import { User } from "firebase";
import { connect } from "react-redux";
import { setCurrentUser, currentUser } from "./redux/actions/user/userActions";
import { StoreState } from "./redux/reducers";
import { Dispatch } from "redux";

interface AppProps {
  setCurrentUser: typeof setCurrentUser;
  currentUser: currentUser | null;
}
class App extends React.Component<AppProps> {
  unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      this.getCurrentUser(userAuth);
    });
  }

  getCurrentUser = async (userAuth: User | null) => {
    console.log(userAuth);
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      if (userRef) {
        userRef.onSnapshot(snapShot => {
          const currentUser = {
            id: snapShot.id,
            email: snapShot.data()!.email,
            createdAt: snapShot.data()!.createdAt,
            displayName: snapShot.data()!.displayName
          };

          this.props.setCurrentUser(currentUser);
        });
      }
    }

    this.props.setCurrentUser(null);
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <LoginPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: currentUser | null) => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
