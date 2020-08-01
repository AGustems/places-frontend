<<<<<<< HEAD
import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>navbar</h1>
            </div>
        )
    }
=======
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          {/* <!-- Brand --> */}
          <a className="navbar-brand" href="/">
            PLACES
          </a>

          {/* <!-- Links --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/list">
                List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
>>>>>>> 0e5f60961d5841e525bca3b799394fdd5a86d6b3
}

export default Navbar;
