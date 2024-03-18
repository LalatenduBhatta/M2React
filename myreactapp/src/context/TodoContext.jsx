import React, { createContext, useContext } from 'react'

const todoContext = createContext()

export function TodoContext(props) {
    const todo = ["WAKE UP EARLY", "PRATICE REACT EVERYDAY"]
    return (
        <todoContext.Provider value={todo}>
            {props.children}
        </todoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(todoContext)
}

