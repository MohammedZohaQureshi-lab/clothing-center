import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserDatabase } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDatabase(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Don't have an account</h2>
        <span>Fill details below to sign up </span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            label="User Name"
            name="displayName"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            value={email}
            label="Email"
            name="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            value={password}
            label="Password"
            name="password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            value={confirmpassword}
            label="Confirmpassword"
            name="confirmpassword"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
