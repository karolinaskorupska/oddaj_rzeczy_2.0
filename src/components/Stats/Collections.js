import React from 'react';

const Collections =(list)=>{

    return(
        <div className="box collections">
            <div className="number">{list.list.collections}</div>
            <div className="title">zorganizowanych zbiórek</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
        </div>
    )
}

export default Collections;