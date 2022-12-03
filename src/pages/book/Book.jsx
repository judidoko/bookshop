import React, { useState, useContext } from "react";
import "./Book.css";
import { useParams } from "react-router-dom";
import { books } from "../../data/Books";
import Rating from "../../components/rating/Rating";
import CartContext from "../../context/cartContext";

const Book = () => {
  // useContext
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const book = books.find((b) => b.id === +id); //parseInt(id) ===id

  // Quantity useState
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="book">
        <div className="book_content">
          <img
            src={book.image}
            alt={book.title}
            className="book__content-img"
          />
          <div className="book__content-info">
            <h1 className="book_title">{book.title}</h1>
            <div className="book_author">
              by <span>{book.author}</span> (Author)
            </div>
            <Rating rating={book.rating} reviews={book.reviews} />
            <div className="book__add-to-cart">
              <input
                type="number"
                min="1"
                max="100"
                className="book__add-to-cart-input"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                onClick={() => addToCart({ ...book, quantity: qty })}
                className="book__add-to-cart-btn"
              >
                <i className="bi bi-cart-plus"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <p className="book_descrition">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          deserunt iure quisquam error natus ad adipisci maiores repellat,
          doloribus neque! Blanditiis facere expedita adipisci natus nulla,
          suscipit unde repudiandae ipsum? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Odio, laboriosam. Cupiditate tempora
          itaque delectus incidunt nisi! Harum, similique maiores porro fuga
          quaerat, dicta eligendi qui consequatur aperiam dolorum voluptatibus
          minus!
        </p>
        <div className="book_icons">
          <div className="book_icon">
            <small>Print Length</small>
            <i className="bi bi-file-earmark-break"></i>
            <b>{book.printLength} Pages</b>
          </div>
          <div className="book_icon">
            <small>Language</small>
            <i className="bi bi-globe"></i>
            <b>{book.language}</b>
          </div>
          <div className="book_icon">
            <small>Publication Date</small>
            <i className="bi bi-calendar3"></i>
            <b>{book.PublicationDate}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
