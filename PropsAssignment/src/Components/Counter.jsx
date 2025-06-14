import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <h2>Counter {count}</h2>
    <button onClick={() => setCount(count+1)}>IncreaseCount</button>
    <button onClick={() => setCount(count-1)}>DecreaseCount</button>
    </>
  )
}

export default Counter