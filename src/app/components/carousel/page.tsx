"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img src="/calculator.png" alt="image1" />
            <p className="legend">Ram</p>
          </div>
          <div>
            <img src="/2.png" alt="image2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="/3.png" alt="image3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src="/4.png" alt="image4" />
            <p className="legend">Image 4</p>
          </div>
          <div>
            <img src="/5.png" alt="image5" />
            <p className="legend">Image 5</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
