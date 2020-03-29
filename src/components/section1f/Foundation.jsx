import React, {Component} from "react";


class Foundation extends Component{
    
    state={
        element:this.props.element,
        name: this.props.element.name,
        mission: this.props.element.mission,
        stuff: this.props.element.stuff
        
    }
    

    render(){
        const{element,name, mission, stuff}=this.state;
        // console.log(element)
        return(
            <li>
            <div className="foundation">    
                <div className="leftSide">
                    <h4 className="foundationName">{name}</h4>
                    <p className="foundationMission">Cel i misja: {mission}</p>
                </div>
                <div className="rightSide">
                    <p className="needs">{stuff}</p>
                </div>
            </div>
            </li>
        )
    }
}


export default Foundation;