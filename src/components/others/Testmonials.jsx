import React from 'react'

const Testmonials = () => {
  return (
    <div className='w-full bg-green-300'>
        <p className='text-3xl pt-5'>What People Say</p>
        {/* testmominals section */}
        <div className='w-4/5 mx-auto p-5 flex flex-row'>
            {/* testmonial 1 */}
            <div className='border-2 border-red-500 rounded-md m-2'>
                <img className='h-32 mx-auto m-3 rounded-full' src="https://th.bing.com/th/id/OIP.aO_WT8e8T7E9yoQj2jK3wwAAAA?pid=ImgDet&w=177&h=221&c=7&dpr=1.3" alt="" />
                <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vitae, laudantium ut eaque cumque dolores quia maiores praesentium at nesciunt doloremque expedita! Nostrum autem itaque eum molestias soluta esse quidem!</p>
                <h2 className='py-3'>Amitab Bacchan</h2>
            </div>

            {/* testmonial 1 */}
            <div className='border-2 border-red-500 rounded-md m-2'>
                <img className='h-32 mx-auto m-3 rounded-full' src="https://th.bing.com/th/id/OIP.aO_WT8e8T7E9yoQj2jK3wwAAAA?pid=ImgDet&w=177&h=221&c=7&dpr=1.3" alt="" />
                <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vitae, laudantium ut eaque cumque dolores quia maiores praesentium at nesciunt doloremque expedita! Nostrum autem itaque eum molestias soluta esse quidem!</p>
                <h2 className='py-3'>Abhishekh Bacchan</h2>
            </div>

            {/* testmonial  */}
            <div className='border-2 border-red-500 rounded-md m-2'>
                <img className='h-32 mx-auto m-3 rounded-full' src="https://th.bing.com/th/id/OIP.aO_WT8e8T7E9yoQj2jK3wwAAAA?pid=ImgDet&w=177&h=221&c=7&dpr=1.3" alt="" />
                <p className='p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vitae, laudantium ut eaque cumque dolores quia maiores praesentium at nesciunt doloremque expedita! Nostrum autem itaque eum molestias soluta esse quidem!</p>
                <h2 className=' py-3'>Jaya Bacchan</h2>
            </div>

        </div>
    </div>
  )
}

export default Testmonials