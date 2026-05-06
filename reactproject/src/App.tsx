import Card from "./components/propsDrilling/card";
import UseState from "./components/states/useState";
import RefExample from "./components/states/ref";
import EffectExample from "./components/states/effect";
import MemoExample from "./components/states/memo";
import CallbackExample from "./components/states/callback";
import ReducerExample from "./components/states/reducer";
import UseRef from './components/states/Useref';
import { useContext } from "react";
import { AppContext } from "./components/states/context";

const arr = [
  {
    index: 1,
    title: "John",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
];

const App = () => {
  const { user, setUser } = useContext(AppContext)!;

  const pageStyle = {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "24px",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: "#1f2937",
    backgroundColor: "#f4f6fb",
  } as const;

  const boxStyle = {
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "18px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
  } as const;

  const sectionTitleStyle = {
    margin: "0 0 12px",
    fontSize: "1.05rem",
    color: "#111827",
  } as const;

  return (
    <div style={pageStyle}>
      <h1 style={{ marginBottom: "12px" }}>React State Hook Demos</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ margin: 0, fontSize: "1.2rem" }}>Context User: {user}</h2>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "1px solid #3b82f6",
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            cursor: "pointer",
          }}
          onClick={() => setUser("Ali")}
        >
          Change User
        </button>
      </div>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useState</h2>
        <UseState />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useRef</h2>
        <RefExample />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useEffect</h2>
        <EffectExample />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useMemo</h2>
        <MemoExample />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useCallback</h2>
        <CallbackExample />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useReducer</h2>
        <ReducerExample />
      </section>

      <section style={boxStyle}>
        <h2 style={sectionTitleStyle}>useRef Counter</h2>
        <UseRef />
      </section>

      {arr.map((elem) => (
        <section key={elem.index} style={boxStyle}>
          <Card title={elem.title} paragraph={elem.description} />
        </section>
      ))}
    </div>
  );
};

export default App;