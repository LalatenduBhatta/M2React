import React from 'react'
import Child from './Child'
import { Provider } from "react-redux"
import { store } from "./redux/store/store"
import Color from './Color'

function App() {
  return (
    <>
      <Provider store={store}>
        <Child />
        <Color />
      </Provider>
    </>
  )
}

export default App