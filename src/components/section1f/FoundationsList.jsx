import React from "react";
import Foundation from './Foundation';

const FoundationsList=(list)=>{
    // console.log(list.list)
    return(
        <div className="foundationsList">
            <ul>
                {list.list.map((element, index) => <Foundation key={index} element={element}/>
                )}
            </ul>
        </div>
    )
}

export default FoundationsList;