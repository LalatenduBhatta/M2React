import React from 'react'
import Students from './components/Students'
import Courses from './components/Courses'
import studentContext from './context/StudentContext'
import { MernContextAPI } from './context/MernContext'
function App() {
  let student = { name: "Virat", age: "35", address: "Delhi" }
  return (
    <>
      <MernContextAPI>
        <studentContext.Provider value={student}>
          <Students></Students>
          <Courses />
        </studentContext.Provider>
      </MernContextAPI>
    </>
  )
}

export default App