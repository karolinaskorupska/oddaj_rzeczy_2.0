import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constans/routes";

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div> 
   

    <AuthUserContext.Consumer>
    {authUser => authUser  ? <NavigationAuth /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Strona główna</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Konto</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Zaloguj</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Zarejestruj</Link>{" "}
    </li>
  </ul>
);


export default Navigation;
