import React from 'react';
import { Link } from "react-router-dom";

const StepsButton =()=>{
    return(
        <div className="StepsButton">
            <button className="giveAway"> <Link to="/login">oddaj <br></br>rzeczy </Link></button>
        </div>
    )
}

export default StepsButton;