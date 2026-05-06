import { useCallback, useState } from "react";

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleName = useCallback(() => {
    setName((prev) => (prev === "Alice" ? "Bob" : "Alice"));
  }, []);

  return (
    <div>
      <h3>useCallback Example</h3>
      <button onClick={increment}>Increment count</button>
      <button onClick={toggleName}>Toggle name</button>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default CallbackExample;
