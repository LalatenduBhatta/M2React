import React, { useEffect, useState } from 'react';

function Stopwatch1() {
    const [millisecond, setMillisecond] = useState(0);
    const [isStart, setIsStart] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isStart) {
            intervalId = setInterval(() => {
                setMillisecond((ms) => ms + 10)
            }, 10)
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isStart]);
    let milli_sec = Math.trunc((millisecond % 1000) / 10)
    let seconds = Math.trunc(millisecond / 1000) % 60
    let minutes = Math.trunc(millisecond / 60000) % 60
    let hours = Math.trunc(millisecond / (60000 * 60)) % 24
    return (
        <>
            <h1>MY STOPWATCH1</h1>
            <div className="stopwatch">
                <div className='clock'>
                    {hours}:
                    {minutes}:
                    {seconds}:
                    {milli_sec < 10 ? '0' + milli_sec : milli_sec}
                </div>
                <div className='btns'>
                    <button onClick={() => setIsStart(true)}>START</button>
                    <button onClick={() => setIsStart(false)}>STOP</button>
                    <button onClick={() => { setIsStart(false); setMillisecond(0); }}>RESET</button>
                </div>
            </div>
        </>
    );
}

export default Stopwatch1;
