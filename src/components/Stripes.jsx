
import React from "react";
import Stripe from "./Stripe";

function Stripes() {

    const data = [
        { url: "./images/stripe/cssDesignAwards.png", number: 48 },
        { url: "./images/stripe/no-code.png", number: 2 },
        { url: "./images/stripe/awwards.png", number: 11 },
        { url: "./images/stripe/cssDesignAwards.png", number: 48 },
        { url: "./images/stripe/no-code.png", number: 2 },
        { url: "./images/stripe/awwards.png", number: 11 }
    ]

    return (
        <div className="flex flex-row justify-evenly my-20">
            {data.map((elem, index) => (
                <Stripe val={elem} />
            ))}
        </div>
    )
}

export default Stripes;