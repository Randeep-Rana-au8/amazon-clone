import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";

const CheckoutProduct = ({ image, title, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM", title: title });
  };
  return (
    <div className="checkout__product">
      <img className="checkout__productImage" src={image} alt="" />
      <div className="checkout__productInfo">
        <h5 className="checkout__ProductTitle">{title}</h5>
        <p className="checkout__ProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
