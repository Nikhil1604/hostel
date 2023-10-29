import React from 'react'
import {AiOutlineCoffee,AiOutlineWifi} from 'react-icons/ai'
import {BiSolidBath} from "react-icons/bi"
import {FaKitchenSet} from "react-icons/fa6"
import {GiWashingMachine} from 'react-icons/gi'
import {MdSevereCold,MdIron} from 'react-icons/md'
import {TbLockExclamation} from "react-icons/tb"

const Services = () => {
  return (
    <div className='w-4/5 mx-auto py-5'>
        <p className='p-5 text-3xl'>What We Offer</p>
        {/* bulk1 */}
        <div className='flex flex-row justify-between mx-5 py-5 '>
            {/* service 1 */}
            <div className='border-2 border-slate-300 rounded-md mx-2 p-5'>
                <AiOutlineCoffee className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Tea and Coffee</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 2 */}
            <div className='border-2 border-slate-300 rounded-md  mx-2 p-5'>
                <BiSolidBath className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Hot Showers</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 3 */}
            <div className='border-2 border-slate-300 rounded-md  mx-2 p-5'>
                <GiWashingMachine className='mx-auto text-3xl text-yellow-300' />    
                <h1 className='py-2 text-2xl font-semibold'>Laundry</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 4 */}
            <div className='border-2 border-slate-300 rounded-md  mx-2 p-5'>
                <MdSevereCold className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Air Conditioning</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>

        </div>

        {/* bulk2 */}
        <div className='flex flex-row justify-between mx-5 py-5'>
            {/* service 1 */}
            <div className='border-2 border-slate-300 rounded-md mx-2 p-5'>
                <AiOutlineWifi className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Free Wi-Fi</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 2 */}
            <div className='border-2 border-slate-300 rounded-md mx-2 p-5'>
                <FaKitchenSet className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Kitchen</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 3 */}
            <div className='border-2 border-slate-300 rounded-md mx-2 p-5'>
                <MdIron className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Ironing</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>
            {/* service 4 */}
            <div className='border-2 border-slate-300 rounded-md mx-2 p-5'>
                <TbLockExclamation className='mx-auto text-3xl text-yellow-300' />
                <h1 className='py-2 text-2xl font-semibold'>Lockers</h1>
                <p className='text-md text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae harum dolor, iusto quibusdam ea a aspernatur aperiam dicta quisquam?</p>
            </div>

        </div>
    
    
    
    </div>
  )
}

export default Services