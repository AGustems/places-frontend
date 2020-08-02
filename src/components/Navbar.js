import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <!-- Brand --> */}
        <Link className="navbar-brand" to="/">
          MyTravels
        </Link>

        {/* <!-- Links --> */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              My Experiences
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Add Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Administrate Experiences
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
