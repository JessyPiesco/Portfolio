import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const brandRef = useRef(null);

  useEffect(() => {
    const brandElement = brandRef.current;
    const text = brandElement.textContent;
    const speed = 100;

    let i = 0;
    brandElement.textContent = "";

    const typeWriter = () => {
      if (i < text.length) {
        brandElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, []);

  return (
    <div className="side-navbar">
      <div className="navbar d-flex flex-column p-3">
        <h1 className="navbar-brand">
          <span className="typewriter" ref={brandRef} style={{ whiteSpace: "pre-line" }}>
            Turning Ideas into
           Reality
          </span>
        </h1>

        <div className="navbar-nav mt-4 pb-5 pt-3">
          <NavLink className="nav-link" to={"/"}>
            HOME
          </NavLink>

          <NavLink className="nav-link" to={"/projects"}>
            PORTFOLIO
          </NavLink>
          <NavLink className="nav-link" to={"/projects"}>
            FAMILY
          </NavLink>
          <NavLink className="nav-link" to="/messageForm">
  MESSAGE
</NavLink>
        </div>
        <div>
          <h6 className="pt-5">Connect with me</h6>
          <span className=" d-md-block">
        <a href="https://www.linkedin.com/in/jessypiesco/"  style={{ color: "black" }}>•LinkedIn</a>
      </span>
      <span className=" d-md-block">
        <a href="https://github.com/JessyPiesco" style={{ color: "black" }} >•GitHub</a>
      </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
