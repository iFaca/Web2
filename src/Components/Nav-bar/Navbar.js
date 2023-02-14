import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Inicio</a></li>
      <li><a class="menu__item" href="#">Servicios</a></li>
      <li><a class="menu__item" href="#">Nosotros</a></li>
      <li><a class="menu__item" href="#">Contacto</a></li>
    </ul>
  </div>
  );
};

export default Navbar;
