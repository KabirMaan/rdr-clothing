import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./layout/Header";
import LoginPage from "./pages/LoginPage";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if (userAuth) {
        createUserProfileDocument(userAuth);

      //   userRef.onSnapshot(snapShot => {
      //     this.setState({
      //       currentUser: {
      //         id: snapShot.id,
      //         ...snapShot.data()
      //       }
      //     });

      //     console.log(this.state);
      //   });
      // }

      this.setState({ currentUser: userAuth }, () => console.log(this.state));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
