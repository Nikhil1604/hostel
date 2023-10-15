import React from 'react'
import Hero from '../others/Hero'
import Features from '../others/Features'
import Team from '../others/Team'
import Services from '../others/Services'
import Testmonials from '../others/Testmonials'
import Time from '../others/Time'
import Save from '../others/Save'

const Home = () => {
  return (
    <div className='w-full mx-auto my-auto h-full text-center '>
        <div className='text-3xl'>This is a Home Page</div>
        <Hero/>
        <Features />
        <Time />
        <Team />
        <Save />
        <Services />
        <Testmonials  />
        
    </div>
  )
}

export default Home