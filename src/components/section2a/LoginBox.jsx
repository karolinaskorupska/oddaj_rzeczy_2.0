import React, { Component } from "react";

class LoginBox extends Component {
  state = {
    email: "",
    password: "",
    emailError:"",
    passwordError:"", 
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


  render() {
    const { email, password,  emailError, passwordError } = this.state;

    return (
      <div className="LoginBox">
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
      </div>
    );
  }
}
export default LoginBox;
