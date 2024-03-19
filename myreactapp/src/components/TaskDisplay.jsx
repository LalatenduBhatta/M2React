import React, { useState } from 'react'
import EditModal from './EditModal'


function TaskDisplay({ tasks, dispatch }) {
    const [isModal, setISModal] = useState(false)

    const editHandeler = () => {
        setISModal(true)
    }
    return (
        <>
            <div className="container">
                {
                    tasks.map((e, i) => {
                        return (
                            <div className="card">
                                <h3>{e}</h3>
                                <div className='buttons'>
                                    <button
                                        onClick={() => dispatch({ type: "delete", payload: i })}
                                    >DEL</button>
                                    <button onClick={editHandeler}>EDIT</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {isModal && <EditModal></EditModal>}
            </div>
        </>
    )
}

export default TaskDisplay