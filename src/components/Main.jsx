import React from "react";
import { Navbar, Home, Family, Portfolio, MessageForm } from "./";
import {Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/family" element={<Family />} />
            <Route path="/message" element={<MessageForm />} />
          </Routes>
        </div>
      </div>

    </div>
  );
};

export default Main;
