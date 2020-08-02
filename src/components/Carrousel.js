import React, { Component } from "react";

export class Carrousel extends Component {
  render() {
    return (
      <div
        id="video-carousel-example2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <video
                className="video-fluid z-depth-1"
                autoPlay
                loop
                controls
                muted
              >
                <source
                  src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="mask rgba-indigo-light"></div>
            </div>

            <div className="carousel-caption">
              <div className="animated fadeInDown">
                <h3 className="h3-responsive">Mi vida es viajar</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrousel;
