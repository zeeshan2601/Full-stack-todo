import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-gray-800 text-white p-4'>
            <div className='text-2xl font-bold'> ToDo-App </div>
            <ul className='flex justify-between bg-gray-800 text-white px-4 gap-20'>
                <li>
                    <Link to='/' className="hover:text-gray-400 transition-colors duration-200">Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar