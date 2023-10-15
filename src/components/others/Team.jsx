import React from 'react'


const Team = () => {
  return (
    <div className='w-full bg-fuchsia-400 py-5'>
        <p className='py-5 text-3xl'>Our Team</p>
        <div className='w-4/5 mx-auto  p-5 flex flex-row justify-center text-center bg-slate-100'>
            {/* Member1 */}
            <div className='border-2 rounded-md bg-slate-400 p-5 mx-5 '>
                <img className='w-32 h-32 mx-auto rounded-full pb-5  ' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-xl text-orange-600'>Akshay Kumar</h3>
                <h4 className='text-lg text-yellow-300'>Founder</h4>
                <h3 className='text-xl text-orange-600'>+91-999888777</h3>
            </div>

            {/* Member2 */}
            <div className='border-2 rounded-md bg-slate-400 p-5 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-xl text-orange-600'>Ranbir Kapoor</h3>
                <h4 className='text-lg text-yellow-300'>Receptionist</h4>
                <h3 className='text-xl text-orange-600'>+91-999888777</h3>
                </div>

            {/* Member3 */}
            <div className='border-2 rounded-md bg-slate-400 p-5 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-xl text-orange-600'>Varun Dhawan</h3>
                <h4 className='text-lg text-yellow-300'>Waiter</h4>
                <h3 className='text-xl text-orange-600'>+91-999888777</h3>
            </div>

            {/* Member4 */}
            <div className='border-2 rounded-md bg-slate-400 p-5 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-xl text-orange-600'>Ranbeer Kapoor</h3>
                <h4 className='text-lg text-yellow-300'>Room Attendent</h4>
                <h3 className='text-xl text-orange-600'>+91-999888777</h3>
            </div>


        </div>

    </div>
  )
}

export default Team