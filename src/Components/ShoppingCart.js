import React from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      <header>
        <ShoppingCartIcon />
        <h2>Shopping Cart</h2>
      </header>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShoppingCart;
