import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <div className="card">
      {/* Used + and - instead of increment or decrement for better accessibility since these symbols are more universally known. */}
        <button  className="increment-btn" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
