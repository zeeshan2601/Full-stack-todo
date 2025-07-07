import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-800 text-white p-4'>
          <div className='text-center'>
            <p> &copy; {new Date().getFullYear()} ToDo-App. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer