import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {

    const [bg, setBg] = useState("bg-none");

    const changeBG = (count) => {
        if (count === 0) {
            setBg("bg-[#5355ee]")
        } else if (count === 1) {
            setBg("bg-[#1626f3]")
        } else if (count === 2) {
            setBg("bg-[#4a576b]")
        } else if (count === 3) {
            setBg("bg-[#0f6f24]")
        } else if (count === 4) {
            setBg("bg-[#4c20cf]")
        } else if (count === 5) {
            setBg("bg-[#51249d]")
        }
    }

    return (
        <div onMouseEnter={() => { changeBG(count) }} onMouseLeave={() => setBg("bg-none")} className={`w-full py-20 h-[20rem] text-white ${bg}`}>
            <div onMouseEnter={() => { mover(count) }} className="max-w-screen-lg mx-auto flex items-center justify-between">
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