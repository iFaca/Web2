import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Geotop from "../../Assets/Img/geometria2.png";
import Geobot from "../../Assets/Img/geometria.png";

const Contact = () => {
  const form = useRef();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  
  const sendEmail = (e) => {
  e.preventDefault();

  let valid = true;

  // Validación del campo nombre
  if (!form.current || !form.current.user_name || !form.current.user_name.value.trim()) {
    setNameError("Por favor ingrese su nombre");
    valid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(form.current.user_name.value.trim())) {
    setNameError("Por favor ingrese un nombre válido sin números");
    valid = false;
  } else {
    setNameError("");
  }

  // Validación del campo email
  if (!form.current || !form.current.user_email || !form.current.user_email.value.trim()) {
    setEmailError("Por favor ingrese su email");
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value.trim())) {
    setEmailError("Por favor ingrese un email válido");
    valid = false;
  } else {
    setEmailError("");
  }

 

  // Si todos los campos son válidos, se envía el formulario

  if (valid) {
    emailjs
      .sendForm(
        "service_fayf6ya",
        "template_ojy3bdz",
        form.current,
        "WhXCjS_qPgmQhqoiD"
      )
      .then(
        (result) => {
          alert("email enviado con exito");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
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
            <span className="highlight">
              Programe ahora una reunión con nuestros asistentes.
            </span>
          </h3>
          <form ref={form} onSubmit={sendEmail} className="field">
            <div className="form-cont">
              <input placeholder="Nombre" name="user_name"></input>
              {nameError && <p className="error-message">{nameError}</p>}
              <div className="line"></div>
              <input placeholder="Email" name="user_email"></input>
              {emailError && <p className="error-message">{emailError}</p>}
              <div className="line"></div>
              <input placeholder="Asunto" name="user_subject"></input>
              {subjectError && <p className="error-message">{subjectError}</p>}
              <div className="line"></div>
              <textarea
                name="message"
                id=""
                rows="8"
                cols="10"
                placeholder="Detalle del proyecto(opcional)"
              ></textarea>
              <button className="btn-app" type="submit" value="Send">QUIERO INNOVAR</button>
            </div>
          </form>
        </div>{" "}
        <img src={Geobot} className="geo-contact-bot" alt=""/>
        <div className="contact-date">
          <h2>DATOS DE CONTACTO</h2>
          <h3>Viamonte 5263,Chacras de Coria <br></br>Luján de Cuyo,Mendoza.</h3>
          <h3>Hola@innovis.com.ar</h3>
          <h3>+54 9 261 513 2968</h3>
          <h3>+54 9 261 516 3469</h3>
          <h3>+54 9 261 622 5439</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
