import React from "react";
import "./CartItem.css";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="item-container">
        <img src={item.image} alt={item.name} />

        <div className="item-info">
          <h4>{item.name}</h4>
          <h5>${item.price}</h5>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
