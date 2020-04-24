import React from "react";

import ImgDecoration from "../../assets/Decoration.svg";
import RegisterBox from "./RegisterBox";
import LogAndReg from "../section1b/LogAndReg";
import Signin from './Signin';

const Section3a = () => {
  return (
    <div className="Section3a">
      <h1>Załóż konto</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      {/* <RegisterBox /> */}
      <Signin/>
      <LogAndReg />
    </div>
  );
};
export default Section3a;