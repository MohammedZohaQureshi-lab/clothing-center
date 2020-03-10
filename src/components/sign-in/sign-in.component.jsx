import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
             email: "",
            password: ""

        }
    }
    handleChange(){}
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Enter you credentials below to log in your account</span>

                <form>
                    <label>Email-address</label>
                    <input name ="EmailAddress" type="email" placeholder="Enter user email adressx" onChange={this.statehandleChange}  data-value={this.state.email} />
                    <label>Password</label>
                    <input type="password" placeholder="Enter user email adressx" data-value={this.state.password} />
                </form>
            </div>

        );
    }
}

export default SignIn;