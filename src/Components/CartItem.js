import React from "react";
import "./CartItem.css";

function CartItem({ item, onRemoveItem }) {
  return (
    <div className="cart-item">
      <div className="item-container">
        <span className="quantity">{item.quantity}</span>
        <img src={item.product.image} alt={item.product.name} />

        <div className="item-info">
          <h4>{item.product.name}</h4>
          <h5>${item.product.price}</h5>
        </div>
      </div>
      <button onClick={() => onRemoveItem(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
