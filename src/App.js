import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("A", name);

  useEffect(() => {
    // console.log("C", count);
  });
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={name} onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value)}} />

        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
            // console.log("B", count);
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
