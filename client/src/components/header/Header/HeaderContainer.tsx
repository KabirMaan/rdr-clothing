import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/userSelectors";
import { selectCartHidden } from "../../../redux/cart/cartSelectors";
import { currentUser, signOutStart } from "../../../redux/user/userActions";
import { Dispatch } from "redux";
import HeaderComponent from "./HeaderComponent";

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
    <HeaderComponent
      currentUser={currentUser}
      hidden={hidden}
      signOutStart={signOutStart}
    />
   
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
