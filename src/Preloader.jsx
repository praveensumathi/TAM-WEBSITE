import React from "react";
import "./tam.css"; // Import CSS for styling the preloader
import { Box } from "@mui/material";
import Logo2 from "./image/Logo2.png";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spincontainer">
        <img id="pimg" src={Logo2} />
        <div className="spinner"></div>
      </div>
      <div className="textway">
        <h4 className="h1">W</h4>
        <h4 className="h2">E</h4>
        <h4 className="h3">L</h4>
        <h4 className="h4">C</h4>
        <h4 className="h5">O</h4>
        <h4 className="h6">M</h4>
        <h4 className="h7">E</h4>
      </div>
    </div>
  );
};

export default Preloader;
