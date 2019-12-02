import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./Header.scss";

import { currentUser } from "../../../redux/user/userActions";
import CartPreview from "../CartPreview";
import CartIcon from "../CartIcon";

interface HeaderComponentProps {
  currentUser: currentUser | null;
  hidden: boolean;
  signOutStart: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  currentUser,
  hidden,
  signOutStart
}): JSX.Element => {
  console.log(currentUser);
  console.log(hidden);
  console.log(signOutStart);
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
        <CartIcon />
      </div>
      {!hidden ? <CartPreview /> : null}
    </div>
  );
};

export default HeaderComponent;
