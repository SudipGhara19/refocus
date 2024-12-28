import React from 'react'

function Footer() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
                <div className='basis-1/2'>
                    <h1 className='text-[11.5rem] font-semibold tracking-tight leading-none'>refocus.</h1>
                </div>
                <div className='basis-1/2 flex gap-5'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize font-semibold'>Socials</h4>
                        {["instagram", "twitter (X?)", "linkedin"].map((item, index) =>
                            <a className='block mt-3 text-zinc-600 capitalize tracking-tight text-sm' key={index} href="#">{item}</a>
                        )}
                    </div>

                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize font-semibold'>sitemap</h4>
                        {["home", "work", "career", "contact"].map((item, index) =>
                            <a className='block mt-3 text-zinc-600 capitalize tracking-tight text-sm' key={index} href="#">{item}</a>
                        )}
                    </div>

                    <div className='basis-1/2 flex flex-col items-end'>
                        <p className='text-zinc-200 text-right text-sm mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nostrum perferendis consequuntur voluptates doloremque minima.</p>
                        <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="f-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer