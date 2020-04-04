import React, {Component} from "react";
import * as firebase from 'firebase';
import ButtonLogOut from './ButtonLogOut';


class LogAndReg extends Component {
    state={
        email:''
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(firebaseUser=>{
          if(firebaseUser){
            console.log(firebaseUser.email)
            this.setState({email:firebaseUser.email})
          }else{
            console.log('not logged in')
          }
        })
      }

  render(){
    return (
      <div className="LogInLogOut">
        <div className="userName">{this.state.email}</div>
        <ButtonLogOut />
      </div>
    );
  }


}


export default LogAndReg;
