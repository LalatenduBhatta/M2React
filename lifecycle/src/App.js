import React, { useState } from 'react'
import ClassLifecycle from './ClassLifecycle'

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      <button onClick={() => setFlag(false)}>Change the Flag</button>
      {flag ? <ClassLifecycle color="green" /> : <h1>Component Removed</h1>}
    </>
  )
}

export default App