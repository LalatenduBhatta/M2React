import React, { useState } from 'react'
import EditModal from './EditModal'


function TaskDisplay({ tasks, dispatch }) {
    const [isModal, setISModal] = useState(false)
    const [editTask, setEditTask] = useState({})

    const editHandeler = (task, index) => {
        setISModal(true)
        setEditTask({ task, index })
    }
    const closeModal = () => {
        setISModal(false)
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
                                    <button onClick={() => editHandeler(e, i)}>EDIT</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {isModal && <EditModal closeModal={closeModal} editTask={editTask} dispatch={dispatch} />}
            </div>
        </>
    )
}

export default TaskDisplay