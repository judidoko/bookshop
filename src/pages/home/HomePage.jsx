import React from "react";
import "./HomePage.css";
import HeadingTitle from "../../components/heading_title/HeadingTitle";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/Books.js";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Slider />
        <Services />
        {/* Most Gifted */}
        <HeadingTitle title="Most Gifted To Our Regular Customers" />
        <BookSlider data={books} />
        {/* Best Selling books */}
        <HeadingTitle title="Best Selling Books" />
        <BookSlider data={books} />
        {/* Most Wished for */}
        <HeadingTitle title="Most Wished For" />
        <BookSlider data={books} />
      </div>
    </>
  );
};

export default HomePage;
