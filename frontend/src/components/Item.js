import React, { useState } from "react";

const Item = ({ item }) => {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const handlePlus = () => {
    setCount(() => count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };
  const pushToCart = () => {};
  console.log(cartItems);
  return (
    <div style={{ border: "1px solid black" }}>
      <div>{item.name}</div>
      <div>{item.image}</div>
      <div>{item.price * count}</div>

      <div>{count}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={pushToCart}>담기</button>
    </div>
  );
};

export default Item;
