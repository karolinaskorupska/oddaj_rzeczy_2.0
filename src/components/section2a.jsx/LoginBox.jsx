import React, {Component} from "react";

class LoginBox extends Component{
  state={
    email:'',
    password:''
  }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      

    render(){
const {email, password} = this.state;

        return (
            <div className="LoginBox">
              <label>Email</label>
              <input 
              type="email"
               name="email"
                value={email}
                onChange={this.handleChange}
                ></input>
              <label>Hasło</label>
              <input 
              type="password"
               name="password"
                value={password}
                onChange={this.handleChange}
                ></input>
            </div>
          );
    }
}
export default LoginBox;
