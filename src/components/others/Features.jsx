import React from 'react'
import { FiMap } from 'react-icons/fi'
import { AiOutlineHome ,AiOutlineStar } from 'react-icons/ai'
const Features = () => {
  return (
    <div className='bg-slate-100 h-96 my-auto p-2'>
        <div className='w-4/5 mx-auto my-14 flex flex-row justify-between px-2'>
            {/* feature 1 */}
            <div className='border-2 py-5 px-4 mx-2 shadow-lg border-slate-400 rounded-md'>
                <FiMap className='w-10 h-10 mx-auto m-2' />
                <p>Map and Direction</p>
                <hr className='bg-red-800 w-1/2 mx-auto ' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil impedit reprehenderit expedita, voluptatem alias tempora deleniti molestias illum sit quasi sunt ducimus dolorum necessitatibus? Itaque iure molestiae accusantium culpa tenetur!</p>
            </div>
            {/* feature 2 */}
            <div className='border-2 py-5 px-4 mx-2 shadow-lg border-slate-400 rounded-md'>
                <AiOutlineHome className='w-10 h-10 mx-auto m-2' />
                <p>Accomodation service</p>
                <hr className='bg-red-800 w-1/2 mx-auto ' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil impedit reprehenderit expedita, voluptatem alias tempora deleniti molestias illum sit quasi sunt ducimus dolorum necessitatibus? Itaque iure molestiae accusantium culpa tenetur!</p>
            </div>
            {/* feature 3 */}
            <div className='border-2 px-4 py-5 mx-2 shadow-lg border-slate-400 rounded-md'>
                <AiOutlineStar className='w-10 h-10 mx-auto m-2' />
                <p>Greate Experience</p>
                <hr className='bg-red-800 w-1/2 mx-auto ' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil impedit reprehenderit expedita, voluptatem alias tempora deleniti molestias illum sit quasi sunt ducimus dolorum necessitatibus? Itaque iure molestiae accusantium culpa tenetur!</p>
            </div>

        </div>
    </div>
  )
}

export default Features