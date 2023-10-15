import React from 'react'

const Time = () => {
  return (
    <div className='w-full bg-yellow-300'>
        <p className='text-3xl p-5'>More Than 10 Years Of Following the dream </p>
        <div className='w-4/5 mx-auto flex flex-row justify-around p-5'>
            <div className='border-4 border-stone-500 p-10 m-3 '>
                <h3 className='text-5xl font-bold'>12</h3>
                <h2 className='text-2xl'>Awards</h2>
            </div>

            <div className='border-4 border-stone-500 p-10 m-3 '>
                <h3 className='text-5xl font-bold'>1200</h3>
                <h2 className='text-2xl'>Students</h2>
            </div>

            <div className='border-4 border-stone-500 p-10 m-3 '>
                <h3 className='text-5xl font-bold'>12k</h3>
                <h2 className='text-2xl'>Coffee</h2>
            </div>

        </div>
    </div>
  )
}

export default Time