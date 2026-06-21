import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <div className={`flex justify-center left-0 w-full z-50 transition-all ease-in duration-300
        ${scrolled ? 'sticky top-0' : 'absolute top-5'}`}>

        <div className="navbar w-full md:w-[95%] border-b rounded-xl bg-white/8 backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.4)]">

          <div className="navbar-start">
            <button className='bg-green-600 px-2.5 py-2.5 rounded-lg text-white font-bold'>ND</button>
            <p className='text-xl md:font-medium  px-2'>Nishant</p>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px]">
              <li className='rounded-md' onClick={() => scrollToSection('about')}><a>About</a></li>
              <li className='rounded-md' onClick={() => scrollToSection('projects')}><a>Projects</a></li>
              <li className='rounded-md' onClick={() => scrollToSection('education')}><a>Education</a></li>
              <li className='rounded-md' onClick={() => scrollToSection('skills')}><a>Skills</a></li>
              <li className='rounded-md' onClick={() => scrollToSection('contact')}><a>Contact</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <AnimatedThemeToggler duration={1000} className="cursor-pointer" />
            <a onClick={() => scrollToSection('contact')} className="group cursor-pointer flex items-center gap-2 px-6 py-1.5 ml-4 bg-green-600 rounded-lg text-[12px] not-md:px-1.5 not-md:mr-2 text-center md:text-md font-bold text-white hover:bg-green-700 transition-colors">
              Hire Me
              <MdArrowOutward className='md:text-xl w-6 -ml-1.5' />
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar