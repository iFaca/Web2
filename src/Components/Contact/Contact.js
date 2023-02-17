import React from "react";
import "./Contact.css";
import Geotop from '../../Assets/Img/geometria2.png'
import Geobot from '../../Assets/Img/geometria.png'
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <img src={Geotop} className="geo-contact" />
          <h2>CONTACTO</h2>
          <h3>
            Contactenos por whatsapp, zoom o una llamada telefónica.
            <spam className="highlight">
              Programe ahora una reunión con nuestros asistentes.
            </spam>
          </h3>

          <div className="form-cont">
            <input placeholder="Nombre"></input>
            <div className="line"></div>
            <input placeholder="Email"></input>
            <div className="line"></div>
            <input placeholder="Asunto"></input>
            <div className="line"></div>
            <textarea
              id=""
              name=""
              rows="8"
              cols="30"
              placeholder="Detalle del proyecto(opcional)"
            ></textarea>
            <button className="btn-app">QUIERO INNOVAR</button>
          </div>
          <img src={Geobot} className="geo-contact-bot" />
        </div>{" "}
        <div className="contact-date">
          <h2>DATOS DE CONTACTO</h2>
          <h3>Viamonte 5263,Chacras de Coria Luján de Cuyo,Mendoza.</h3>
          <h3>Hola@innovis.com.ar</h3>
          <h3>+54 9 261 516 3469</h3>
          <h3>+54 9 261 622 5439</h3>
          <h3>+54 9 261 513 2968</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
