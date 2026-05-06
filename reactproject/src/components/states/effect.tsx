import { useEffect, useState } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Waiting...");

  useEffect(() => {
    setStatus("Component mounted");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    setStatus(`Effect run because count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <h3>useEffect Example</h3>
      <p>{status}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>
      <p>Current count: {count}</p>
    </div>
  );
};

export default EffectExample;
