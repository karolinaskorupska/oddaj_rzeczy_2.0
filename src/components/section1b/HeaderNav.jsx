import React from 'react';
// import { Link } from "react-router-dom";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {
    return(
        <nav className="header">
            <ul>
                <li>
                    <Link to= "Section1b" title="Start"
                      smooth={true} offset={0} duration={500} >Start</Link>
                </li>
                <li>
                    <Link to= "Section1d" title="O co chodzi?"
                    smooth={true} offset={0} duration={500} >O co chodzi?</Link>
                </li>
                <li>
                    <Link to= "Section1e" title="O nas" 
                    smooth={true} offset={0} duration={800}>O nas</Link>
                </li>
                <li>
                    <Link to= "Section1f" title="Fundacja i organizacje" 
                    smooth={true} offset={0} duration={1000}>Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link to= "Section1g" title="Kontakt" 
                    smooth={true} offset={0} duration={1200}>Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;