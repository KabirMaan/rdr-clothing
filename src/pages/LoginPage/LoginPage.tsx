import React from "react";
import "./LoginPage.scss";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className="login-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
