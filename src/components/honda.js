import React from 'react'
import { PlayIcon } from '@heroicons/react/outline'
export function Honda() {
    return (
        // <div className='w-full h-[700px] absolute'>
        //          <div className='h-full  bg-gray-900/90  left-0  w-full absolute '>
        //         </div>
        //         <img src='https://d31sro4iz4ob5n.cloudfront.net/upload/car/cr-v-2020/feature/interior/cr-v-2020-lhd-premium-comfort-practical-versatility.jpg' className='mix-blend-overlay w-full h-full object-cover' />

        //         <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        //             {/* <div className='absolute h-full flex flex-col w-full  top-0 text-white p-4 justify-center text-center'> */}
        //             <p className='font-serif'>Recent WORK</p>
        //             <h1 className='sm:text-9xl text-7xl font-serif  text-white font-bold '>Honda</h1>
        //             <p className='font-serif'>
        //                 THE
        //                 POWER OF DREAMS</p>
        //             <div className=' text-center grid content-center justify-center '>
        //                 <button className='rounded-full flex content-center justify-center text-center outline
        //                  p-2'>  <PlayIcon className='text-white  w-6  ' /> Play video </button>
        //             </div>
        //         </div>
        //     </div>










        <div className='w-full h-screen relative'>
        <img
          className='w-full h-full object-cover'
          src="https://d31sro4iz4ob5n.cloudfront.net/upload/car/cr-v-2020/feature/interior/cr-v-2020-lhd-premium-comfort-practical-versatility.jpg"
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                     <p className='font-serif'>Recent WORK</p>
                     <h1 className='sm:text-9xl text-7xl font-serif  text-white font-bold '>Honda</h1>
                     <p className='font-serif'>
                         THE
                         POWER OF DREAMS</p>

                       <div className=' text-center grid content-center justify-center '>
                         <button className='rounded-full flex content-center justify-center text-center outline
                          p-2'>  <PlayIcon className='text-white  w-6  ' /> Play video </button>
                     </div>
        </div>
      </div>

    )
}