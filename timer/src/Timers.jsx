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
    let milli_sec = Math.trunc((milliseconds % 1000) / 10)
    let seconds = Math.trunc(milliseconds / 1000) % 60
    let minutes = Math.trunc(milliseconds / 60000) % 60
    let hours = Math.trunc(milliseconds / (60000 * 60)) % 24
    return (
        <>
            <h1>Timers</h1>
            <div className="clock" style={{ color: "black" }}>
                {hours}:{minutes}:{seconds}:{milli_sec}
            </div>
            <div className="time-buttons">
                <button onClick={() => dispatch({ type: "1min" })}>1Min</button>
                <button onClick={() => dispatch({ type: "5min" })}>5Min</button>
                <button onClick={() => dispatch({ type: "10min" })}>10Min</button>
                <button onClick={() => dispatch({ type: "15min" })}>15Min</button>
                <button onClick={() => dispatch({ type: "30min" })}>30Min</button>
                <button onClick={() => dispatch({ type: "1hr" })}>1hr</button>
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