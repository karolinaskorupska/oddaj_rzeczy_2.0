import React from 'react';
import StepTshirt from './StepTshirt';
import StepShoppingBag from './StepShoppingBag';
import StepLoop from './StepLoop';
import StepReservation from './StepReservation';

const StepsImages =()=>{
    return(
        <div className="stepsImages">
            <StepTshirt />
            <StepShoppingBag />
            <StepLoop />
            <StepReservation />
        </div>
    )
}

export default StepsImages;