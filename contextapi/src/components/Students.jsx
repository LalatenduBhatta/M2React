import React, { useReducer } from 'react'
const countReducer = (state, action) => {
    switch (action.type) {
        case "inc":
            return state + action.payload;
        case "dec":
            return state - action.payload;
        default:
            return state
    }
}

function Students() {
    const [count, dispatch] = useReducer(countReducer, 0)
    return (
        <>
            <div style={{
                background: "green", color: "white",
                width: "50%", margin: "auto", textAlign: "center"
            }}>
                <h1>useReducer() hook</h1>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+1</button>
                    <button onClick={() => dispatch({ type: "dec", payload: 1 })}>-1</button>
                    <button onClick={() => dispatch({ type: "inc", payload: 10 })}>+10</button>
                    <button onClick={() => dispatch({ type: "dec", payload: 10 })}>-10</button>
                </div>
            </div>
        </>
    )
}

export default Students