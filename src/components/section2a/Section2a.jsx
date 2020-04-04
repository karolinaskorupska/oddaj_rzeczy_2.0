import React from "react";

import ImgDecoration from "../../assets/Decoration.svg";
import LoginBox from "./LoginBox";
// import ButtonLogin from '../section1b/ButtonLogin';
// import ButtonRegister from '../section1b/ButtonRegister';
import ButtonRegister from "../section1b/ButtonRegister";

const Section2a = () => {
  return (
    <div className="Section2a">
      <h1>Zaloguj się</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      <LoginBox />

      <ButtonRegister />
    </div>
  );
};
export default Section2a;
