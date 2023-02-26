import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Geotop from "../../Assets/Img/geometria2.png";
import Geobot from "../../Assets/Img/geometria.png";
const Contact = () => {
  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3on12bj', 'template_qlpb9is', form.current, 'Ek8vPmaGvSCU7nbM4')
      .then((result) => {
          alert('email enviado con exito')
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  
  return (
    <>
      <div className="contact-title">
        <h2>CONTACTO</h2>
      </div>
      <div className="contact-container">
        <div className="contact">
          <img src={Geotop} className="geo-contact" alt="" />
          <h3>
            Contactenos por whatsapp, zoom o una llamada telefónica.
            <spam className="highlight">
              Programe ahora una reunión con nuestros asistentes.
            </spam>
          </h3>
          <form ref={form} onSubmit={sendEmail} className="field">
          <div className="form-cont">
            <input placeholder="Nombre" name="user_name"></input>
            <div className="line"></div>
            <input placeholder="Email" name="user_email"></input>
            <div className="line"></div>
            <input placeholder="Asunto"></input>
            <div className="line"></div>
            <textarea
              name="message"
              id=""
              rows="8"
              cols="10"
              placeholder="Detalle del proyecto(opcional)"
            ></textarea>
            <button className="btn-app">QUIERO INNOVAR</button>
          </div>
          </form>
        </div>{" "}
        <img src={Geobot} className="geo-contact-bot" alt=""/>
        <div className="contact-date">
          <h2>DATOS DE CONTACTO</h2>
          <h3>Viamonte 5263,Chacras de Coria <br></br>Luján de Cuyo,Mendoza.</h3>
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
