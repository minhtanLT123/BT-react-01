import React from 'react'
import Banner from '../banner/Banner'


export default function Body() {
    return (
        <div className='mt-6 grid grid-cols-3 gap-4 text-center'>
            <div >
                <Banner />
            </div>
            <div>
                <h1>Item2</h1>
            </div>
            <div>
                <h1>Item3</h1>
            </div>
            <div>
                <h1>Item4</h1>
            </div>
            <div>
                <h1>Item5</h1>
            </div>
            <div>
                <h1>Item6</h1>
            </div>


        </div>
    )
}
