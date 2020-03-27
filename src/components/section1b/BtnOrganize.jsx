import React from 'react';
import { Link } from "react-router-dom";

const BtnOrganize = () => {
    return(
        <button className="BtnOrganize"><Link to="/login">Zorganizuj zbiórkę</Link></button>
    )
}

export default BtnOrganize;