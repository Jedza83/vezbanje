import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [countTwo]);

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h1>Click counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Count 1 +</button>
      <button
        onClick={() => {
          setCountTwo(countTwo + 1);
        }}
      >
        Count 2 +
      </button>
    </div>
  );
}

export default Counter;
