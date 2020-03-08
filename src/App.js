import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const Hats  = () => {
  return ( <div>
    <h1>Hats</h1>
  </div> );
}
 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hatsPage" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
