import React, {useState} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import app from '../firebase/base';


const Signin =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [routeRedirect, setRedirect] = useState(false);

    const signin = async(e)=>{
        e.preventDefault();
        let user = await app.signin(email,password);
        console.log(user);
        setRedirect(true);
    }
    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/"/>
    }

    return (
        <div className="RegisterBox">
          <div className="Email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event)=> setEmail(event.target.value)}
            //   onBlur={this.validateEmail}
            ></input>
          </div>
          {/* {emailError && <span className="errorMessage">{emailError}</span>} */}
          <div className="Password">
            <label>Hasło</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            //   onBlur={this.validatePassword}
            ></input>
          </div>
          {/* {passwordError && (
                <span className="errorMessage">{passwordError}</span>
              )} */}
          <div className="DoublePassword">
            <label>Powtórz hasło</label>
            <input
              type="password"
              name="password2"
            //   value={password2}
            //   onChange={this.handleChange}
            //   onBlur={this.validatePassword2}
            ></input>
            {/* {password2Error && (
                <span className="errorMessage">{password2Error}</span>
              )} */}
          </div>
          <button onClick={signin}>zarejestruj</button>
        </div>
      );


}


export default Signin;