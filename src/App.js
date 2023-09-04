import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([]);

  const destroyCounter = (cid) =>
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.key !== cid)
    );

  // console.log(
  //   "outer",
  //   counters.map((c) => c.key)
  // );

  // const destroyCounter = (cid) => {
  //   console.log(
  //     "inner",
  //     counters.map((c) => c.key)
  //   );
  //   setCounters(counters.filter((counter) => counter.key !== cid));
  // };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() =>
            setCounters((prevCounters) => {
              const key = Date.now().toString();
              return [
                ...prevCounters,
                <Counter
                  id={key}
                  key={key}
                  onDestroy={destroyCounter}
                />,
              ];
            })
          }>
          More
        </button>
        {counters}
      </header>
    </div>
  );
}

export default App;
