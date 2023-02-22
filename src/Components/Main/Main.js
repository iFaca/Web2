import React from 'react';
import "./Main.css";
import Logo from "../../Assets/Img/innovis_adobe_express.png";
import Navbar from "../Nav-bar/Navbar";
import Wsp from "../../Assets/Img/wsp.png";
import Twitter from "../../Assets/Img/twit.png";
import In from "../../Assets/Img/in.png";
import Btn from '../Btn-arrow/BtnArrow'
const Main = () => {

  return (
    <>
      <div className="head" href="#">
        <div className="nav-cont">
          <div className="logo-sub">
            <img className="logo" src={Logo} alt="logo"></img>
            <p>Soluciones tec</p>
          </div>
          <p className="slogan">El futuro de tu empresa esta acá</p>
          <Navbar />
        </div>
        <div className="main-content">
          <h1>
            LÍDERES EN <span className="highlight">INNOVACIÓN</span> Y
            SOLUCIONES A MEDIDA.
          </h1>
          <p>
            Creamos plataformas web dinámicas, seguras y rentables con
            codificación limpia. Generamos las aplicaciones móviles que
            optimizan su negocio, mediante procesos ágiles que ahorran tiempo y
            recursos.
          </p>
          <button className="btn-app">QUIERO QUE ME ASESOREN</button>
        </div>
      </div>
      <div className="social">
        <a>
          <img src={Wsp} className="social-icon" />
        </a>
        <a>
          <img src={Twitter} className="social-icon" />
        </a>
        <a>
          {" "}
          <img src={In} className="social-icon" />
        </a>
      </div>
    </>
  );
};

export default Main;
