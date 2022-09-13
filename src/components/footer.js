import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
export function Footer() {
    return (
        <div className="w-full mx-auto h-screen relative lg:py-8 py-8 ">
            <div className='absolute text-2xl lg:text-6xl w-full  text-center lg:border-b-2  font-bold '>
                <div className="px-4 max-w-[1240px] mx-auto lg:py-16 justify-center item-center content-center placeholder: flex flex-col sm:flex-row  space-x-10 ">
                    <h1 className=" text-black  ">Let’s  Create Together </h1>

                    <div className="hidden md:flex justify-between space-x-4 py-4">
                        <span className="rounded-full bg-zinc-800  p-3 h-2 w-2  "></span>
                        <span className="rounded-full bg-zinc-800  p-3 h-2 w-2 "></span>
                        <span className="rounded-full bg-red-500  p-3 h-2 w-2 "></span>
                    </div>
                    <h1 className="  text-red-500">  Get in touch</h1>
                </div>
            </div>

            <div className=" grid grid-cols-4 gap-44 overflow-x-auto  py-8 justify-between lg:px-44  px-8  mx-auto  item-center   content-center pt-24 lg:pt-64 lg:py-8  w-full  border-b-2 ">


                <div className="max-w-xl">

                    <div className=" text-zinc-900 text-xs	w-[140px]">
                        {/* <div className="flex max-w-sm space-x-4 "> */}
                        <p className=" text-zinc-900 flex items-center justify-center md:justify-start">
                            <img src="https://cdn-icons-png.flaticon.com/128/3850/3850032.png" className="w-14   bg-white " />
                            UAE</p>
                        {/* </div> */}
                        <p className=" text-zinc-900 py-1 text-xs font-bold ">+971 (0)4 454 2230</p>
                        <p className=" text-zinc-900 py-1  text-xs	 ">Mazaya Business </p>
                        <p className=" text-zinc-900 py-1    text-xs	">Avenue, Tower AA1 JLT,</p>
                        <p className=" text-zinc-900 py-1    text-xs	">Dubai, UAE</p>

                    </div>
                </div>
                <div className="max-w-xl">
                    <ul className=" text-zinc-800 w-[140px]">
                        <div className="flex space-x-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/7127/7127832.png" className="w-6   bg-white " />
                            <li className=" text-zinc-900  py-3   font-bold text-md">Saudi Arabia</li>
                        </div>
                        <li className=" text-zinc-900 font-semibold py-1     text-xs">+966 (1)1 511 7692</li>
                        <li className=" text-zinc-900 py-1 text-xs  ">Eastern Ring Branch Rd,  </li>
                        <li className=" text-zinc-900 py-1   text-xs"> Ghirnatah, Riyadh 13241</li>
                        <li className=" text-zinc-900 py-1   text-xs">KSA</li>

                    </ul>
                </div>
                <div className="max-w-xl">
                    <ul className=" text-zinc-800 w-[140px]">
                        <div className="flex space-x-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/5316/5316358.png" className="w-10   bg-white " />
                            <li className=" text-zinc-900  py-3   font-bold text-md">Pakistan </li>
                        </div>
                        <li className=" text-zinc-900 font-semibold py-1     text-xs">+92 (2)1 3722 0227</li>
                        <li className=" text-zinc-900 py-1 text-xs  ">50-J, Shahrah-e-Faisal  </li>
                        <li className=" text-zinc-900 py-1   text-xs"> Rd Block 6 PECHS,</li>
                        <li className=" text-zinc-900 py-1   text-xs"> Karachi, Pakistan</li>

                    </ul>
                </div>
                <div className="max-w-xl ">

                    <ul className=" text-zinc-800 w-[140px]">
                        <div className="flex space-x-4">
                            <img src="https://cdn-icons-png.flaticon.com/128/3207/3207091.png" className="w-10   bg-white " />
                            <li className=" text-zinc-900  py-3   font-bold text-md">Egypt </li>
                        </div>
                        <li className=" text-zinc-900 font-semibold py-1     text-xs">+971 (0)4 454 2230</li>
                        <li className=" text-zinc-900 py-1 text-xs  ">City Center, 55 Makram   </li>
                        <li className=" text-zinc-900 py-1   text-xs">  Ebeid St., Nasr City,</li>
                        <li className=" text-zinc-900 py-1   text-xs">  Cairo, Egypt.</li>

                    </ul>
                </div>
            </div>
            
            <div className="flex flex-col max-w-[1100px] px-2 py-4 mx-auto justify-between sm:flex-row content-center text-center ">

                <div className="  py-4">
                    <ul><li classNam="text-xs   text-zinc-900">© 2021 Traffic Group Ltd. UAE - Saudi Arabia - Pakistan </li>
                        <li className="font-bold md:justify-start justify-center  flex  "><img src="https://images.ctfassets.net/xyts7lmvuxsr/VgUlKTfgjgml6BcNsyLTQ/67df0e963bd7e39f1fab1830a69e96c9/the-collective.svg"  className="w-[200px] "/> </li>
                    </ul>


                </div>
                <div className="flex sm:justify-between justify-center sm:w-[300px] content-center text-center  pt-4 sm:text-2xl">
                    <FaFacebook className="w-[30px]" />
                    < FaGithub className="w-[28px]" />
                    <FaInstagram className="w-[28px]" />
                    <FaTwitter className="w-[28px]" />
                    < FaTwitch className="w-[28px]" />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

