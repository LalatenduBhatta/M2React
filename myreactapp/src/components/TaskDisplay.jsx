import React from 'react'
import EditModal from './EditModal'


function TaskDisplay({ tasks, dispatch }) {

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
                                    <button>EDIT</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <EditModal></EditModal>
            </div>
        </>
    )
}

export default TaskDisplay