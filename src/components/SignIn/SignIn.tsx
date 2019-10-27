import React from "react";
import FormInput from "../FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton";
import { auth, signInWithGoogle } from "../../utils/firebase";

interface SignInProps {}

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

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event: any) => {
    const { value, name } = event.target;
    const newState = { [name]: value } as Pick<SignInProps, keyof SignInProps>;

    this.setState(newState);
  };

  render() {
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
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
