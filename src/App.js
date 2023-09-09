import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counters, setCounters] = useState([]);

  // const destroyCounter = (cid) => setCounters((prevCounters) => prevCounters.filter((counter) => counter.key !== cid));

  const addCounter = () => {
    const now = Date.now().toString();
    setCounters([...counters, now]);
  };

  const removeCounter = (key) => setCounters(counters.filter((ctr) => ctr !== key));

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
        <button onClick={addCounter}>More</button>
        {counters.map((ctr) => (
          <Counter
            id={ctr}
            key={ctr}
            onDestroy={removeCounter}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
