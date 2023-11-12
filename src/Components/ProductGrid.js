import React from "react";
import Product from "./Product";
import "./ProductGrid.css";

function ProductGrid({ products, onAddToCart  }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;
