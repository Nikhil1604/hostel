import React from 'react'


const Team = () => {
  return (
    <div className='w-full bg-slate-100 py-5 pb-16'>
        <p className='py-5 text-3xl'>Our Team</p>
        <div className='w-4/5 mx-auto  p-5 flex flex-row justify-center text-center bg-slate-100 '>
            {/* Member1 */}
            <div className='border-2 rounded-md bg-slate-200 p-10 mx-5 '>
                <img className='w-32 h-32 mx-auto rounded-full pb-5  ' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-2xl text-slate-800'>Akshay Kumar</h3>
                <h4 className='text-md text-yellow-400'>Founder</h4>
                <h3 className='text-lg text-slate-600'>+91-999888777</h3>
            </div>

            {/* Member2 */}
            <div className='border-2 rounded-md bg-slate-200 p-10 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-2xl text-slate-600'>Ranbir Kapoor</h3>
                <h4 className='text-md text-yellow-400'>Receptionist</h4>
                <h3 className='text-lg text-slate-600'>+91-999888777</h3>
                </div>

            {/* Member3 */}
            <div className='border-2 rounded-md bg-slate-200 p-10 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-2xl text-slate-600'>Varun Dhawan</h3>
                <h4 className='text-md text-yellow-400'>Waiter</h4>
                <h3 className='text-lg text-slate-600'>+91-999888777</h3>
            </div>

            {/* Member4 */}
            <div className='border-2 rounded-md bg-slate-200 p-10 mx-5 '>
                <img className='w-32 h-32 rounded-full mx-auto pb-5' src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg" alt="other" />
                <h3 className='text-2xl text-slate-600'>Ranbeer Kapoor</h3>
                <h4 className='text-md text-yellow-300'>Room Attendent</h4>
                <h3 className='text-lg text-slate-600'>+91-999888777</h3>
            </div>


        </div>

    </div>
  )
}

export default Team