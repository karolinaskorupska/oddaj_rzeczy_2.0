import React from 'react';
import { Link } from "react-router-dom";
// import { app } from './base';

const ButtonLogOut = () => {
    return(
        <button className="BtnLogOut"
            // onClick={()=>app.auth().signOut()}
        
        >
            {/* <Link to="/"> */}
                Wyloguj się
            {/* </Link> */}
        </button>
    )
}

export default ButtonLogOut;