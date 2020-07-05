import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constans/routes";

import { AuthUserContext } from '../Session';



const Navigation = () => (
  <div> 
   

    <AuthUserContext.Consumer>
    {authUser => authUser  ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
    </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = ({ authUser }) => (
  <ul className="logAndReg">
    <li className="usersEmail">
      <Link  to={ROUTES.LANDING}>{authUser.email} </Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}> Oddaj rzeczy </Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="logAndReg">
    <li>
      <Link to={ROUTES.SIGN_IN}>Zaloguj</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP}>Zarejestruj</Link>
    </li>
  </ul>
);


export default Navigation;
