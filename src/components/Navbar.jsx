import React, { Component } from "react";
import NavbarImage from "./NavbarImage";
import NavbarItem from "./NavbarItem";

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
  render() {
    return (
      <div className="navbar">
        <NavbarImage />
        <ul className="navbar-itm">
          {items.map(({ id, content }) => (
            <NavbarItem key={id} text={content} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;
