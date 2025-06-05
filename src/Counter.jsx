import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)
    const handleincreement=()=>{
        setCount(count+1)
    }
    const handledecreement=()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={handleincreement}>Increment</button>
    <button onClick={handledecreement}>Decrement</button>
    </>
  )
}

export default Counter