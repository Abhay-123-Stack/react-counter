import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("A");

  // Component On Mount
  // Component On Update
  useEffect(() => {
    console.log("C", count, name);
  }, [count, name]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
            console.log("D");
          }}
        />

        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("B");
          }}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
