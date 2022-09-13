import React from 'react'
import { PlayIcon } from '@heroicons/react/outline'
export function Rexona() {
    return (
        <div className='w-full h-screen relative'>
            <img className='w-full h-full object-cover' src='https://3.bp.blogspot.com/-ZUXbYMqexIo/Wvf2SQEDTgI/AAAAAAAFGNY/1HHWZAc6YDceSZc_cPdOSaVYC0_HZlcTwCLcBGAs/s1600/Rexona%2Bchampions-01.jpg' alt='dpworld' />
            {/* <div className='h-full  bg-gray-900/90   w-full absolute '>
            </div> */}
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>

            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <p className='font-serif'>Recent WORK</p>
                <h1 className='lg:text-9xl text-4xl  text-white font-bold '>Rexona</h1>
                <p className='font-serif  '>

                    A CAN
                    FOR EVERY FAN</p>
                <div className=' text-center py-4 grid content-center justify-center '>
                    <button className='rounded-full flex content-center justify-center text-center outline
                         p-2'>  <PlayIcon className='text-white  w-6  ' /> Play video </button>
                </div>
            </div>
        </div>
    )
}