import React from 'react'
import Card from '../card/Card'

export default function Item() {
    return (
        <div className='grid grid-cols-4 gap-5 container justify-items-center text-center'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )
}
