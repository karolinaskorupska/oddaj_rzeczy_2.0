import React from 'react';
import ImgDecoration from "../../assets/Decoration.svg";

const StepsHeader =()=>{
    return(
        <div className="stepsHeader">
            <h2>Wystarczą 4 proste kroki</h2>
            <img src={ImgDecoration} alt="Decoration Img"></img>
        </div>
    )
}

export default StepsHeader;