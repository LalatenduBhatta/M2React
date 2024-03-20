import React from 'react'
import { useState } from 'react';

function EditModal({ closeModal, editTask, dispatch }) {
    // console.log(editTask);
    const [upadteTask, setUpadteTask] = useState(editTask.task)
    const updateHandeler = () => {
        dispatch({
            type: "edit",
            payload: { task: upadteTask, index: editTask.index }
        })
        closeModal()
    }
    return (
        <>
            {console.log(upadteTask)}
            <div className="modal-container">
                <div className="modal">
                    <h2>EDIT YOUR TASK</h2>
                    <textarea cols="30" rows="4" value={upadteTask}
                        onChange={(e) => setUpadteTask(e.target.value)}></textarea>
                    <div className='modal-buttons'>
                        <button
                            onClick={updateHandeler}> UPADTE TASK</button>
                        <button
                            onClick={closeModal}>Close</button>
                    </div>
                    <h2 className="cross" onClick={closeModal}>X</h2>
                </div>
            </div >
        </>
    )
}

export default EditModal;