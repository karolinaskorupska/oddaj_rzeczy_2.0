import React from 'react';
import ImgReservation from '../../assets/Icon-4.svg';

const StepReservation =()=>{
    return(
        <div className="step Reservation">
            <img src={ImgReservation} alt="Img Reservation"></img>
            <h3>Zamów kuriera</h3>
            <div></div>
            <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
    )
}

export default StepReservation;