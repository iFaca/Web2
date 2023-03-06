import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-80}
            className="menu__item"
            duration={500}
            onClick={() => {
              document.getElementById("menu__toggle").checked = false;
            }}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            className="menu__item"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              document.getElementById("menu__toggle").checked = false;
            }}
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            className="menu__item"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              document.getElementById("menu__toggle").checked = false;
            }}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            className="menu__item"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              document.getElementById("menu__toggle").checked = false;
            }}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;