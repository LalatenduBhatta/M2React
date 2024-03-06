import React, { useContext } from 'react'
import studentContext from '../context/StudentContext'
import { useMern } from '../context/MernContext';

function Mern() {
    let studentData = useContext(studentContext)
    console.log(studentData);
    let { course, setCourse } = useMern()
    console.log(course);
    return (
        <>
            <h1>This is mern course taken by {" " + studentData.name} from
                {" " + studentData.address}</h1>
            <div>
                {course.map(e => {
                    return <li>{e}</li>
                })}
            </div>
        </>
    )
}

export default Mern