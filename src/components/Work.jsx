import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {


    const { scrollYProgress } = useScroll()
    const [images, setImages] = useState([
        { url: "./images/Arqitel.webp", top: "50%", left: "50%", isActive: false },
        { url: "./images/Layout-Land.webp", top: "56%", left: "44%", isActive: false },
        { url: "./images/Cula.webp", top: "45%", left: "56%", isActive: false },
        { url: "./images/Umault.webp", top: "60%", left: "53%", isActive: false },
        { url: "./images/Singularity.webp", top: "43%", left: "40%", isActive: false },
        { url: "./images/Botify.webp", top: "60%", left: "55%", isActive: false }
    ])

    scrollYProgress.on('change', (data) => {

        function showImages(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                )
            )
        }

        switch (Math.floor(data * 100)) {
            case 0:
                showImages([])
                break;
            case 1:
                showImages([0])
                break;
            case 2:
                showImages([0, 1])
                break;
            case 3:
                showImages([0, 1, 2])
                break;
            case 4:
                showImages([0, 1, 2, 3])
                break;
            case 5:
                showImages([0, 1, 2, 3, 4])
                break;
            case 6:
                showImages([0, 1, 2, 3, 4, 5])
                break;
        }
    })

    //-------------- function to show images on scroll -------------
    const showHideImages = () => {

    }

    return (
        <div className="w-full flex justify-center">
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