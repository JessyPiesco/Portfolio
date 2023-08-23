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

          <NavLink className="nav-link" to={"/portfolio"}>
            PORTFOLIO
          </NavLink>
          <NavLink className="nav-link" to={"/family"}>
            FAMILY
          </NavLink>
          <NavLink className="nav-link" to="/message">
  MESSAGE
</NavLink>
        </div>
        <div className="pt-5">
  <h6>Connect with me</h6>
  <div className="d-md-block">
    <a href="https://www.linkedin.com/in/jessypiesco/" className="text-dark">•LinkedIn</a>
  </div>
  <div className="d-md-block">
    <a href="https://github.com/JessyPiesco" className="text-dark">•GitHub</a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
