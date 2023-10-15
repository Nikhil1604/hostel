import React from 'react'
import { Link } from'react-router-dom'
const Header = () => {
  return (
    <div className='bg-slate-500'>
      {/* this is a navbar */}
      <div className='w-4/5 mx-auto flex flex-col sm:flex-row sm:justify-between p-5'>
        <div className='text-3xl'>Visit Hostel</div>
        <div className='flex'>
          <div className='m-2 text-slate-100'><Link  to='/'>Home</Link></div>
          <div className='m-2 text-slate-100'><Link  to='/about'>About</Link></div>
          <div className='m-2 text-slate-100'><Link  to='/contact'>Contact</Link></div>
          <div className='m-2 text-slate-100'><Link  to='/Room'>Room</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Header