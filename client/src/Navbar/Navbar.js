import React, { Component } from "react";
import Logo from "../Images/Logo.png";
import "../Navbar/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="bigNavbar">
        <div className="navbar">
          <img className="logo" src={Logo} alt="logo" />
          <h1 className="title">Thinking Cube</h1>
        </div>
      </div>
    );
  }
}

export default Navbar;
