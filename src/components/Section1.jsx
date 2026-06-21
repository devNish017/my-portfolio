import React from 'react'
import { FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { IoMdDownload } from "react-icons/io"
import { AiFillGithub } from "react-icons/ai";
import pic from "../assets/dp.jpeg"

import { CoolMode } from "@/components/ui/cool-mode"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

const Section1 = () => {
  return (
    <div className="bg-white/5  backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl/30 flex flex-col items-center gap-4">
       
       
      <div className="p-2 rounded-3xl bg-linear-to-r from-cyan-500/20 to-blue-500/20">
        <img
          className="h-70 w-70 rounded-3xl object-cover transition-all duration-500 hover:scale-105"
          src={pic}
          alt="Profile"
        />
      </div>

      <div className="w-48 mx-auto text-center py-2.5 rounded-2xl border border-gray-500 flex items-center justify-center gap-2 backdrop-blur-sm">
        <span className="inline-block bg-green-400 h-2 w-2 rounded-full animate-ping"></span>
        <p className='text-sm'>Available for work</p>
      </div>

      <div className="text-3xl font-bold tracking-wide">
        Nishant Dwivedi
      </div>

      <div className="flex gap-5 text-2xl">
        <a
          className="text-green-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          className="text-green-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          href="https://www.linkedin.com/in/nishantdwivedi017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          className="text-green-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          href="mailto:yourmail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail />
        </a>
        <a
          className="text-green-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          href="https://github.com/devNish017"
          target="_blank"
          rel="noopener noreferrer"
        >
         <AiFillGithub/>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-2">
        
       
      <CoolMode particleCount={20} particle="sparkle" >  <a
  href="/Resume_Nishant_Dwivedi.pdf"
  download
  className="border border-gray-400 px-3 py-2 rounded-md font-medium flex items-center gap-2 transition-all duration-300 hover:text-green-500  hover:border-green-500 hover:-translate-y-1"
>
    <IoMdDownload />
  Download Resume
</a>
</CoolMode>


        {/* <button className="border border-gray-400 px-3 py-2 rounded-md font-medium flex items-center gap-2 transition-all duration-300 bg-green-500 hover:text-black  hover:-translate-y-1">
          <FaLocationArrow />
          Contact Me
        </button> */}
      </div>

      


    </div>
  )
}

export default Section1