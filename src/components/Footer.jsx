import React from "react";
import { NavLink } from "react-router-dom";
import MessageForm from "./MessageForm";

const Footer = () => {
  return (
    <div id="footer" className="d-flex justify-content-center align-items-center flex-wrap">
      <span className="pr-2 ml-3 d-none d-md-block">Connect</span>
      <span className=" d-md-block">
        <a href="https://www.linkedin.com/in/jessypiesco/" className="text-light">•LinkedIn</a>
      </span>
      <span className=" d-md-block">
        <a href="https://github.com/JessyPiesco" className="text-light">•GitHub</a>
      </span>
      <NavLink className="nav-link" to="/messageForm" style={{ textDecoration: 'underline' }}>
  •Message
</NavLink>

    </div>
  );
};



export default Footer;
