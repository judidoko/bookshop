import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  // Cart Item useState
  const [cartItems, setCartItems] = useState([]);
  // Add To Cart
  const addToCart = (item) => {
    const alreadyExist = cartItems.find((cart) => cart.id === item.id);
    if (alreadyExist) {
      setCartItems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter((x) => x.id !== id);
    setCartItems(cart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          cartItemsLength: cartItems.length,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
