import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/logout" component={Logout}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
