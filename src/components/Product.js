import React from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const Product = ({ name, id, imgURL, price }) => {
 
  const dispatch = useDispatch()
  const handleCart = () => {//on add to cart send the following info to the itemsList array
    dispatch(cartActions.addTocart({
      name,
      id,
      price,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
