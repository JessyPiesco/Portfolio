import React from "react";
import { Navbar, Home, Footer } from "./";
import {Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default Main;
