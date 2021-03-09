import React from "react";
import EmployeeData from "./EmployeeData";
import Jumbotron from "./Jumbotron.js";
import Footer from "./Footer";

function Container() {
  return (
    <div>
      <Jumbotron/>
      <EmployeeData/>
      <Footer/>
    </div>
  )
}

export default Container;
