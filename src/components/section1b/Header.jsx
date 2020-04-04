import React from "react";
import LogAndReg from "./LogAndReg";
import HeaderNav from "./HeaderNav";
import HeaderButtons from "./HeaderButtons";
import LogInLogOut from './LogInLogOut';
import ImgDecoration from "../../assets/Decoration.svg";

const Header = () => {
  return (
    <>
      <LogAndReg />
      <LogInLogOut/>
      <HeaderNav />
      <div className="txt">
        <h1>
          Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img src={ImgDecoration} alt="Decoration Img"></img>
        <HeaderButtons />
      </div>
    </>
  );
};
export default Header;
