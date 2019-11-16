import React from "react";
import FormInput from "../../shared/FormInput";
import CustomButton from "../../shared/CustomButton";
import "./SignUp.scss";
import { signUpStart } from "../../../redux/user/userActions";
import { connect } from "react-redux";

interface SignUpProps {
  signUpStart: typeof signUpStart;
}

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class SignUp extends React.Component<SignUpProps, SignUpState> {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const newState = { [name]: value } as Pick<SignUpState, keyof SignUpState>;
    this.setState(newState);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (userCredentials: any) => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
