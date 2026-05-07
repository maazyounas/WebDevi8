import { useState, useEffect } from 'react';

const UseState = () => {
  const [value, setvalue] = useState(0);
  const [name, setName] = useState("maaz");

  function handlesetName() {
    setName("Ali");
  }

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <h3>i am usestate + useEffect</h3>

      <p>Value: {value}</p>
      <button onClick={() => setvalue(value + 1)}>
        Increment
      </button>

      <p>Name: {name}</p>
      <button onClick={handlesetName}>
        Change Name
      </button>
    </div>
  );
};

export default UseState;