import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";


function Products() {

    let productsData = [
        {
            title: "Arqitel",
            description: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            live: true,
            case: false
        },
        {
            title: "Layout Land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            case: false
        },
        {
            title: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: true
        },
        {
            title: "Umault",
            description: "Bold visuals, a new typeface, iconography, and custom motion graphics were at the core of our collaboration with Umault, building a website that matches their excellence in B2B video production.",
            live: true,
            case: false
        },
        {
            title: "Singularity",
            description: "A new site for Singularity that supports their growth and showcase their true identity as industry innovators.",
            live: true,
            case: true
        },
        {
            title: "Botify",
            description: "A new website for leading SEOsolution for enterprise brands with a deep  Wordpress to Webflow migration.",
            live: true,
            case: true
        }
    ]

    const [pos, setPos] = useState(0);


    const mover = (val) => {
        setPos(val * 20)
    }


    return (
        <div className="relative mt-10">
            {productsData.map((val, index) => (
                <Product val={val}
                    key={index}
                    mover={mover}
                    count={index} />
            ))}

            <div className="absolute h-full w-full top-0 pointer-events-none">
                <motion.div className="absolute w-[29rem] h-[20rem] bg-transparent left-[44%]  overflow-hidden"
                    initial={{ y: 0, x: "-50%" }}
                    animate={{ y: pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                >
                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl"
                        >
                            <source src="./images/video/arqitel.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl"
                        >
                            <source src="./images/video/layout-land.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl "
                        >
                            <source src="./images/video/cula.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl "
                        >
                            <source src="./images/video/umault.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl "
                        >
                            <source src="./images/video/singularity.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>

                    <motion.div animate={{ y: -pos + `rem` }}
                        className="w-full h-full bg-transparent py-3 "
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
                    >
                        <video
                            autoplay='true'
                            loop="true"
                            muted="true"
                            className="object-cover h-full rounded-xl"
                        >
                            <source src="./images/video/botify.webm" type="video/mp4"></source>
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    )
}

export default Products;