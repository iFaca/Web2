import React from "react";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><a className="menu__item" href="#">Inicio</a></li>
      <li><a className="menu__item" href="#">Servicios</a></li>
      <li><a className="menu__item" href="#">Nosotros</a></li>
      <li><a className="menu__item" href="#">Contacto</a></li>
    </ul>

  </div>
  );
};

export default Navbar;
