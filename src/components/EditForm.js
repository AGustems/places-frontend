import React, { Component } from "react";
import axios from "axios";
import CompleteSubmit from "./CompleteSubmit";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imageUrl: "",
      file: null,
      completed: false,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/places/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          name: response.data.name,
          description: response.data.description,
          imageUrl: response.data.imageUrl,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    const history = this.props.history;
    uploadData.append("imageUrl", this.state.file);
    uploadData.append("name", this.state.name);
    uploadData.append("description", this.state.description);

    axios
      .put(
        `http://localhost:5000/api/places/${this.props.match.params.id}`,
        uploadData
      )
      .then((response) => {
        console.log("Updated done successfully!", response.data);
        this.setState({
          ...this.state,
          completed: true,
        });
        setTimeout(function () {
          history.push(`/`);
        }, 6000);
      })
      .catch((err) => console.log(err));
  };

  handleFileUpload = (e) => {
    this.setState({
      ...this.state,
      file: e.target.files[0],
    });
  };

  render() {
    if (this.state.completed) {
      return <CompleteSubmit />;
    } else {
      return (
        <div>
          <h1>Edit your experience</h1>
          <hr />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <small className="form-text text-muted">
                Write a catchy title for your experience!
              </small>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <small className="form-text text-muted">
                Here you can write your experience with all detail :)
              </small>
              <textarea
                className="form-control"
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Image</label>
              <small className="form-text text-muted">
                Upload one of the beautiful pictures that you took during your
                trip
              </small>
              <input
                className="form-control"
                name="imageUrl"
                type="file"
                onChange={this.handleFileUpload}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              name="submit"
              value="Update experience"
            />
          </form>
        </div>
      );
    }
  }
}

export default EditForm;
