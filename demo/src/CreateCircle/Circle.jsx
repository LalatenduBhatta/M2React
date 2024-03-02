import React from 'react'

function Circle({ circle, selectCircle }) {
    console.log(circle);
    return (
        <>
            {
                circle.map((ele, index) => {
                    return (
                        <div style={{
                            height: "70px",
                            width: "70px",
                            borderRadius: "50%",
                            background: ele.isSelected ? "red" : "green"
                        }}
                            onClick={() => selectCircle(index)}
                        ></div>
                    )
                })
            }
        </>
    )
}

export default Circle