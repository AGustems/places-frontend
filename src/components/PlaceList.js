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
      <div key={place._id}>
        <div className="infoImg">
          <img src={place.imageUrl} alt="foto del sitio" />{" "}
        </div>
        <div className="infoTxt">
          <h3>{place.name}</h3>
          <br></br>
          <p>{place.description}</p>{" "}
        </div>{" "}
      </div>
    ));
    return (
      <div>
        <div className="place">
          <h1>Place I have been</h1>
          {places}
        </div>
      </div>
    );
  }
}

export default PlaceList;
