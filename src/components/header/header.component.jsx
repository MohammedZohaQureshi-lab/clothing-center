import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/Shop">
          Shop
        </Link>
        <Link className="option" to="/Contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
            <Link className="option" to="/SignIn">
              Sign In
            </Link>
          )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
