import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";        // ADD THIS
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <div className="navbar">
              {/* ADD THIS */}
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
      </div>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />           {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
