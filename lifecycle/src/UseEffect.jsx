import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(true)
    const [count1, setCount1] = useState(0)
    // useEffect(() => {//executes after every render of the component
    //     console.log("useEffect() without 2nd argument");
    // })
    // useEffect(() => {//it executs once after the initial render
    //     console.log("useEffect() with empty dependency")
    //     //this is similar to componentDidMount() method
    // }, [])
    // useEffect(() => {//this method executs after every dependencies updation
    //     console.log("useEffect() with count state dependency");
    //     //this is similar componentDidUpdate() method
    // }, [count])
    useEffect(() => {
        let interval = setTimeout(() => {
            console.log("useEffect() with a return function")
            setCount1(count * 100)
        }, 1000)
        return () => {//clean-up function executes before the useEffect statement
            console.log("this is clean-up function");
            clearTimeout(interval)
            //similar to componentWillUnmount()
        }
    })
    return (
        <>
            <h1>UseEffcet() hook</h1>
            {console.log("render method")}
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <div style={{
                background: color ? "blue" : "green",
                height: "300px", width: "400px"
            }}>
                <button onClick={() => setColor(!color)}>Change Color</button>
            </div>
            <h1>{count1}</h1>
        </>
    )
}

export default UseEffect