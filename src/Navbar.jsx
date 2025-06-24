import React from "react";
import "./Navbar.css";

function Navbar({ activeMenu }) {
  return (
    <div className="navbar">
      <a href="/" className={activeMenu == "/" ? "active" : ""}>
        Home
      </a>
      <a href="/about" className={activeMenu == "/about" ? "active" : ""}>
        About
      </a>
      <a href="/contact" className={activeMenu == "/contact" ? "active" : ""}>
        Contact
      </a>
    </div>
  );
}

export default Navbar;
