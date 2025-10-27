import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./store";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h2>🛍 Product List</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}{" "}
          <button onClick={() => dispatch(addToCart(p))}>Add</button>
        </div>
      ))}

      <h2 style={{ marginTop: 20 }}>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price} × {item.quantity}{" "}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
