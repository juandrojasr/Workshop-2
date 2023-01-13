import React, { Component } from "react";
import Navbar from "./Navbar";
import "../styles/index.scss";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar />
        <div className="main-header">
          <p>IMMERSIVE</p>
          <p>EXPERIENCES</p>
          <p>THAT DELIVER</p>
        </div>
      </header>
    );
  }
}

export default Header;
