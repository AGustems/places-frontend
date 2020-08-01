import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/* <!-- Brand --> */}
                    <a className="navbar-brand" href="/">Logo</a>

                    {/* <!-- Links --> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Places</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">List</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Admin</a>
                        </li>

                    
                    </ul>
                    </nav>
            </div>
        )
    }
}

export default Navbar
