import React from 'react';
import { Link } from "react-router-dom";

const BtnGiveAway = () => {
    return(
        <button className="BtnGiveAway"><Link to="/login">Oddaj rzeczy</Link></button>
    )
}

export default BtnGiveAway;