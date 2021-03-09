import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return(
    <jumbotron fluid>
      <container>
        <div class="background">
        <h1 style={{ fontSize: 65, color: "white", textAlign: "center"}}>Employee Directory</h1>
        <p style={{ fontSize: 28, color: "white", textAlign: "center"}}>
          Search or Sort through Employees Below.
        </p>
        </div>
      </container>
    </jumbotron>
  );
}

export default Jumbotron;