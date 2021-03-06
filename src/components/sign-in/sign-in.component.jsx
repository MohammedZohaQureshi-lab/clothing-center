import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      debugger;
      alert(email);
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    //console.log(this.state.email, value, name);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email & Password</span>
        <form onSubmit={event => this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
