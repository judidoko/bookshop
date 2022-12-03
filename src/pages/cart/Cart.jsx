import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Total Price for Cart
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <>
      <div className="cart">
        <div className="cart_title">Your Shopping Cart</div>
        <div className="cart_wrapper">
          <div className="cart_items">
            {cartItems.map((item) => (
              <div key={item.id} item={item} className="cart_item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart__item-img"
                />
                <div className="cart__item-info">
                  <div>
                    <div className="cart__item-book-title">
                      <b>Title: </b> {item.title}
                    </div>
                    <div className="cart__item-author">
                      <b>Author: </b>
                      {item.author}
                    </div>
                  </div>
                  <div>
                    <div className="cart__item-quantity">
                      <button
                        onClick={() =>
                          addToCart({ ...item, quantity: item.quantity + 1 })
                        }
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                      <b>{item.quantity}</b>
                      <button
                        disabled={item.quantity <= 1}
                        onClick={() =>
                          addToCart({ ...item, quantity: item.quantity - 1 })
                        }
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                    </div>
                    <div className="cart__item-price">
                      <span>&#8358;</span>
                      {item.price * item.quantity}
                    </div>
                    <i
                      onClick={() => removeFromCart(item.id)}
                      className="bi bi-trash-fill"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__order-summary">
            <div className="order__summary-title">ORDER SUMMARY</div>
            <div className="order__summary-item">
              <span>Subtotal</span>
              <span>
                <span>&#8358;</span>
                {totalPrice}
              </span>
            </div>
            <div className="order__summary-item">
              <span>Shopping Cost</span>
              <span>0</span>
            </div>
            <div className="order__summary-item">
              <span>Discount</span>
              <span>0</span>
            </div>
            <div className="order__summary-item">
              <span>Total</span>
              <span>
                <span>&#8358;</span>
                {totalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
