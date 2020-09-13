import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="Amazon Ad"
        />
        <div>
          <h2 className="checkout__title">Shopping Basket</h2>
        </div>
        {basket?.map((item) => (
          <div className="checkout__product">
            <img className="checkout__productImage" src={item.image} alt="" />
            <div>
              <p>{item.title}</p>
              <div className="product__rating">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
