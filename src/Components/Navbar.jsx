import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-bold text-red-400'>Your Jearny</div>
            <div className='flex justify-between items-center '>
                <Link to="/" className='text-xl font-bold text-red-400 m-2'>Home</Link>
                <Link to="/blog" className='text-xl font-bold text-red-400 m-2'>Blog</Link>
                <Link to="/foram"className='text-xl font-bold text-red-400 m-2'>Foram</Link>
                <Link to="/contactus"className='text-xl font-bold text-red-400 m-2'>Contect Us</Link>
                <Link to="/about"className='text-xl font-bold text-red-400 m-2'>About</Link>
                <Link to="/addblog"className='text-xl font-bold text-red-400 m-2'>Add blog</Link>
        </div>
        </div>
    </div>

  )
}

export default Navbar