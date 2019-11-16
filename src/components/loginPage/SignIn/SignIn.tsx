import React, { useState } from "react";
import FormInput from "../../shared/FormInput";
import "./SignIn.scss";
import CustomButton from "../../shared/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
  EmailSignInCredentials
} from "../../../redux/user/userActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface SignInProps {
  googleSignInStart: typeof googleSignInStart;
  emailSignInStart: typeof emailSignInStart;
}

interface SignInState {
  email: string;
  password: string;
}

const SignIn: React.FC<SignInProps> = ({
  emailSignInStart,
  googleSignInStart
}): JSX.Element => {
  // class SignIn extends React.Component<SignInProps, SignInState> {
  // state = {
  //   email: "",
  //   password: ""
  // };

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // const { emailSignInStart } = props;

    const emailAndPassword = { email, password };
    emailSignInStart(emailAndPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    const newState = { [name]: value } as Pick<SignInState, keyof SignInState>;

    console.log(newState);

    setCredentials({ ...userCredentials, ...newState });
  };

  // render() {

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
  // }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword: EmailSignInCredentials) =>
    dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
