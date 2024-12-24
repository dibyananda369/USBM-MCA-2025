import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

function CounterControls() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default CounterControls;
