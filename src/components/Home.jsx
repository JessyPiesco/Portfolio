import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import jessy from "./images/jessy.png";

const Home = () => {
  return (
    <div className="home pt-3 d-flex flex-column flex-md-row align-items-center">
      <div className="homePic col-12 col-md-6">
        <img
          src={jessy}
          alt="Jessica Picture"
          className="img-fluid rounded-circle"
          style={{ width: "70%" }}
          title="Jessy's LinkedIn"
        />
      </div>
      <div className="homeWords col-12 col-md-6">
        <h1>Hi, I am Jessy</h1>
        <h6>Software Developer</h6>
        <h6>Mother</h6>
        <h6>Geek</h6>
      </div>
    </div>
  );
};

export default Home;
