import React, { Component } from "react";
import axios from "axios"

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event =>  {
      event.preventDefault()
        axios.get("http://localhost:5000/api/address?search=" + this.state.search)
        .then(response => {
            console.log(response.data)
            const results = response.data.candidates.map((place, index) => (
                <div key={index}>
                    <h3>{place.formatted_address}</h3>
                </div>
            ))

            this.setState({...this.state, results: results})
        })
  }

  render() {

    return (
      <div className="container mt-4">
        <h1>Search</h1>
        <form className="form-row mb-5" onSubmit={this.handleSubmit}>
          <div className="col-auto">
            <input
              type="text"
              name="search"
              onChange={this.handleChange}
              value={this.state.search}
              className="form-control"
            />
          </div>

          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <hr />

        <h2>Places near "{this.state.search}"</h2>
        {this.state.results}
      </div>
    );
  }
}

export default Search;
