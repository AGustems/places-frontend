import React, { Component } from "react";
import axios from "axios";
export class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeInfo: true,
      places: [],
    };
  }

  componentDidMount() {
    this.places();
  }

  myInfo = () => {
    this.setState({
      changeInfo: !this.state.changeInfo,
    });
  };

  places() {
    axios.get("http://localhost:5000/api/places/").then((response) => {
      this.setState({ places: response.data });
    });
  }
  render() {
    const places = this.state.places.map((place) => (
      <div className="card" key={place._id}>
        <img
          className="card-img-top"
          src={place.imageUrl}
          alt="foto del sitio"
        />
        <div className="card-body">
          <h5 className="card-title">{place.name}</h5>
          <p className="card-text">{place.description}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <h1 className="underlined">My Experiences</h1>
        <div className="container-highlights">{places}</div>
      </div>
    );
  }
}

export default PlaceList;
