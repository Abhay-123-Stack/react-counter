import logo from "./logo.svg";
import "./App.css";

function App() {
  let count = 0;
  console.log("A", count);
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button
          onClick={() => {
            count = count + 1;
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
