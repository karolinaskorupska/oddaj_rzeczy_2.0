import React from 'react';
import { Link } from "react-router-dom";

const ButtonRegister = () => {
    return(
        <button className="BtnRegister"><Link to="/register">Załóż konto</Link></button>
    )
}

export default ButtonRegister;