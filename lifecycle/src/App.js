import React, { useState, Suspense } from 'react'
import UseEffect from './UseEffect'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'
// import ClassLifecycle from './ClassLifecycle'

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <>
      {/* <button onClick={() => setFlag(false)}>Change the Flag</button>
      {flag ? <ClassLifecycle color="green" /> : <h1>Component Removed</h1>} */}
      {/* <UseEffect /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      <Suspense fallback={<Loading />}>
        <Example5 />
      </Suspense>
    </>
  )
}

function Loading() {
  return (
    <h1> 😵‍💫Loading.......</h1>
  )
}


export default App