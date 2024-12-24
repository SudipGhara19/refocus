import React from 'react'
import Marquee from './Marquee';

function Marquees() {

    const images = [
        [
            "./images/marquee/m-1.webp",
            "./images/marquee/m-2.webp",
            "./images/marquee/m-3.webp",
            "./images/marquee/m-4.webp",
            "./images/marquee/m-5.webp",
            "./images/marquee/m-6.webp",
            "./images/marquee/m-7.webp",
            "./images/marquee/m-8.webp",
            "./images/marquee/m-9.webp",
            "./images/marquee/m-10.webp",
            "./images/marquee/m-11.webp",
            "./images/marquee/m-12.webp",
            "./images/marquee/m-13.webp",
            "./images/marquee/m-14.webp",
            "./images/marquee/m-15.webp",
            "./images/marquee/m-16.webp"
        ],
        [
            "./images/marquee/m-1.webp",
            "./images/marquee/m-2.webp",
            "./images/marquee/m-3.webp",
            "./images/marquee/m-4.webp",
            "./images/marquee/m-5.webp",
            "./images/marquee/m-6.webp",
            "./images/marquee/m-7.webp",
            "./images/marquee/m-8.webp",
            "./images/marquee/m-9.webp",
            "./images/marquee/m-10.webp",
            "./images/marquee/m-11.webp",
            "./images/marquee/m-12.webp",
            "./images/marquee/m-13.webp",
            "./images/marquee/m-14.webp",
            "./images/marquee/m-15.webp",
            "./images/marquee/m-16.webp"
        ]
    ];


    return (
        <div className='py-20'>
            {images.map(item => <Marquee imageUrls={item} />)}
        </div>
    )
}

export default Marquees