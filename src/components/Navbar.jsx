import React, { Component } from "react";
import NavbarImage from "./NavbarImage";
import NavbarItem from "./NavbarItem";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

const items = [
  {
    id: 1,
    content: "About",
  },
  {
    id: 2,
    content: "Careers",
  },
  {
    id: 3,
    content: "Events",
  },
  {
    id: 4,
    content: "Products",
  },
  {
    id: 5,
    content: "Support",
  },
];

export class Navbar extends Component {
  handleMenu = () => {
    document.getElementById("mobile-items").classList.toggle("none");
    document.getElementById("navbar").classList.toggle("navbar-mobile");
    document.getElementById("hamburger").classList.toggle("none");
    document.getElementById("close").classList.toggle("none");
  };

  render() {
    return (
      <>
        <div id="navbar" className="navbar">
          <NavbarImage />
          <ul className="navbar-itm">
            {items.map(({ id, content }) => (
              <NavbarItem key={id} text={content} />
            ))}
          </ul>
          <button onClick={this.handleMenu} className="mobile-menu none">
            <TfiMenu id="hamburger" size="3rem" color="white" className="" />
            <AiOutlineClose
              id="close"
              size="3rem"
              color="white"
              className="none"
            />
          </button>
        </div>
        <div id="mobile-items" className="navbar-mobile-container none">
          <ul className="navbar-itm-mobile">
            {items.map(({ id, content }) => (
              <NavbarItem key={id} text={content} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
