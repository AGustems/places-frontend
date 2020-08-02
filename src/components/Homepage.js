import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./Carrousel";
import Highlights from "./Highlights";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Carrousel />
        <h1 className="underlined">Places highlights</h1>
        <Highlights />
      </div>
    );
  }
}

export default Homepage;
