import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h1>React Counter and Calculator</h1>

      <div className="box">
        <h2>Counter Application</h2>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className="box">
        <h2>Simple Calculator</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={() => setResult(Number(num1) + Number(num2))}>
          Addition (+)
        </button>

        <button onClick={() => setResult(Number(num1) - Number(num2))}>
          Subtraction (-)
        </button>

        <button onClick={() => setResult(Number(num1) * Number(num2))}>
          Multiplication (*)
        </button>

        <button onClick={() =>
          setResult(Number(num2) === 0
            ? "Cannot divide by zero"
            : Number(num1) / Number(num2))
        }>
          Division (/)
        </button>

        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
