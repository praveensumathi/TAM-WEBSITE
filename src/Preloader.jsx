import React from "react";
import "./tam.css"; // Import CSS for styling the preloader

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner">
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
