import React from 'react';

const Organizations =(list)=>{
    
    return(
        <div className="box organizations">
            <div className="number">{list.list.organizations}</div>
            <div className="title">oddanych worków</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
        </div>
    )
}

export default Organizations;