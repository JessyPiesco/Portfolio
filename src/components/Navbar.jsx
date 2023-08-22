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
    <div className="navbar">
    <h1 className="navbar-brand">
      <span className="typewriter" ref={brandRef}>
        Turning Ideas into Digital Reality
      </span>
    </h1>

    <div className="navbar-nav d-flex justify-content-center mr-3 pr=4">
      <NavLink className="nav-link mr-3" to={"/"}>
        HOME
      </NavLink>

      {/* <NavLink className="nav-link" to={"/projects"}>
        PORTFOLIO
      </NavLink> */}
    </div>
  </div>

  );
};

export default Navbar;
