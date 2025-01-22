import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <div className="card">
      {/* Used symbols instead of increment, decrement or reset for better accessibility since these symbols are more universally known. */}
        <button  className="increment-btn" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button className="decrement-btn" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button onClick={() => setCount(0)}>
          &#x27F3;
        </button>
      </div>
    </>
  )
}

export default App
