import React, { useState } from 'react'
import Circle from './Circle'

function Main() {
    const [circle, setCircle] = useState([])
    const createCircle = () => {
        let obj = {
            id: Math.trunc(Math.random() * 1000),
            isSelected: false
        }
        setCircle([...circle, obj])
    }
    const selectCircle = (index) => {
        circle[index].isSelected = !circle[index].isSelected
        setCircle([...circle])
    }
    const deleteCircle = () => {
        setCircle(() => {
            return circle.filter(ele => !ele.isSelected)
        })
    }
    return (
        <div>
            <div>
                <button onClick={createCircle}>CREATE CIRCLE</button>
                <button onClick={deleteCircle}>DELETE CIRCLE</button>
            </div>
            <div>
                <h3>No of circles:{circle.length}</h3>
                <h3>No of selected circles:{circle.filter(e => e.isSelected).length}</h3>
            </div>
            <div style={{
                display: "flex",
                gap: "20px", flexWrap: "wrap"
            }}>
                <Circle circle={circle} selectCircle={selectCircle} />
            </div>
        </div>
    )
}

export default Main