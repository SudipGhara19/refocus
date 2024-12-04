import React from "react";

function Work() {

    var images = [
        { url: "./images/react.jpg", top: "50%", left: "50%", isActive: true },
        { url: "./images/mongo.png", top: "56%", left: "44%", isActive: false },
        { url: "./images/nodejs.jpg", top: "45%", left: "56%", isActive: false },
        { url: "./images/expressjs.png", top: "60%", left: "53%", isActive: false },
        { url: "./images/uiux.jpg", top: "43%", left: "40%", isActive: false },
        { url: "./images/frontend.jpg", top: "60%", left: "55%", isActive: false }
    ]
    return (
        <div className="w-full">
            <div className="relative max-w-screen-xl mx-auto">
                <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none text-center">Work</h1>

                <div className="absolute h-full w-full top-0">
                    {images.map((elem, index) =>

                        elem.isActive && (
                            <img className="absolute w-64 h-64 object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                                src={elem.url}
                                style={{ top: elem.top, left: elem.left }}
                                alt="" />
                        )

                    )}
                </div>
            </div>

        </div>
    )
}


export default Work;