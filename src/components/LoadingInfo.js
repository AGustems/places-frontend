import React, { Component } from "react";

export class LoadingInfo extends Component {
  render() {
    return (
      <div className="form-complete-load">
        <h1 className="underlined">Loading data...</h1>
        <div>
          <img
            src="https://media.giphy.com/media/MDrmyLuEV8XFOe7lU6/giphy.gif"
            alt="loading"
          />
        </div>
        <br />
        <h4 className="subtext">
          Please, wait untill we are finish posting your experience
        </h4>
      </div>
    );
  }
}

export default LoadingInfo;
