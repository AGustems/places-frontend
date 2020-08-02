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
      this.setState({ places: res.data });
    });
  }
  render() {
    const places = this.state.places.map((place) => {
      return (
        <div className="card" key={place._id}>
          <img className="card-img-top" src={place.imageUrl} alt={place.name} />
          <div className="card-body">
            <h5 className="card-title">{place.name}</h5>
            <p className="card-text">{place.description}</p>
          </div>
        </div>
      );
    });
    return <div className="container-highlights">{places}</div>;
  }
}

export default Highlights;
