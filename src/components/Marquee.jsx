import { motion } from 'motion/react';
import React from 'react'


function Marquee({ imageUrls, direction }) {


    return (
        <div className='flex w-full overflow-hidden'>
            <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40'
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 45, repeat: Infinity }}>
                {imageUrls.map((url, index) => <img key={index} src={url} className='h-6 flex-shrink-0' />)}
            </motion.div>

            <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40'
                initial={{ x: direction === "left" ? "0" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0" }}
                transition={{ ease: "linear", duration: 45, repeat: Infinity }}>
                {imageUrls.map((url, index) => <img key={index} src={url} className='h-6 flex-shrink-0' />)}
            </motion.div>


            {/* {imageUrls.map((url, index) => <img key={index} src={url} className='h-6 flex-shrink-0' />)} */}
        </div>
    )
}

export default Marquee;