import React from "react";
import { Navbar, Home } from "./";
import {Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </div>
      </div>

    </div>
  );
};

export default Main;
