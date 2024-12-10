import React from "react";
import { RiFocus2Fill } from "react-icons/ri";
import Button from "./Button";

function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between font-dmSans border-b-[1px] border-zinc-700">
            <div className="nleft flex items-center">
                <div className="flex items-center gap-1">
                    <RiFocus2Fill className="text-[#00FF19]" size={30} />
                    <p className="font-semibold text-xl">ReFocus</p>
                </div>

                <div className="links flex gap-14 ml-32">
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        <a href="#" key={index} className="text-sm flex items-center gap-1">
                            {elem.length === 0 && (<span className="w-[2px] h-8 bg-zinc-700"></span>)}
                            {index === 1 && (<span style={{ boxShadow: "0 0 0.75em #00FF19" }} className="inline-block h-1.5 w-1.5 bg-[#00FF19] rounded-full"></span>)}
                            {elem}
                        </a>
                    ))}
                </div>
            </div>

            <Button />

        </div>
    )
}

export default Navbar;