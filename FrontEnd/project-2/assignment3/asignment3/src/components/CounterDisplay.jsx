import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

function CounterDisplay() {
  const { state } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h1>Counter: {state.count}</h1>
    </div>
  );
}

export default CounterDisplay;
