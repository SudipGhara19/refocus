import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button() {
    return (
        <div className="min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-zinc-800 font-dmSans flex items-center justify-between">
            <span className="text-sm font-semibold">Get Started</span>
            <IoIosReturnRight size={25} />
        </div>
    )
}


export default Button;