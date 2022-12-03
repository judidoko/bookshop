import React, { useContext, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

const Header = () => {
  // Usestate for navbar Toggle
  const [toggle, setToggle] = useState(false);
  // useContext
  const { cartItemsLength } = useContext(CartContext);

  return (
    <header className="header">
      {/* =====Toggle Section ===== */}
      <div settoggle={{ setToggle, toggle }} className="header_top">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="header__top-menu"
        >
          {toggle ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        {/* ===== Top Header Section ===== */}
        <div className="header__top-phone">
          <i className="bi bi-telephone-fill"></i>
          1234567890
        </div>
        <div className="header__top-text">Welcome To Emeka Online Bookshop</div>
        <Link to="/login" className="header__top-link">
          <i className="bi bi-person-fill"></i>
          Login
        </Link>
      </div>
      {/* Middle Header Section */}
      <div className="header_middle">
        <Link to="/" className="header__middle-logo">
          <b>Book</b>
          <i className="bi bi-book"></i>
          <b>Shop</b>
        </Link>
        <div className="header__middle-searchbox">
          <input
            className="header__middle-search-input"
            type="search"
            name=""
            id=""
            placeholder="Search For Books ..."
          />
          <i className="bi bi-search"></i>
        </div>
        <Link to="/cart" className="header__middle-cart-wrapper">
          {cartItemsLength > 0 && (
            <b className="cart_notification">{cartItemsLength}</b>
          )}
          <i className="bi bi-cart2"></i>
        </Link>
      </div>
      {/* Navbar Section */}
      <nav
        className="navbar"
        style={{ left: toggle && "0" }}
        settoggle={{ setToggle, toggle }}
      >
        <ul className="navbar_links">
          <Link to="/" onClick={() => setToggle(false)} className="navbar_link">
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setToggle(false)}
            className="navbar_link"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setToggle(false)}
            className="navbar_link"
          >
            Contact Us
          </Link>
          <Link
            to="/register"
            onClick={() => setToggle(false)}
            className="navbar_link"
          >
            Register
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
