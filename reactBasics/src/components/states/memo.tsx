import { useMemo, useState } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubled = useMemo(() => {
    console.log("Calculating doubled value");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h3>useMemo Example</h3>
      <p>Doubled value: {doubled}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>
      <p>Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text"
      />
      <p>Text: {text}</p>
    </div>
  );
};

export default MemoExample;
