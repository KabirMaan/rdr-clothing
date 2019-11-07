import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";

import "./Header.scss";
import { auth } from "../../../utils/firebase";
import CartIcon from "../CartIcon";
import CartPreview from "../CartPreview";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/userSelectors";
import { selectCartHidden } from "../../../redux/cart/cartSelectors";
import { currentUser } from "../../../redux/user/userActions";

interface HeaderProps {
  currentUser: currentUser | null;
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({
  currentUser,
  hidden
}): JSX.Element => {
  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartPreview /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
