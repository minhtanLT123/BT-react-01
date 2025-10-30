import React from 'react'

export default function Banner() {
    return (
        <div className='container flex flex-col text-center justify-center px-80 bg-amber-50'>
            <h1>A warm welcome!</h1>
            <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='justify-center'>Call to action</button>
        </div>
    )
}
