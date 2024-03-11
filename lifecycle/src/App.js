import React, { useState } from 'react'
import UseEffect from './UseEffect'
// import ClassLifecycle from './ClassLifecycle'

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      {/* <button onClick={() => setFlag(false)}>Change the Flag</button>
      {flag ? <ClassLifecycle color="green" /> : <h1>Component Removed</h1>} */}
      <UseEffect />
    </>
  )
}

export default App