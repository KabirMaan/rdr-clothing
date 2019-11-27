import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./Header.scss";
import CartIcon from "../CartIcon";
import { currentUser, signOutStart } from "../../../redux/user/userActions";
import CartPreviewContainer from "../CartPreviewContainer";
import CartIconContainer from "../CartIconContainer";

interface HeaderProps {
  currentUser: currentUser | null;
  hidden: boolean;
  signOutStart: typeof signOutStart;
}

const Header: React.FC<HeaderProps> = ({
  currentUser,
  hidden,
  signOutStart
}): JSX.Element => {
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
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CartIconContainer />
      </div>
      {!hidden ? <CartPreviewContainer /> : null}
    </div>
  );
};

export default Header;
