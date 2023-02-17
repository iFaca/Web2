import React from "react";
import './Services.css'
import Geo from '../../Assets/Img/geometria.png'

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services-content">
          <h2>SOFTWARE</h2>
          <p className="services-info">
            Soluciones enlatadas y a medida para cualquier tipo de empresa.Vos
            hace crecer tu negocio que nosotros nos encargamos de los sistemas.
          </p>
          <h2>WEB 3.0</h2>
          <p className="services-info">
            Innovamos de forma permanente y sabemos que la web 3.0 es lo que se
            viene.Consutanos por las soluciones en blockchain y llega mas rápido
            al futuro lector.
          </p>
          <h2>SOPORTE</h2>
          <p className="services-info">
            Brindamos soporte,capacitación y asesoramiento IT a cualquier tipo
            de industria,empresa u organizacion.Nos especializamos en brindar
            soluciones.
          </p>
        </div>
      </div>
      <img src={Geo} className="geo"></img>
      <img src={Geo} className="geo2"></img>
    </>
  );
};

export default Services;
