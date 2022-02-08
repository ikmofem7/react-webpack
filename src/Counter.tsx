import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
