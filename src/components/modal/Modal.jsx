import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import Rating from "../rating/Rating";
import "./Modal.css";

const Modal = ({ bookData, setOpenModal }) => {
  // useContext
  const { addToCart } = useContext(CartContext);
  // Quantity useState
  const [qty, setQty] = useState(1);
  // Book Data Object Destructuring
  const { image, title, inStock, rating, reviews, author, price, id } =
    bookData;
  return (
    <>
      <div onClick={() => setOpenModal(false)} className="modal_container">
        <div
          onClick={(event) => event.stopPropagation()}
          className="modal_content"
        >
          <i
            onClick={() => setOpenModal(false)}
            className="bi bi-x-circle-fill modal_icon"
          ></i>
          <div className="modal__content-img">
            <img src={image} alt={title} />
          </div>
          <div className="modal__content-info">
            <h5 className="modal__content-info-title">{title}</h5>
            <div className="modal__content-info-stock">
              <b>Status:</b> {inStock ? "In stock" : "Not in stock"}
            </div>
            <Rating rating={rating} review={reviews} />
            <div className="modal__content-info-author">
              <b>Author: </b> {author}
            </div>
            <div className="modal__content-info-price">
              <b>Price: </b>
              <span>&#8358;</span>
              {price}
            </div>
            <div className="modal__add-to-cart">
              <input
                type="number"
                min="1"
                max="100"
                className="modal__add-to-cart-input"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                onClick={() => addToCart({ ...bookData, quantity: qty })}
                className="modal__add-to-cart-btn"
              >
                <i className="bi bi-cart-plus"></i>
                Add To Cart
              </button>
            </div>
            <Link to={`/book/${id}`} className="modal__content-info-link">
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
