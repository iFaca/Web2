import React, { useState, useEffect } from 'react';
import './Main.css';
import Navbar from '../Nav-bar/Navbar';
import Logo from '../../Assets/Img/innovis_adobe_express.png';
import Wsp from '../../Assets/Img/wsp.png';
import Twitter from '../../Assets/Img/twit.png';
import In from '../../Assets/Img/in.png';
import BackgroundDay from '../../Assets/Img/background-day3.jpg';
import BackgroundNight from '../../Assets/Img/background-night.jpg';

const Main = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    // aca seteamos el horario para el cambio de la imagen
    setIsNight(hour >= 20 || hour < 7);
  }, []);

  const backgroundImage = isNight ? BackgroundNight : BackgroundDay;

  return (
    <>
      <div className="head" href="#" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="nav-cont">
          <div className="logo-sub">
            <img className="logo" src={Logo} alt="logo" />
            <p>Soluciones tec</p>
          </div>
          <p className="slogan">El futuro de tu empresa está acá</p>
          <Navbar />
        </div>
        <div className="main-content">
          <h1>
            LÍDERES EN <span className="highlight">INNOVACIÓN</span> Y SOLUCIONES A MEDIDA.
          </h1>
          <p>
            Creamos plataformas web dinámicas, seguras y rentables con codificación limpia. Generamos las aplicaciones
            móviles que optimizan su negocio, mediante procesos ágiles que ahorran tiempo y recursos.
          </p>
          <a href="https://api.whatsapp.com/send?phone=542615732968">
            <button className="btn-app">QUIERO QUE ME ASESOREN</button>
          </a>
        </div>
      </div>
      <div className="social">
        <a>
          <img src={Wsp} className="social-icon" alt="WhatsApp" />
        </a>
        <a>
          <img src={Twitter} className="social-icon" alt="Twitter" />
        </a>
        <a>
          <img src={In} className="social-icon" alt="LinkedIn" />
        </a>
      </div>
    </>
  );
};

export default Main;
