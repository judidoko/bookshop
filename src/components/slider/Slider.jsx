import React, { useState } from "react";
import "./Slider.css";
import FirstBook from "../../images/slider-img1.jpg";
import SecondBook from "../../images/slider-img2.jpg";
import ThirdBook from "../../images/slider-img3.jpg";

const Slider = () => {
  // useState for Slider
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to slide the backgroud when there is a click on the slider arrow

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <div className="slider_container">
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-double-left arrow_left"
        ></i>
        <div
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
          className="slider_wrapper"
        >
          <div className="slide first_slide">
            <div className="slide__img-wrapper">
              <img src={FirstBook} alt="" />
            </div>
            <div className="slide__info-wrapper">
              <h1 className="slide__info-title">BookShop</h1>
              <p className="slide__info-desc">
                It's not the reading that matters. It's living the adventure in
                it.
              </p>
            </div>
          </div>
          <div className="slide second_slide">
            <div className="slide__img-wrapper">
              <img src={SecondBook} alt="" />
            </div>
            <div className="slide__info-wrapper">
              <h1 className="slide__info-title">
                Enlighten Books For Everyone
              </h1>
              <p className="slide__info-desc">
                You can read at home, in the office or anywhere convenient for
                you
              </p>
            </div>
          </div>
          <div className="slide third_slide">
            <div className="slide__img-wrapper">
              <img src={ThirdBook} alt="" />
            </div>
            <div className="slide__info-wrapper">
              <h1 className="slide__info-title">Check out our New Books</h1>
              <p className="slide__info-desc">
                We can send you hard copy of the book(s) you want at home.
              </p>
            </div>
          </div>
        </div>
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-double-right arrow_right"
        ></i>
      </div>
    </>
  );
};

export default Slider;
