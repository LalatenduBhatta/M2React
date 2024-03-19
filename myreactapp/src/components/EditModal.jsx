import React from 'react'

function EditModal() {
    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <h2>EDIT YOUR TASK</h2>
                    <textarea cols="30" rows="4"></textarea>
                    <div className='modal-buttons'>
                        <button>UPADTE TASK</button>
                        <button>Close</button>
                    </div>
                    <h2 className="cross">X</h2>
                </div>
            </div>
        </>
    )
}

export default EditModal;