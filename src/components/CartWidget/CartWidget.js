import React from "react";
import MyCart from "../images/shopping-cart-2025.svg";

const CartWidget = () => {
  return (
    <>
      <div style={{ float: "right" }}>
        <div className="shopingicons mr-auto">
          <a href="cart.html" className="icons-btn d-inline-block bag">
            <span className="icon-shopping-bag">
              <img src={MyCart} alt="" className="m-1" width="40" height="40" />
            </span>
            <span className="number">0</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
