import React from 'react';
import './BtnArrow.css'
import Arrow from "../../Assets/Img/arrow_down.png"
const BtnArrow = () => {

    return (
        <div>
              <a><img src={Arrow} className="arrow"></img></a>
        </div>
    );
}

export default BtnArrow;
