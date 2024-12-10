import React from "react";
import Button from "./Button";

function Product({ val }) {
    return (
        <div className="w-full py-20 text-white">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between">
                <h1 className="capitalize text-6xl font-medium">{val.title}</h1>
                <div className="w-1/3">
                    <p className="mb-10">{val.description}</p>
                    <div className="flex items-center gap-10">
                        {val.live && <Button title="Live Website" />}
                        {val.case && <Button title="Case Study" />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product;