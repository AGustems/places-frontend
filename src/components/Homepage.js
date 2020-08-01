import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from './Carrousel';

export class Homepage extends Component {
    render() {
        return (
            <div>
            <Carrousel />
                <h1>Places highlights</h1>
            </div>
        )
    }
}

export default Homepage
