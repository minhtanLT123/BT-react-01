import React from 'react'
import "../../index.css"

export default function Header() {
    return (
        <header className="bg-slate-700 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Tailwindcss</h1>
                <nav className="space-x-4">
                    <a href="#" className="hover:text-gray-200">Home</a>
                    <a href="#" className="hover:text-gray-200">About</a>
                    <a href="#" className="hover:text-gray-200">Contact</a>
                </nav>
            </div>
        </header>
    )
}
