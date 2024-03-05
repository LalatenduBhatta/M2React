import React from 'react'
import "../css/Courses.css"
import { Link, Outlet } from 'react-router-dom'
function Courses() {
    return (
        <>
            <div className="courses">
                <h1 align="center">WELCOME TO COURSES PAGE</h1>
            </div>
            <div className="main">
                <div className="links course-links">
                    <Link to="java" className="links"><li>JAVA</li></Link>
                    <Link to="mern" className="links"><li>MERN</li></Link>
                    <Link to="python" className="links"><li>PYTHON</li></Link>
                    <Link to="devops" className="links"><li>DEVOPS</li></Link>
                </div >
                <div className='child'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Courses