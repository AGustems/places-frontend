import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import CompleteSubmit from "./CompleteSubmit";
import LoadingInfo from "./LoadingInfo";

export class AddPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      lat: 0,
      lng: 0,
      direccion: "",
      name: "",
      description: "",
      candidates: [],
      saved: false,
      loading: false,
    };
  }
  handleSave = (e) => {
    e.preventDefault();
    console.log(this.state);
    const uploadData = new FormData();
    const history = this.props.history;
    uploadData.append("imageUrl", this.state.file);
    uploadData.append("name", this.state.name);
    uploadData.append("description", this.state.description);
    uploadData.append("lat", this.state.lat);
    uploadData.append("lng", this.state.lng);
    this.setState({
      ...this.state,
      loading: true,
    });

    axios
      .post("http://localhost:5000/api/places", uploadData)
      .then((response) => {
        console.log("File upload successful:", response.data);
        this.setState({ ...this.state, loading: false, saved: true });
        setTimeout(function () {
          history.push(`/list`);
        }, 5000);
      });
  };

  handleFileUpload = (e) => {
    this.setState({
      ...this.state,
      file: e.target.files[0],
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFileUpload = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/address?search=" + this.state.search)
      .then((response) => {
        this.setState({
          candidates: response.data,
          lat: response.data.candidates[0].geometry.location.lat,
          lng: response.data.candidates[0].geometry.location.lng,
          direccion: response.data.candidates[0].formatted_address,
        });
      });
  };

  render() {
    const center = {
      lat: this.state.lat,
      lng: this.state.lng,
    };
    const zoom = 15;
    const getMapOptions = (maps) => {
      return {
        disableDefaultUI: false,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "on" }],
          },
        ],
      };
    };
    const renderMarkers = (map, maps) => {
      const position = {
        lat: this.state.lat,
        lng: this.state.lng,
      };
      let marker = new maps.Marker({
        position: position,
        map,
        title: this.state.direccion,
      });
    };
    if (this.state.loading) {
      return <LoadingInfo />;
    } else if (this.state.saved) {
      return <CompleteSubmit />;
    } else {
      return (
        <div className="form-container">
          <div className="container-split">
            <h1>Add Place</h1>
            <form className="form" onSubmit={this.handleSave}>
              <div className="form-group">
                <label>Título</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Foto</label>
                <input
                  className="form-control"
                  type="file"
                  name="imageUrl"
                  onChange={this.handleFileUpload}
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Guardar"
              />
            </form>
          </div>
          <div style={{ width: "600px", height: "400px" }}>
            <GoogleMapReact
              key={this.state.direccion}
              bootstrapURLKeys={{
                key: "AIzaSyBT0RpL1Yw7Q5WC4WemS6hyJ_Y3PnSUyfY",
              }}
              defaultCenter={center}
              defaultZoom={zoom}
              options={getMapOptions}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            />
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label>Direccion</label>
                <input
                  type="text"
                  name="search"
                  value={this.state.search}
                  onChange={this.handleChange}
                  placeholder="Informe la direccion"
                  className="form-control"
                />
              </div>
              <input type="submit" value="Buscar" className="btn btn-primary" />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default AddPlaces;
