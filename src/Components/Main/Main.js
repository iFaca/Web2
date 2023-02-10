import React from "react";
import "./Main.css";
import Logo from "../../Assets/Img/innovis_adobe_express.png";
import Navbar from "../Nav-bar/Navbar";
const Main = () => {
  return (
    <div className="head">
      <div className="nav-cont">
        <img src={Logo} alt="logo"></img>
        <p className="slogan">El futuro de tu empresa esta acá</p>
        <Navbar/>
      </div>
    </div>
  );
};

export default Main;
