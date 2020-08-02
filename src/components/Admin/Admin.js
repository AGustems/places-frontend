import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  getPlacesData = () => {
    axios.get(`http://localhost:5000/api/places`).then((res) => {
      const places = res.data;
      this.setState({ places: places });
    });
  };

  componentDidMount() {
    this.getPlacesData();
  }

  handleFavourite = (place) => {
    const favourite = !place.highlight;
    console.log(favourite);
    axios
      .patch(`http://localhost:5000/api/places/${place._id}`, {
        highlight: favourite,
      })
      .then(() => {
        this.getPlacesData();
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/places/${id}`)
      .then(() => {
        this.getPlacesData();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const placeEdit = this.state.places.map((place) => {
      return (
        <div key={place._id}>
          <h4>{place.name}</h4>
          <Link className="btn btn-warning" to={"/edit/" + place._id}>
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(place._id)}
          >
            Delete
          </button>
          <button onClick={() => this.handleFavourite(place)} className="star">
            {place.highlight ? "★" : "☆"}
          </button>
        </div>
      );
    });
    return (
      <div>
        <h2>Manage your places</h2>
        {placeEdit}
      </div>
    );
  }
}
export default Admin;
