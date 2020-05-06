import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Navbar() {
  return <nav className="navbar">
    <div className="nav-center">
      <img className="logo" src={logo} alt="logo app" />
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>;
}
