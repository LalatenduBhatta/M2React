import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(true)
    function setNumber(num) {
        for (let i = 1; i <= 999999999; i++) { }
        return num * 10
    }
    // let getNumber = setNumber(count)
    let getNumber = useMemo(() => {
        return setNumber(count)
    }, [count])
    console.log(getNumber);

    return (
        <>
            <h1>useMemo()Hook</h1>
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
        </>
    )
}

export default UseMemo