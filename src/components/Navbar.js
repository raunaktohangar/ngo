import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>VolunteerConnect</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
