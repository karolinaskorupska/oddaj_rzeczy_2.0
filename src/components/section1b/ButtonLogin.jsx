import React from 'react';
import { Link } from "react-router-dom";

const ButtonLogin = () => {
    return(
        <button className="BtnLogin"><Link to="/login" >Zaloguj</Link></button>
    )
}

export default ButtonLogin;