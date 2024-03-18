import React from 'react'

function TaskInput() {
    return (
        <>
            <div className="input">
                <input type="text" name="task" id="task" placeholder='ENTER YOUR TASK HERE.....' />
                <button>ADD TASK</button>
            </div>
        </>
    )
}

export default TaskInput