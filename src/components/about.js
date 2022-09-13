import about from './about.webp'
import about1 from './abtimg.jpg'
import img1 from './img1.webp'
import img2 from './img2.webp'
import React from "react";
export function About() {
    return (

        <div className='w-full lg:h-[680px]  py-16  '>     
               <div className=' md:grid-cols-2 flex lg:py-24 py-8  justify-between justify-x-14   '>
                <div className='object-right py-10'>
                    <img src={img1} className="w-24 " alt='gold' />
                    <img src={img2} className="w-24 py-4" alt='bronze' />
                </div>


                <div className='justify-evenly lg:max-w-lg md:max-w-xs '>

                    <p className='text-zinc-900'>2010     ________     2021</p>
                    <h2 className='md:text-6xl max-w-md text-2xl font-bold  '>
                        A decade 
                       of creativity
                         and performance  </h2>
                    <p className='md:text-xl   text-gray-700 py-2 '>we are digital natives with a thirst for making good work, work. With specialised,
                        performance-driven communication,
                        Traffic Digital helps you to unlock
                        the true value of marketing and media.</p>
                    <button className='outline rounded-full text-blue-800 hover:bg-blue-800 p-2'>. Learn more</button>
                </div>
                <div className=' w-[500px] lg:py-1  py-8'>
                    <img src={about} className='h-[280px] object-cover object-left  lg:h-full w-[440px]' />
                </div>
            </div>
        </div>
    )
}
{/* <div className=' mr-8 py-25 '>
<img src={img1} className="w-20 mr-8" alt='gold' />
<img src={img2} className="w-20 py-4" alt='bronze' />
</div> */}
{/* <div className=' justify-center grid md:px-20 md:grid-cols-2  py-16'>
                    <div className='py-8 md:px-8 px-4  absolute  mr-8'> */}
