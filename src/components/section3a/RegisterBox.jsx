import React, { Component } from "react";

import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: " AIzaSyAYtKfB6EWLGdEge2bmMmvh1i7s4pnGVtc ",
//   authDomain: "oddaj-rzeczy-2.firebaseapp.com",
//   databaseURL: "https://oddaj-rzeczy-2.firebaseio.com",
//   projectId: "oddaj-rzeczy-2",
//   storageBucket: "oddaj-rzeczy-2.appspot.com",
//   messagingSenderId: "59158629530",
//   appId: "1:59158629530:web:60c5ecf4acf5af9ab02323"
// };

// firebase.initializeApp(firebaseConfig);

class RegisterBox extends Component {
  state = {
    email: "",
    password: "",
    password2:"",
    emailError:"",
    passwordError:"", 
    password2Error:"",
    isValidated:false,
    
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  validateEmail = () => {
    const { email } = this.state;
    let isEmailValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      isEmailValid = false;
      this.setState({ emailError: "Podany email jest nieprawidłowy!" });
    } else {
      this.setState({ emailError: "" });
      isEmailValid = true;
    }
    return isEmailValid;
   };
   validatePassword = () => {
    const { password } = this.state;
    let isPasswordValid = true;

    if (password === "" || password.length <= 6) {
      isPasswordValid = false;
      this.setState({
        passwordError: "Hasło musi mieć conajmniej 6 znaków!"
      });
    } else {
      this.setState({ passwordError: "" });
      isPasswordValid = true;
    }
    return isPasswordValid;
  };
  validatePassword2 = () => {
    const { password, password2 } = this.state;
    let isPassword2Valid = true;

    if ( password !== password2) {
      isPassword2Valid = false;
      this.setState({
        password2Error: "Hasło musi być takie samo!"
      });
    } else {
      this.setState({ password2Error: "" });
      isPassword2Valid = true;
    }
    return isPassword2Valid;
  };

  handleSignUp = event =>{
    event.preventDefault();
    const {email, password}= this.state;
    const auth = firebase.auth();

    const promise =  auth.createUserWithEmailAndPassword(email, password);
    promise
      
      .catch(event => console.log(event.message))
  }
  
  componentDidUpdate(){
    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(firebaseUser){
        console.log(firebaseUser)
      }else{
        console.log('not logged in')
      }
    })
  }

  render() {
    const { email, password,password2, emailError, passwordError, password2Error } = this.state;

    return (
      <>
      <div className="RegisterBox">
        <div className="Email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            onBlur={this.validateEmail}
          ></input>
        </div>
        {emailError && <span className="errorMessage">{emailError}</span>}
        <div className="Password">
          <label>Hasło</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            onBlur={this.validatePassword}
          ></input>
        </div>
        {passwordError && (
              <span className="errorMessage">{passwordError}</span>
            )}
        <div className="DoublePassword">
          <label>Powtórz hasło</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={this.handleChange}
            onBlur={this.validatePassword2}
          ></input>
          {password2Error && (
              <span className="errorMessage">{password2Error}</span>
            )}
        </div>
      </div>
      <button className="SignUp" onClick={this.handleSignUp}>Zarejestruj</button>
      </>
    );
  }
}
export default RegisterBox;
