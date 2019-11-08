import React from "react";
import FormInput from "../../shared/FormInput";
import "./SignIn.scss";
import CustomButton from "../../shared/CustomButton";

import {
  googleSignInStart,
  emailSignInStart
} from "../../../redux/user/userActions";
import { connect } from "react-redux";

interface SignInProps {
  googleSignInStart: any;
  emailSignInStart: any;
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

  handleSubmit = async (event: any) => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event: any) => {
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

const mapDispatchToProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: any, password: any) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
