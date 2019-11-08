import React from "react";
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

interface AppProps {
  // setCurrentUser: typeof setCurrentUser;
  currentUser: currentUser | null;
  checkUserSession: any;
  // collectionsArray: any;
}
class App extends React.Component<AppProps> {
  // unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // getCurrentUser = async (userAuth: User | null) => {
  //   console.log(userAuth);
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     if (userRef) {
  //       userRef.onSnapshot(snapShot => {
  //         console.log(snapShot);
  //         console.log(snapShot.data());
  //         const currentUser = {
  //           id: snapShot.id,
  //           email: snapShot.data()!.email,
  //           createdAt: snapShot.data()!.createdAt,
  //           displayName: snapShot.data()!.displayName
  //         };

  //         this.props.setCurrentUser(currentUser);
  //       });
  //     }
  //   }

  //   this.props.setCurrentUser(null);
  //   // addCollectionAndDocuments(
  //   //   "collections",
  //   //   this.props.collectionsArray.map(({ title, items }: any) => ({
  //   //     title,
  //   //     items
  //   //   }))
  //   // );
  // };

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
