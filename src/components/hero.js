
import { useState } from 'react';
import  video from './video.mp4'
export function Hero() {
  return (

<div className=" relative mx-auto bg-transparent   mix-blend-overlay  w-full h-full top-0 left-0 ">

    <div className='   flex flex-col w-full sm:h-[660px] h-[540px]'>
<video src={video} className='w-full h-full mix-blend-overlay object-cover' autoPlay loop  muted/>
</div>
</div>

  );
}


