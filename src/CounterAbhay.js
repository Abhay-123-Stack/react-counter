// import { Toggle } from "./Toggle"

// export const Counter = () => {
//     const logState = state => {
//         console.log("Toggled:", state)
//     }

//     return (
//         <Toggle
//             label="Toggle me"
//             toggled={true}
//             onClick={logState }
//         />
//     )
// }















import { useEffect, useState } from "react";

function Counter(){
    const [ count, setCount ] = useState(0);
    const [ direction, setDirection ] = useState(1);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(count => count + 1);
            console.log("useEffect")
          }, 1000);
         return () => {
            clearInterval(interval);
            console.log(count);
        };
    },[count])

    return(
        <div className="App">
      <header className="App-header">
        <input
          type="text"
        //   value={name}
          onChange={(e) => {
            console.log(e.target.value);
            // setName(e.target.value);
            // console.log("D");
          }}
        />

        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("B");
          }}>
          Decrement
        </button>
      </header>
    </div>

    )
}

export default Counter;