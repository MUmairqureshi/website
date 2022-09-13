import { PlayIcon } from '@heroicons/react/outline'
import React from "react";
import unicef from './img4.jpg'
export function Unicef() {
    return (
        <div>
            <div className="w-full  h-screen relative">
                {/* <div className="relative justify-center "> */}
                        <img className='w-full h-full object-cover' src='https://scoopempire.com/wp-content/uploads/2019/06/unicef-4.jpg' alt="unicef" />


                    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                        <p >Recent Work</p>

                        <div className='text-center'>
                            <h1 className='font-bold  md:text-9xl text-7xl'>Unicef </h1>
                            < p className=' text-center'>    THE CLASS OF NO TOMORROWM</p>
                        </div>
                        <div className=' text-center py-4 grid content-center justify-center '>

                            <button className='rounded-full flex content-center justify-center text-center outline
                          p-2'>  <PlayIcon className='text-white  w-6  ' /> Play video </button>
                        </div>
                    </div>

                </div>
 {/* ?           </div> */}

        </div>
    )
}