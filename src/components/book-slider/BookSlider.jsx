import React, { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import Modal from "../modal/Modal";
import Rating from "../rating/Rating";
import "./BookSlider.css";

const BookSlider = ({ data }) => {
  // useContext
  const { addToCart } = useContext(CartContext);

  // Slider useState
  const [slideIndex, setSlideIndex] = useState(0);

  // Modal useState
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Modal
  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };

  // Handle Slider Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <>
      <div className="book__slider-container">
        {slideIndex >= 0 && (
          <i
            onClick={() => handleClick("left")}
            className="bi bi-chevron-left book__slider-arrow-left"
          ></i>
        )}
        <div
          style={{ transform: `translateX(${slideIndex * -340}px)` }}
          className="book__slide-wrapper"
        >
          {data.map((item) => (
            <div key={item.id} className="book__slide-item">
              <img
                src={item.image}
                alt={item.title}
                className="book__slide-item-img"
              />
              <h2 className="book__slide-item-title">{item.title}</h2>
              <Rating rating={item.rating} review={item.reviews} />
              <div className="book__slide-item-price">NGN{item.price}</div>
              <div className="book__slide-icons">
                <i
                  onClick={() => handleModal(item)}
                  className="bi bi-eye-fill"
                ></i>
                <i
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="bi bi-cart-plus"
                ></i>
              </div>
            </div>
          ))}
        </div>
        {slideIndex <= data.length - 1 && (
          <i
            onClick={() => handleClick("right")}
            className="bi bi-chevron-right book__slider-arrow-right"
          ></i>
        )}
        {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
      </div>
    </>
  );
};

export default BookSlider;
