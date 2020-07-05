import React from 'react';
import { withFirebase } from '../Firebase';
import { Link, useHistory } from "react-router-dom";

import * as ROUTES from "../../constans/routes";

 
const SignOutButton = ({ firebase }) => (
  <button type='button' className='SingOutButton'  >
    <Link to={ROUTES.LOG_OUT} onClick={firebase.doSignOut}>Wyloguj</Link>
  
  </button>
);

 
export default withFirebase(SignOutButton);