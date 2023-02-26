import React from "react";
import "./BtnArrow.css";
import Arrow from "../../Assets/Img/arrow_down.png";

const BtnArrow = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <a href="#" onClick={scrollToTop}>
        <img src={Arrow} className="arrow" alt="Flecha hacia arriba" />
      </a>
    </div>
  );
};

export default BtnArrow;
