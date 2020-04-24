import React, {useCallback, useContext, useState} from 'react';
import {withRouter, Redirect} from 'react-router';
import {AuthContext} from '../firebase/Auth';
import app from '../firebase/base';



const Login = ({history}) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const{email,password}=event.target.elements;
      try{
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch(error){
        alert(error);
      }
    },
    [history]
  );

  const {currentUser} = useContext(AuthContext);

  if(currentUser){
    return <Redirect to="/"/>;
  }

  return (
    <>
      <div className="LoginBox">
        <div className="Email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>

        <div className="Password">
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <button className="Submit" onClick={handleLogin}>
        Zaloguj
      </button>
    </>
  );
};

export default Login;
