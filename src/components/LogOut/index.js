import React from "react";
import { Link } from "react-router-dom";
import ImgDecoration from "../../assets/Decoration.svg";
import * as ROUTES from "../../constans/routes";


const LogOutPage = () => {
  return (
    <div className="LogOutPage">
      <h1>Wylogowanie nastąpiło <br></br> pomyślnie</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      <button className="BtnHome"><Link to={ROUTES.LANDING}>Strona główna</Link></button>
    </div>
  );
};
export default LogOutPage;