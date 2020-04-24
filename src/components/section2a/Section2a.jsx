import React from "react";

import ImgDecoration from "../../assets/Decoration.svg";
import LoginBox from "./LoginBox";
import Login from './Login';
// import ButtonLogin from '../section1b/ButtonLogin';
// import ButtonRegister from '../section1b/ButtonRegister';
import LogAndReg from "../section1b/LogAndReg";

const Section2a = () => {
  return (
    <div className="Section2a">
      <h1>Zaloguj się</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      <Login />

      <LogAndReg />
    </div>
  );
};
export default Section2a;
