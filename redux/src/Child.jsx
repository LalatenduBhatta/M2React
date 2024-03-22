import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "./redux/action/countAction"

function Child() {
    const count = useSelector((store) => store.countReducer)
    const dispatch = useDispatch()
    return (
        <>
            <h1>THIS IS OUR REDUX CONSUMER</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <h1>{count}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

export default Child