import React from 'react';
import ImgShoppingBag from '../../assets/Icon-2.svg';

const StepShoppingBag =()=>{
    return(
        <div className="stepShoppingBag">
            <img src={ImgShoppingBag} alt="Img Shopping Bag"></img>
            <h3>Spakuj je</h3>
            <p>skorzystaj z worków na śmieci</p>
        </div>
    )
}

export default StepShoppingBag;