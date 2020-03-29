import React from "react";
import { Link } from "react-router-dom";
import ImgDecoration from "../../assets/Decoration.svg";


const Section4a = () => {
  return (
    <div className="Section4a">
      <h1>Wylogowanie nastąpiło <br></br> pomyślnie</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      <button className="BtnHome"><Link to="/">Strona główna</Link></button>
    </div>
  );
};
export default Section4a;