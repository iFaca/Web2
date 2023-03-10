import React from "react";
import "./App.css";
import Main from "../src/Components/Main/Main";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnArrow from "./Components/Btn-arrow/BtnArrow";

function App() {
  return (
    <div className="App">
      <Main id="main" />
      <Services id="services" />
      <About id="about" />
      <Contact id="contact" />
      <BtnArrow />
    </div>
  );
}

export default App;