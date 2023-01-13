import React, { Component } from "react";

export class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return <li>{this.text}</li>;
  }
}

export default NavbarItem;
