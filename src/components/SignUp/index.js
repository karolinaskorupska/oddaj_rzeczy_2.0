import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import '../SignUp/SignUp.scss';

import { withFirebase } from "../Firebase";

import ImgDecoration from "../../assets/Decoration.svg";

import * as ROUTES from "../../constans/routes";

const SignUpPage = () => (
  <div className="SignUp">
    <h1>Załóż konto</h1>
    <img src={ImgDecoration} alt="ImgDecoration"></img>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  emailError: "",
  passwordError: "",
  password2Error: "",
};

class SignUpFormBase extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        //create a user in realtime Firebase database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      emailError,
      passwordError,
      password2Error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <>
        <form onSubmit={this.onSubmit} className="RegisterBox">
          {/*         <input
        name="username"
        value={username}
        onChange={this.onChange}
        type="text"
        placeholder="username"
        /> */}
          <div className="Email">
            <label>Email</label>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="email"
            />
          </div>
          {emailError && <span className="errorMessage">{emailError}</span>}

          <div className="PasswordOne">
            <label>Hasło</label>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="password"
            />
          </div>
          {passwordError && (
            <span className="errorMessage">{passwordError}</span>
          )}

          <div className="PasswordTwo">
            <label>Powtórz hasło</label>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="confirm password"
            />
          </div>
          {password2Error && (
            <span className="errorMessage">{password2Error}</span>
          )}
        </form>
        <div className="buttonFrame">
        <p><Link to={ROUTES.SIGN_IN}>Zaloguj się</Link></p>
        <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
          Zarejestruj
        </button>
        </div>
        {error && <p>{error.message}</p>}
      </>
    );
  }
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const SignUpLink = () => <Link to={ROUTES.SIGN_UP}> Zarejestruj </Link>;

export default SignUpPage;

export { SignUpForm, SignUpLink };
