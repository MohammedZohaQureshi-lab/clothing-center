import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    console.log("Submitted");
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
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
            placeholder="Email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            label="Password"
            placeholder="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
