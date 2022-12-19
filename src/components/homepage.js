import React, { useState } from "react";


import "./styles.css";

const HomePage = ({ wifiSpeed }) => {



  return (
    <div className="home-container">
      <h1>Your internet speed is...</h1>
        <div className="flex-container">
        <div className="izq">

      </div>
      <div className="der">
        <h2 className="velocidad">{wifiSpeed*8 ? wifiSpeed*8 : "Checking"}</h2>
        <p>Mbps</p>
      </div>
        </div>
    </div>
  );
};
export default HomePage;