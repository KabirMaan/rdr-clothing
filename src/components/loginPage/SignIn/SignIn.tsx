import React from "react";
import FormInput from "../../shared/FormInput";
import "./SignIn.scss";
import CustomButton from "../../shared/CustomButton";
import {
  googleSignInStart,
  emailSignInStart
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

class SignIn extends React.Component<SignInProps, SignInState> {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    const emailAndPassword = { email, password };
    emailSignInStart(emailAndPassword);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    const newState = { [name]: value } as Pick<SignInState, keyof SignInState>;

    this.setState(newState);
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword: { email: string; password: string }) =>
    dispatch(emailSignInStart(emailAndPassword))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
