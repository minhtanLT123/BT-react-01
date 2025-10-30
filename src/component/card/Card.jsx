import React from 'react'

export default function Card() {
    return (
        <div className='flex flex-col border-2'>
            <div className=' bg-gray-300 flex justify-center items-center p-6 h-40 '>
                500 X 325
            </div>

            <div className='cardMid m-6'>
                <h2 className='m-3'>Card title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur iure cum assumenda quia est magnam placeat veniam delectus perspiciatis libero nisi id vitae molestias eius, ratione doloremque. Distinctio, ab?</p>
            </div>

            <div className='cardBot bg-gray-300 p-6' >

                <button>Find Out More!</button>
            </div>


        </div>
    )
}
