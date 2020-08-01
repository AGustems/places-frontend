import React, { Component } from "react";
import axios from "axios";

export class Highlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/places/highlights").then((res) => {
      console.log(res.data);
    });
  }
  render() {
    const places = this.state.places.map((place) => {
      return (
        <div key={place._id}>
          <h1>{place.name}</h1>
        </div>
      );
    });
    return <div>{places}</div>;
  }
}

export default Highlights;
