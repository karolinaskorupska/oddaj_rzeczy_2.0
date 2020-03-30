import React, { Component } from "react";

class RegisterBox extends Component {
  state = {
    email: "",
    password: "",
    password2:"",
    emailError:"",
    passwordError:"", 
    password2Error:"",
    isValidated:false
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

  render() {
    const { email, password,password2, emailError, passwordError, password2Error } = this.state;

    return (
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
    );
  }
}
export default RegisterBox;
