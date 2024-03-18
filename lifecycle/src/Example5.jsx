import React, { useState, useEffect } from 'react'
import axios from "axios"

function Example5() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData("https://dummyjson.com/products")
    }, [])
    const fetchData = async (url) => {
        let result = await axios.get(url)
        console.log(result)
        setProducts(result.data.products)
    }
    return (
        <>
            <h1>THIS IS OUR SHOOPING WEBSITE</h1>

            <div className="row">
                {
                    products.map(e => {
                        return (
                            <div className="col-12 col-md-3 col-sm-6 card d-flex 
                            justify-content-center align-items-center">
                                <img src={e.images[0]} alt="" className='card-img-top'
                                    style={{ height: "200px", width: "200px" }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{e.brand}</h3>
                                    <h2 className="card-title">{e.title}</h2>
                                    <div className="card-text">{e.description}</div>
                                </div>
                                <div className="card-footer">
                                    <button className='btn btn-secondary'>ADD TO CART</button>
                                    <button className='btn btn-primary'>BUY NOW</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Example5