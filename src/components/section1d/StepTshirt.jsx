import React from 'react';
import ImgTshirt from '../../assets/Icon-1.svg';

const StepTshirt =()=>{
    return(
        <div className="stepTshirt">
            <img src={ImgTshirt} alt="Img Tshirt"></img>
            <h3>Wybierz rzeczy</h3>
            <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
    )
}

export default StepTshirt;