import React from "react";
import { Link } from "react-router-dom";
import ImgDecoration from "../../assets/Decoration.svg";
import * as ROUTES from "../../constans/routes";


const LogOut = () => {
  return (
    <div className="LogOutPage">
      <h1>Wylogowanie nastąpiło <br></br> pomyślnie</h1>
      <img src={ImgDecoration} alt="ImgDecoration"></img>
      <button className="BtnHome"><LogOutLink/></button>
    </div>
  );
};

const LogOutLink = () => <Link to={ROUTES.LOG_OUT}>Wyloguj </Link>;

export default LogOut;
