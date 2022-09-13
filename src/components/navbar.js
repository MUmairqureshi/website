import {MenuAlt4Icon ,XIcon} from '@heroicons/react/outline'
import { useState } from 'react';

export function Nav() {
  // const [nav, setNav] = useState(true)
  // const handleSubmit = () => setNav(!nav)
  // const handleClick = () => setNav(!nav)
  const [nav , setNav] = useState(false)
  const handlesubmit = ()=> setNav(!nav)
  const handleClick = ()=> setNav(!nav)
  return (
<div>
{/* <div className="  bg-transparent  mix-blend-overlay text-black  ">
      
      <nav class=" bg-transparent  z-10 mix-blend-overlay w-screen p-12 rounded ">
  <div class="container flex flex-wrap mix-blend-overlay bg-transparent  justify-between items-center text-black  mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9 mix-blend-overlay" alt="Flowbite Logo"/>
        <span class="self-center text-xl font-bold black space-nowrap text-black  dark:text-black ">Traffic Digital</span>
    </a>

    <div className='mr-3 ' onClick={handleSubmit}>
{nav ? <MenuAlt4Icon className="w-9 inline-flex items-center ml-3 text-sm  " aria-controls="navbar-default" aria-expanded="false"/>      : <XIcon className="w-9 inline-flex items-center ml-3 text-sm  " aria-controls="navbar-default" aria-expanded="false"/>}
</div>
    <div class={nav ? 'hidden ' : 'w-full " id="navbar-default'}>
      <ul class="p-4   rounded-lg text-7xl font-bold text-black  space-x-4 py-8 mt-4 text-smfont-medium border-0   dark:bg-gray-900 dark:border-gray-700">

        <li className=''>
          <a href="#" onClick={handleClick} class="block py-3 pl-64   rounded  hover:bg-transparent  border-0  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-black  dark:hover:bg-transparent ">About us</a>
        </li>
        <li className=''>
          <a href="#" onClick={handleClick} class="block py-3 pl-64   rounded  hover:bg-transparent  border-0  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-black  dark:hover:bg-transparent ">Services</a>
        </li>
        <li className=''>
          <a href="#" onClick={handleClick} class="block py-3 pl-64   rounded  hover:bg-transparent  border-0  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-black  dark:hover:bg-transparent ">Work</a>
        </li>
        <li className=''>
          <a href="#" onClick={handleClick} class="block py-3 pl-64   rounded  hover:bg-transparent  border-0  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-black  dark:hover:bg-transparent ">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

 */}







<nav class="p-3 bg-transparent mix-blend-overlay rounded relative ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Traffic Didital logo"/>
        <span class="self-center text-xl font-semibold black space-nowrap dark:text-black ">Traffic Didital</span>
    </a>
    <div className='md:hidden mr-4' onClick={handlesubmit} > 
{!nav ? <MenuAlt4Icon className="w-9 inline-flex items-center ml-3 text-sm  " aria-controls="navbar-default" aria-expanded="false"/> : <XIcon className="w-9 inline-flex items-center ml-3 text-sm  " aria-controls="navbar-default" aria-expanded="false" /> }

     </div> 
    
     <div class={ !nav ? 'hidden md:block md:w-auto ' : 'w-full  '  } id="navbar-solid-bg">
      <ul class="    md:flex  rounded-lg bg-transparent mix-blend-overlay md:flex-row md:space-x-8  md:text-sm  md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-black  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black  dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black  dark:hover:bg-gray-700 dark:hover:text-black  md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black  dark:hover:bg-gray-700 dark:hover:text-black  md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black  dark:hover:bg-gray-700 dark:hover:text-black  md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

 












</div>
  );
}

