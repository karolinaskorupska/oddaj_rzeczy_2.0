import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
