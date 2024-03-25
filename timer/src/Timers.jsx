import React, { useEffect, useReducer } from 'react'
import { initialValue, timeReducer } from './reducers/timeReducer'


function Timers() {
    const [milliseconds, dispatch] = useReducer(timeReducer, initialValue)
    useEffect(() => {
        let timer
        if (milliseconds > 0) {
            timer = setInterval(() => {
                dispatch({ type: "startTimer" })
            }, 10)
        }
        return () => clearInterval(timer)
    }, [milliseconds])
    return (
        <>
            <h1>Timers</h1>
            <div className="clock" style={{ color: "black" }}>
                {milliseconds}
            </div>
            <div className="time-buttons">
                <button onClick={() => dispatch({ type: "1min" })}>1Min</button>
                <button>5Min</button>
                <button>10Min</button>
                <button>15Min</button>
                <button>30Min</button>
                <button>1hr</button>
            </div>
            <div className="inputs">
                <label htmlFor="hours">Hours</label>
                <input type="number" name="hours" id="hours" placeholder='Enter Hours' /> <br /> <br />
                <label htmlFor="minutes">Minutes</label>
                <input type="number" name="minutes" id="minutes" placeholder='Enter Minutes' />
                <button>Start Timer</button>
            </div>
        </>
    )
}

export default Timers