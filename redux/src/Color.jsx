import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Color() {
    const color = useSelector((store) => store.colorReducer)
    const dispatch = useDispatch()
    const [textcolor, setTextcolor] = useState("")
    const [bgcolor, setBgcolor] = useState({ red: 0, green: 0, blue: 0 })
    return (
        <>
            <div style={{
                padding: "20px",
                backgroundColor: `rgb(${color.bgColor.red},
                ${color.bgColor.green},${color.bgColor.blue})`
            }}>
                <div className="text-color">
                    <input type="text" placeholder='Enter Color Name'
                        onChange={(e) => setTextcolor(e.target.value)} />
                    <button
                        style={{ padding: "20px 10px", margin: "10px" }}
                        onClick={() => dispatch({ type: "text", payload: textcolor })}
                    >CHANGE THE TEXT COLOR</button>
                </div>
                <h1 style={{ color: color.textColor }}>REACT IS THE BEST UI</h1>
                <div className="bg-color">
                    RED: <input type="number" placeholder='enter a number 0-255'
                        onChange={(e) => setBgcolor({ ...bgcolor, red: e.target.value })}
                    /> <br />
                    GREEN: <input type="number" placeholder='enter a number 0-255'
                        onChange={(e) => setBgcolor({ ...bgcolor, green: e.target.value })}
                    /> <br />
                    BLUE: <input type="number" placeholder='enter a number 0-255'
                        onChange={(e) => setBgcolor({ ...bgcolor, blue: e.target.value })}
                    />
                </div>
                <button
                    style={{ padding: "20px 10px" }}
                    onClick={() => dispatch({ type: "bg", payload: bgcolor })}
                >CHANGE BACKGROUND COLOR</button>
            </div>
        </>
    )
}

export default Color