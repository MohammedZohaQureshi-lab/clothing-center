import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './page/shop/shop.component';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <div className="app-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Shop" component={ShopPage} />
          <Route exact path="/SignIn" component={SignInAndSignUp} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
