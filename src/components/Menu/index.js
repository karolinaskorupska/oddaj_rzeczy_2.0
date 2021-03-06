import React from 'react';

import { Link } from 'react-scroll';

const Menu = () => {
    return(
        <nav className="menu">
            <ul>
                <li>
                    <a href= "/" title="Start"
                      smooth={"true"} offset={0} duration={500} >Start</a>
                </li>
                <li>
                    <Link to= "Steps" title="O co chodzi?"
                    smooth={"true"} offset={0} duration={500} >O co chodzi?</Link>
                </li>
                <li>
                    <Link to= "AboutUs" title="O nas" 
                    smooth={"true"} offset={0} duration={800}>O nas</Link>
                </li>
                <li>
                    <Link to= "Target" title="Fundacja i organizacje" 
                    smooth={"true"} offset={0} duration={1000}>Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link to= "ContactForm" title="Kontakt" 
                    smooth={"true"} offset={0} duration={1200}>Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;