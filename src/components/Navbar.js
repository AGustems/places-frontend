import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="nav-style">
                <ul>
                    <li><Link to="/add" style={{ textDecoration: 'none' }}>Add</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
