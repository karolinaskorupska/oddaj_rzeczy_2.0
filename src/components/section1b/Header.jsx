import React from "react";
import LogAndReg from "./LogAndReg";
import HeaderNav from "./HeaderNav";
import HeaderButtons from "./HeaderButtons";
import ImgDecoration from "../../assets/Decoration.svg";

const Header = () => {
  return (
    <>
      <LogAndReg />
      <HeaderNav />
      <h1>
        Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img src={ImgDecoration} alt="Decoration Img"></img>
      <HeaderButtons />
    </>
  );
};
export default Header;
