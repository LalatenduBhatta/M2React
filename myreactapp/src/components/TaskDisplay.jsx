import React from 'react'


function TaskDisplay({ tasks, dispatch }) {

    return (
        <>
            <div className="container">
                {
                    tasks.map(e => {
                        return (
                            <div className="card">
                                <h3>{e}</h3>
                                <div className='buttons'>
                                    <button>DEL</button>
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