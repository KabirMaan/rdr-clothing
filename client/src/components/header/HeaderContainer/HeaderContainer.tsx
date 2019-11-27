import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/userSelectors";
import { selectCartHidden } from "../../../redux/cart/cartSelectors";
import { currentUser, signOutStart } from "../../../redux/user/userActions";
import { Dispatch } from "redux";
import Header from "../Header";

interface HeaderContainerProps {
  currentUser: currentUser | null;
  hidden: boolean;
  signOutStart: typeof signOutStart;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  currentUser,
  hidden,
  signOutStart
}): JSX.Element => {
  return (
    <Header
      currentUser={currentUser}
      hidden={hidden}
      signOutStart={signOutStart}
    />
    // <div className="header">
    //   <Link className="logo-container" to="/">
    //     <Logo className="logo" />
    //   </Link>
    //   <div className="options">
    //     <Link className="option" to="/shop">
    //       SHOP
    //     </Link>
    //     <Link className="option" to="/shop">
    //       CONTACT
    //     </Link>
    //     {currentUser ? (
    //       <div className="option" onClick={signOutStart}>
    //         SIGN OUT
    //       </div>
    //     ) : (
    //       <Link className="option" to="/login">
    //         SIGN IN
    //       </Link>
    //     )}
    //     <CartIcon />
    //   </div>
    //   {!hidden ? <CartPreviewContainer /> : null}
    // </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
