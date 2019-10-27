import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";
import { auth } from "../../utils/firebase";
import CartIcon from "../../components/CartIcon";
import CartPreview from "../../components/CartPreview";
import { connect } from "react-redux";
import { StoreState } from "../../redux/reducers";
import { currentUser } from "../../redux/actions";

interface HeaderProps {
  currentUser: currentUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }): JSX.Element => {
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
      <CartPreview />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
