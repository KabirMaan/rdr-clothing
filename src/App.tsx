import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./layout/Header";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import { auth, createUserProfileDocument } from "./utils/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions";

interface AppProps {
  setCurrentUser: typeof setCurrentUser;
}
class App extends React.Component<AppProps> {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
            // this.setState(
            //   {
            //     currentUser: {
            //       id: snapShot.id,
            //       ...snapShot.data()
            //     }
            //   },
            //   () => console.log(this.state)
            // );
          });
        }
      }

      this.props.setCurrentUser(userAuth);
    });
  }

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
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
