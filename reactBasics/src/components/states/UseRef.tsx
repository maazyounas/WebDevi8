import { useRef, useState } from "react";

const UseRefCounter = () => {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increaseRef = () => {
    countRef.current += 1;
    console.log("Ref value:", countRef.current);
  };

  const reRender = () => {
    setRenderCount(renderCount + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef vs useState</h2>

      <p>State Render Count: {renderCount}</p>
      <p>Ref Value (check console): {countRef.current}</p>

      <button onClick={increaseRef}>
        Increase Ref (No Re-render)
      </button>

      <button onClick={reRender}>
        Re-render Page
      </button>
    </div>
  );
};

export default UseRefCounter;