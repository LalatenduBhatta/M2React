import React, { useEffect, useState } from 'react';

function Stopwatch() {
    const [millisecond, setMillisecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [isStart, setIsStart] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isStart) {
            intervalId = setInterval(() => {
                setMillisecond((ms) => {
                    let ms_time = ms + 10;
                    if (ms_time >= 1000) {
                        setSecond((s) => {
                            let s_time = s + 1;
                            if (s_time >= 60) {
                                setMinute((m) => m + 1);
                                return 0;
                            }
                            return s_time;
                        });
                        return 0;
                    }
                    return ms_time;
                });
            }, 10);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isStart]);

    return (
        <>
            <h1>MY STOPWATCH</h1>
            <div className="stopwatch">
                <div className='clock'>
                    {minute < 10 ? '0' + minute : minute}
                    :
                    {second < 10 ? '0' + second : second}
                    :
                    {millisecond < 10 ? '00' + millisecond :
                        millisecond < 100 ? '0' + millisecond : millisecond}
                </div>
                <div className='btns'>
                    <button onClick={() => setIsStart(true)}>START</button>
                    <button onClick={() => setIsStart(false)}>STOP</button>
                    <button onClick={() => { setIsStart(false); setMinute(0); setSecond(0); setMillisecond(0); }}>RESET</button>
                </div>
            </div>
        </>
    );
}

export default Stopwatch;
