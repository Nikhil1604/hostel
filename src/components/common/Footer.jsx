import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-400 w-full'>
      
      <div className='w-4/5 mx-auto flex flex-row justify-between p-5' >

        {/* <p>This is a Footer page</p> */}
        
        {/* Contact Us */}
        <div className='basis-1/3'>
          <h3 className=''>Contact Us</h3>
          <p> 9970046884</p>
          <p> info@hottel.com</p>
          <p> Rambhaji Nagar, Waghapur</p>
          <p> Yavatmal 445001</p>
        </div>

        {/* Populer News */}
        <div className='basis-1/3'>
          <h3>Populer News</h3>
          <p>Hotel or Hostel</p>
          <p>March 2023</p>
          <p>Guide for Travellers</p>
          <p>May 2023</p>
        </div>

        {/* Quick Links */}
        <div className='basis-1/3 flex flex-col'>
          <h3>Quick Links</h3>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/room'>Room</Link>
        </div>

      </div>


    </div>
  )
}

export default Footer