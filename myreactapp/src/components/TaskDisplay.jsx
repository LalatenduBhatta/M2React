import React from 'react'


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
        </>
    )
}

export default TaskDisplay