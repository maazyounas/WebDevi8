import { useRef, useState } from "react";

const RefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [savedValue, setSavedValue] = useState("");

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const saveValue = () => {
    setSavedValue(inputRef.current?.value ?? "");
  };

  return (
    <div>
      <h3>useRef Example</h3>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={focusInput}>Focus input</button>
      <button onClick={saveValue}>Save value</button>
      <p>Saved value: {savedValue}</p>
    </div>
  );
};

export default RefExample;
