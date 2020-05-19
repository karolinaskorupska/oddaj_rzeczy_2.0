import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constans/routes';

 
const SignInPage = () => (
  <div>
    <h1>Zaloguj się</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password:'',
  error: null
};

class SignInFormBase extends Component {
  constructor(props){
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const {email, password} = this.state;

    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(()=>{
      this.setState({ ...INITIAL_STATE});
      this.props.history.push(ROUTES.HOME);
    })
    .catch( error => {
      this.setState({ error })
    });

    event.preventDefault();

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {email, password, error} = this.state;

    const isInvalid =  password === '' || email === '';

    return(
      <form onSubmit={this.onSubmit}>
        <input
        name='email'
        value={email}
        onChange={this.onChange}
        type='text'
        placeholder='adres e-mail'
        />
        <input
        name='password'
        value={password}
        onChange={this.onChange}
        type='password'
        placeholder='hasło'
        />
        <button disabled={isInvalid} type='submit'>
          Zaloguj się
        </button>

        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;
 
