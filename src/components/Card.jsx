import React from 'react'
import { LuMoveRight } from "react-icons/lu";


function Card({ width, start, para, hover = "none" }) {
    return (
        <div className={` bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h3>one heading:</h3>
                    <LuMoveRight />
                </div>
                <h1 className='text-3xl font-medium mt-5'>Whatever heading.</h1>
            </div>
            <div className='down w-full'>
                {start && (
                    <>
                        <h1 className='text-6xl font-semibold leading-none tracking-tight'>Start a project</h1>
                        <button className='px-5 py-2 rounded-full mt-5 border border-zinc-50'>Contact us</button>
                    </>
                )}

                {para && (
                    <p className='font-medium text-zinc-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                )}

            </div>
        </div>
    )
}

export default Card