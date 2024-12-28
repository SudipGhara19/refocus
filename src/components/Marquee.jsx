import React from 'react'

function Marquee({ imageUrls }) {

    return (
        <div className='flex w-full gap-20 py-10 whitespace-nowrap overflow-hidden'>
            {imageUrls.map((url, index) => <img key={index} src={url} className='h-6 flex-shrink-0' />)}
            {imageUrls.map((url, index) => <img key={index} src={url} className='h-6 flex-shrink-0' />)}
        </div>
    )
}

export default Marquee;