import React from "react";
import "./About.css";
import Team from '../../Assets/Img/team.jpg'
import Geo from '../../Assets/Img/geometria2.png'
const About = () => {
  return (
    <div className="about">
        <img src={Geo} className="geo-team"></img>
      <h2 className="">NUESTRO EQUIPO</h2>
      <p>
        Innovis es un equipo de desarrollo de software dedicado a la excelencia
        y la innovación. Nos enfocamos en trabajar de manera colaborativa y en
        equipo para lograr resultados óptimos y brindar soluciones
        personalizadas y de alta calidad a nuestros clientes. La innovación es
        clave en nuestro enfoque y nos permite ofrecer soluciones creativas e
        impactantes. Trabajamos incansablemente para ser líderes en el
        desarrollo de software de alta calidad y brindar un servicio excepcional
        a nuestros clientes. ¡Estamos emocionados de colaborar contigo y
        ayudarte a alcanzar tus objetivos!
      </p>
      <img src={Team} className="img-team"/>
    </div>
  );
};

export default About;
