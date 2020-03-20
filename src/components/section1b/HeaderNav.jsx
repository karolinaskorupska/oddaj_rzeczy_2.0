import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
    return(
        <nav className="headerNav">
            <ul>
                <li>
                    <NavLink exact to= "/Home" title="Start" target="_self">Start</NavLink>
                </li>
                <li>
                    <NavLink exact to= "/" title="O co chodzi?" target="_self">O co chodzi?</NavLink>
                </li>
                <li>
                    <NavLink exact to= "/" title="O nas" target="_self">O nas</NavLink>
                </li>
                <li>
                    <NavLink exact to= "/" title="Fundacja i organizacje" target="_self">Fundacja i organizacje</NavLink>
                </li>
                <li>
                    <NavLink exact to= "/" title="Kontakt" target="_self">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav;