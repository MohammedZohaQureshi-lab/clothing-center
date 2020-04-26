import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './page/shop/shop.component';

import Header from './components/header/header.component';
import { auth, createUserDatabase } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDatabase(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))

        })
      }

      else {
        this.setState({ currentUser: userAuth });
      }


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
            <Route exact path="/Contact" component={HomePage} />
            <Route exact path="/SignIn" component={SignInAndSignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapDispatchToProp=(dispatch)=>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProp)(App);
