import React from "react";
import "./LoginPage.scss";
import SignIn from "../../components/loginPage/SignIn";
import SignUp from "../../components/loginPage/SignUp";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
