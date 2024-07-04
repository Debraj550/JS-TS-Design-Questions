import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [totalButtonClick, setTotalButtonClick] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
          setTotalButtonClick((prev) => prev + 1);
        }}
      >
        Decrement
      </button>
      <p>{count}</p>
      <p>Buttons Clicked in total: {totalButtonClick}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setTotalButtonClick((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(0);
          setTotalButtonClick(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
