import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import jessy from "./images/jessy.png";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center pt-3 " >
      <img
                src={jessy}
                alt="Jessica Picture"
                className="img-fluid rounded-circle"
                style={{ width: "20%", height: "20%" }}
                title="Jessy's LinkedIn"
              />
      <div>
        <h1>Hi, I am Jessy</h1>

        <h6>Software Developer</h6>
        <h6>Mother</h6>
        <h6>Geek</h6>
        </div>

 </div>)
};

export default Home;
