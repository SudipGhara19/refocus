import React from "react";
import Product from "./Product";


function Products() {

    let productsData = [
        {
            title: "Arqitel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit expedita doloribus error fugit delectus dicta.",
            live: true,
            case: false
        },
        {
            title: "TTR",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit expedita doloribus error fugit delectus dicta.",
            live: true,
            case: false
        },
        {
            title: "YIR 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit expedita doloribus error fugit delectus dicta.",
            live: true,
            case: true
        },
        {
            title: "Yahoo!",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit expedita doloribus error fugit delectus dicta.",
            live: true,
            case: true
        },
        {
            title: "Rainfall",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit expedita doloribus error fugit delectus dicta.",
            live: true,
            case: true
        }
    ]

    return (
        <div>
            {productsData.map((val, index) => (
                <Product val={val} key={index} />
            ))}
        </div>

    )
}

export default Products;