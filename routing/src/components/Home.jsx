import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <h1>THIS IS HOME</h1>
            <Link to="/about">GO TO ABOUT</Link>
        </>
    )
}

export default Home