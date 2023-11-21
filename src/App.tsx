import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>I LOVE LOAM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          LOAM BUTTON {count}
        </button>
        <p>
          Edit <code>WHAT</code> and save to test LOAM
        </p>
      </div>
    </>
  )
}

export default App
