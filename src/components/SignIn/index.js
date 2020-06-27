import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Link } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constans/routes";

import '../SignIn/SignIn.scss';

import ImgDecoration from "../../assets/Decoration.svg";

const SignInPage = () => (
  <div>
    <SignInForm />
{/*     <PasswordForgetLink />
    <SignUpLink /> */}
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  passwordError: "",
  emailError: "",
  isValidated: false,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
        passwordError: "Password must have at least six signs",
      });
    } else {
      this.setState({ passwordError: "" });
      isPasswordValid = true;
    }
    return isPasswordValid;
  };

  render() {
    const { email, password, error, emailError, passwordError } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="SignIn">
        <h1>Zaloguj się</h1>
        <img src={ImgDecoration} alt="ImgDecoration"></img>
        <div className="LoginBox">
          <form onSubmit={this.onSubmit}>
            <div className="Email">
              <label>Email</label>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                onBlur={this.validateEmail}
                type="text"
                placeholder="e-mail"
              />
            </div>
            {emailError && <span className="errorMessage">{emailError}</span>}

            <div className="Password">
              <label>Password</label>
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                onBlur={this.validatePassword}
                type="password"
                placeholder="password"
              />
            </div>
            {passwordError && (
              <span className="errorMessage">{passwordError}</span>
            )}

          </form>
        </div>
        <div className="buttonFrame">
        <p><Link to={ROUTES.SIGN_UP}>Załóż konto</Link></p>
            <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
              Zaloguj się
            </button>

            </div>


            
              
            {error && <p className="errorMessage">{error.message}</p>}
      </div>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;
