import React from 'react'

export function Careers() {
    return (
        <div className='w-full h-screen relative '>

            <img className='w-full h-full object-cover ' src='https://media.istockphoto.com/photos/confident-smart-eastern-student-picture-id1210216768?k=20&m=1210216768&s=612x612&w=0&h=nadTNh8BtY8pypc1h9HWsphl5gQVgmDm1pyPqj2zdA0=' alt='cereer ' />
            {/* <div className='h-full bg-gray-900/90   w-full absolute '>
            </div>  bg-red-600/50 */}
            <div className='justify-center  flex'>
            <div className=' absolute bg-red-900/80 lg:top-40 top-24 h-1200 lg:text-left item-center text-center rounded-full flex flex-col justify-center   text-white p-20'>
                 <h1 className='lg:text-6xl text-2xl font-serif  text-white font-bold '>Join us</h1>
                <p className='font-serif max-w-xs'>
                    Be a part of our team and the region's largest independent.</p>
                <div className=' text-center py-4 grid content-center justify-center '>
                    <button className='rounded-full flex content-center justify-center text-center outline
                         p-2'>.  Drop your resume </button>
                </div>
            </div>
        </div></div>
    )
}