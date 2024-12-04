import React from "react";
import { RiFocus2Fill } from "react-icons/ri";

function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-6 flex items-center font-dmSans">
            <div className="flex items-center gap-1">
                <RiFocus2Fill className="text-[#00FF19]" size={30} />
                <p className="font-semibold text-xl">ReFocus</p>
            </div>

            <div className="links flex gap-14 ml-32">
                {["Home", "Work", "Culture"].map((elem, index) => (
                    <a href="#" className="text-sm flex items-center gap-1">
                        {index === 1 && (<span style={{ boxShadow: "0 0 0.75em #00FF19" }} className="inline-block h-1.5 w-1.5 bg-[#00FF19] rounded-full"></span>)}
                        {elem}
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Navbar;