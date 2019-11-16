import React, { useState } from "react";
import FormInput from "../../shared/FormInput";
import CustomButton from "../../shared/CustomButton";
import "./SignUp.scss";
import { signUpStart, SignUpUserCredentials } from "../../../redux/user/userActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface SignUpProps {
  signUpStart: typeof signUpStart;
}

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC<SignUpProps> = ({ signUpStart }): JSX.Element => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const newState = { [name]: value } as Pick<SignUpState, keyof SignUpState>;

    setSignUpCredentials({ ...signUpCredentials, ...newState });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userCredentials: SignUpUserCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
