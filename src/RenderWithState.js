
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("A", count);
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("B", count);
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
