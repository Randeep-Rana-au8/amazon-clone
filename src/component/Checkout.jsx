import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM" });
  };
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
          <CheckoutProduct
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
