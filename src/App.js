import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './page/shop/shop.component';

import Header from './components/header/header.component';

 

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Shop" component={ShopPage}/>
        <Route exact path="/SignIn" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
