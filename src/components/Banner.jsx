import React from 'react';
import slide1 from "../assets/slide1.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"

const Banner = () => {
    return (
        <div>
            {/* slider part start */}
            <div className="w-10/12 mx-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src={slide1}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src={slide2}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src={slide3}
                    className="w-full rounded-2xl" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
            </div>
            {/* slider end */}
        </div>
    );
};

export default Banner;