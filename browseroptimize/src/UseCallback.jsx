import React, { useCallback, useEffect, useState } from 'react'

function UseCallback() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(true)

    const setNumber = useCallback(() => {
        return count * 100
    }, [count])
    return (
        <>
            <h1>useCallback() Hook</h1>
            <div style={{
                height: "400px",
                width: "500px",
                backgroundColor: color ? "blue" : "red",
                color: "white",
                fontSize: "30px"
            }}>
                <div>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <h2>{count}</h2>
                    <button onClick={() => setCount(count - 1)}>-</button>
                </div>
                <div>
                    <button onClick={() => setColor(!color)}>Change color</button>
                </div>
            </div>
            <GetNumber number={setNumber} />
        </>
    )
}

function GetNumber({ number }) {
    useEffect(() => {
        console.log("number value changed");
    }, [number])
    return (
        <>
            <h1>GET NUMBER COMPONENT</h1>
            <h2>{number()}</h2>
        </>
    )
}

export default UseCallback