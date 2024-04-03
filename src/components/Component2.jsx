import React, { useState } from 'react'

function Component2() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const increment5 = () => {
    increment()
    increment()
    increment()
    increment()
    increment()
  }

  return (
    <div style={{ width: 'max-width', textAlign: 'center', margin: '10px auto'}}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  )
}

export default Component2