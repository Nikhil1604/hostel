import React from 'react'
import { Link } from'react-router-dom'
const Header = () => {
  return (
    <div className='bg-slate-600'>
      {/* this is a navbar */}
      <div className='w-4/5 mx-auto flex flex-col sm:flex-row sm:justify-between p-3'>
        <div className='text-xl text-slate-100'>Visit Hostel</div>
        <div className='flex'>
          <div className='ms-5 text-slate-100'><Link  to='/'>Home</Link></div>
          <div className='ms-5 text-slate-100'><Link  to='/about'>About</Link></div>
          <div className='ms-5 text-slate-100'><Link  to='/contact'>Contact</Link></div>
          <div className='ms-5 text-slate-100'><Link  to='/Room'>Room</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Header