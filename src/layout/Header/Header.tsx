import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";
import { auth } from "../../utils/firebase";
import { connect } from "react-redux";
interface HeaderProps {
  currentUser: any;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
