
import React from "react";

function Stripe({ val }) {
    return (
        <div className="px-10 py-5 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-500 flex justify-between items-center w-[16.66%]">
            <img className="h-6" src={val.url} alt="" />
            <span className="font-semibold">{val.number}</span>
        </div>
    )
}

export default Stripe;