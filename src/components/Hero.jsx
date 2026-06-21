import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from './Footer'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>

     <motion.div
  initial={{ opacity: 0, y: 300 }}
  animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 1, delay: 0.2 }}
   transition={{ duration: 1, ease: "easeOut" }}
    style={{ willChange: 'opacity, transform' }}
>
   <div className="flex flex-col md:flex-row gap-6 pt-15 items-start">
  
 


  <div className="w-[90%] md:w-[30%] min-height:100vh mt-15 not-md:mx-auto not-md:mt-15   md:sticky md:top-25 ">
    <Section1 />
  </div>
 


  <div className="w-[90%] not-md:-mt-10 md:w-[70%] pt-15">
    <Section2 />
  </div>
  

</div>
</motion.div>
 
 <Footer/>
    </>
  )
}

export default Hero





