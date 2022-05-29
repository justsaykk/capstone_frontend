import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";

function ProductsPage() {
    const [productList, setProductList] = useState([])

    // URLs
    const BACKEND = process.env.REACT_APP_BACKEND

    // API
    const URL = BACKEND + "/api/product";
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {setProductList(data)})
    }, [])

    console.log("product List = ", productList)

    return (
        <div>
            <NavBar />
            <div><h1>Banner here</h1></div>
            <div><h2>Title of trek</h2></div>
            <div>
                <div className="image"><img></img></div>
            </div>
            <div className="overviewWrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempore et ut culpa repudiandae provident exercitationem eligendi natus sint, ullam obcaecati dolore itaque. Placeat vel reprehenderit laboriosam. Pariatur, distinctio facere?</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductsPage