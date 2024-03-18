import React, { useEffect, useState } from 'react'
import axios from "axios"

function Example4() {
    let [photos, setPhotos] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(data => setPhotos(data.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <h1>USING AXIOS HTTP REQUEST</h1>
            {
                photos.map(e => {
                    return (
                        <img src={e.url} alt="" height={"100px"} width={"200px"} />
                    )
                })
            }
        </>
    )
}

export default Example4