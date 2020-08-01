import React, { Component } from "react";

class CompleteSubmit extends Component {
  render() {
    return (
      <div className="form-complete-load">
        <h1 className="underlined">Form Submited!</h1>
        <div>
          <img
            src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif"
            alt="check"
          />
        </div>
        <br />
        <h4 className="subtext">Thank you for your contribution!</h4>
      </div>
    );
  }
}

export default CompleteSubmit;
