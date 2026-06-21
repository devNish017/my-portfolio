import React from 'react'
import pic from "../assets/dp.jpeg"

const Footer = () => {
  return (
    <>
  <footer className='bg-white/8  backdrop-blur-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] h-35 mt-15 md:h-25 flex  flex-col  '>

<div className='flex justify-center mt-5   '>
     <img  src={pic} 
     className='rounded-full   h-15 w-15 mr-2.5  object-cover '
     />

    <div
  style={{ fontFamily: "Inspiration, cursive" }}
   className=" text-4xl  md:text-6xl mt-1 ml-2 text-center tracking-wide text-green-500 " 
  
>
  Nishant  Dwivedi
</div>
</div>

   <div className='ml-8  not-md:mt-5  not-md:text-center text-[10px]'>© 2026 Nishant Dwivedi. All rights reserved.</div>
    

  </footer>
    </>
    
  )
}

export default Footer
