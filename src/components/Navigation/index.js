import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constans/routes';
 

  const Navigation = () => {
    return(
        <nav className="header">
            <ul>
                <li>
                  <Link to={ROUTES.SIGN_IN}>Zaloguj</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP} >Zarejestruj</Link>
                </li>
            </ul>
        </nav>
    )
}

 
export default Navigation;