import React, {Component} from "react";
import ButtonLogin from './ButtonLogin';
import ButtonRegister from './ButtonRegister';
// import ButtonLogOut from '../../ButtonLogOut';


class LogAndReg extends Component {
  

  render(){
    return (
      <div className="logAndReg">
        <ButtonLogin />
        
        <ButtonRegister />
      </div>
    );
  }


}


export default LogAndReg;
