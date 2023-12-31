import "./App.css";
import { useReducer } from "react";
import ProductGrid from "./Components/ProductGrid";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addToCart(product) {
    dispatch({
      type: "add",
      product: product,
    });
  }

  function removeFromCart(itemToRemove) {
    dispatch({
      type: "remove",
      itemToRemove: itemToRemove,
    });
  }

  function handleSubmit({ name, email }) {
    dispatch({
      type: "submit",
      name: name,
      email: email,
    });
  }

  return (
    <div className="App">
      <ProductGrid products={products} onAddToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        onRemoveItem={removeFromCart}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

function cartReducer(cart, action) {
  switch (action.type) {
    case "add": {
      const newProduct = action.product;
      const existingItem = cart.find(
        (item) => item.product.id === newProduct.id
      );

      if (existingItem) {
        return cart.map((item) =>
          item.product.id === newProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { product: newProduct, quantity: 1 }];
      }
    }
    case "remove": {
      const updatedCart = cart.map((item) =>
        item.product.id === action.itemToRemove.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      return filteredCart;
    }

    case "submit": {
      alert(`Order submitted to ${action.name} (${action.email})`);
      return [];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const products = [
  {
    id: 1,
    name: "Android Smartwatch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 10.99,
  },
  {
    id: 2,
    name: "Polaroid Camera",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 19.99,
  },
  {
    id: 3,
    name: "RayBan Sunglasses",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 14.5,
  },
  {
    id: 4,
    name: "Vehicle",
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    price: 8.75,
  },
  {
    id: 5,
    name: "Nike Sneaker",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    price: 12.99,
  },
];

export default App;
