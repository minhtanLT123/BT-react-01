import React from 'react'

export default function Banner() {
    return (
        <div className='container flex flex-col justify-center bg-amber-50 p-5'>
            <h1>A Warm Welcome!</h1>
            <p className='text-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum repudiandae, fugit consequuntur similique dolore incidunt dicta, unde quisquam officiis dolorem repellendus nesciunt molestiae sint molestias quae cumque voluptates ex?</p>
            <button className='justify-center text-[25px] items-center  w-45 h-15'>Call to action!</button>
        </div>
    )
}
