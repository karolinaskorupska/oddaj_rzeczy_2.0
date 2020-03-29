import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
