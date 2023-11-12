import React from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ShoppingCart({ cart, onRemoveItem }) {
  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="shopping-cart">
        <header>
          <ShoppingCartIcon />
          <h2>Shopping Cart</h2>
        </header>

        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onRemoveItem={onRemoveItem}
          />
        ))}

        {cart.length > 0 && <h3>Total amount: ${totalAmount.toFixed(2)}</h3>}
      </div>
    </div>
  );
}

export default ShoppingCart;
