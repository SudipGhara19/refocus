import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import { motion } from 'motion/react'


function Card({ width, start, para, hover = "false" }) {

    return (
        <motion.div whileHover={{ backgroundColor: hover === "true" && "#6204ce", padding: "25px" }} className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h3>{para ? "Work" : "Get in touch"}</h3>
                    <LuMoveRight />
                </div>
                <h1 className='text-3xl font-medium mt-5'>
                    {para ? "Projects & Case Studies" : "Let's get into it together"}
                </h1>
            </div>
            <div className='down w-full'>
                {start && (
                    <>
                        <h1 className='text-6xl font-semibold leading-none tracking-tight'>Start a project</h1>
                        <button className='px-5 py-2 rounded-full mt-5 border border-zinc-50'>Contact us</button>
                    </>
                )}

                {para && (
                    <p className='font-medium text-zinc-500 text-sm'>Web Design, Develosp Webflow & Creative Development</p>
                )}

            </div>
        </motion.div>
    )
}

export default Card