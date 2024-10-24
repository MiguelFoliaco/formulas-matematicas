import React from 'react'
import Image from 'next/image'


export const Banner = () => {
    return (
        <div>
            <Image
                alt='banner_home'
                quality={100}
                className='custom-filter block mx-auto w-10/12 h-80 object-cover rounded-md rounded-t-none'
                width={400}
                height={200}
                src={'/geometry-1023846_1280.webp'}
            />
        </div>
    )
}
