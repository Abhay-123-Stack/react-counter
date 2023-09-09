import { useEffect, useState } from "react";

function Counter({ onDestroy, id }) {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isPaused) {
      const iid = setInterval(() => setCount((prevCount) => prevCount + direction), 1e3);
      return () => clearInterval(iid);
    }
  }, [isPaused, direction]);

  // useEffect(() => {
  //   let iid;
  //   if (isPaused) {
  //     clearInterval(iid);
  //   } else {
  //     iid = setInterval(() => {
  //       setCount((prevCount) => prevCount + direction);
  //     }, 1e3);
  //   }
  //   return () => {
  //     clearInterval(iid);
  //   };
  // }, [isPaused, direction]);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setIsPaused(!isPaused);
        }}>
        {isPaused ? "Continue" : "Pause"}
      </button>
      <button
        onClick={() => {
          setDirection(direction * -1);
        }}>
        {direction === 1 ? "Decrement" : "Increment"}
      </button>
      <button
        onClick={() => {
          onDestroy(id);
        }}>
        Destroy
      </button>
    </>
  );
}

export default Counter;
