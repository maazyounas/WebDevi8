import { useReducer } from "react";

type State = {
  count: number;
  text: string;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "setText"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { count: 0, text: "" };
    case "setText":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "" });

  return (
    <div>
      <h3>useReducer Example</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>
        <input
          value={state.text}
          onChange={(e) => dispatch({ type: "setText", payload: e.target.value })}
          placeholder="Type text"
        />
      </div>
      <p>Text: {state.text}</p>
    </div>
  );
};

export default ReducerExample;
