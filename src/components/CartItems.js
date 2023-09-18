import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList);// access the cart slice and use the initial state of the itemsList
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {" "}
        {cartItems.map(item => (//map the itemList
          <li key={item.id}> 
          <CartItem //provide the items info from the itemsList to cart Component
          id={item.id} 
          quantity={item.quantity}
          price={item.price} 
          total={item.totalPrice}
          name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
