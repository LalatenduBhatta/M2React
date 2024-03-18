import React, { useEffect, useState } from 'react'

function Example3() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(data => setUsers(data))
        //     .catch(error => console.log(error))
        fetchData()
    }, [])
    async function fetchData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        setUsers(data)
    }
    return (
        <>
            <h1>THIS IS A FETCH API COMPONENT</h1>
            {users.map(e => {
                return (
                    <li>{e.name}</li>
                )
            })}
        </>
    )
}

export default Example3