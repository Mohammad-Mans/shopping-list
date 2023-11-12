import React, { useState } from "react";
import "./CheckoutForm.css";

import { Button } from "@mui/material";
function CheckoutForm({ onSubmit }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <div className="checkout">
      <Button
        variant="outlined"
        className="checkout-button"
        onClick={() => setShowForm(!showForm)}
      >
        Place Order
      </Button>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name..."
            autoFocus
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            value={email}
            placeholder="Email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default CheckoutForm;
