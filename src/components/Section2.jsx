import React from 'react'
import { ReactTyped } from 'react-typed';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

import CountUp from './CountUp';


const Section2 = () => {
  return (
    <> 

    


   <div className="    p-6  flex flex-col  gap-4">
      
      
      {/* intro section */}
      <div id="about" className='flex flex-col gap-4 md:gap-7 scroll-mt-24 not-md:mx-auto'>
        <p className='text-2xl font-medium'>👋Hello</p>
        <div className='text-5xl'>

        <div className=' font-medium not-md:text-2xl'>I'm Nishant Dwivedi,
          <div>
 <ReactTyped className='text-green-500'
  strings={[
    "Software Devloper",
    "Frontend Developer",
    "MERN Stack Developer",
    
  ]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>
          </div>
       
        <div>Based in Noida,India.</div>

        </div>
        
        </div>

      <p className='text-gray-400 text-md text-left '>MCA graduate specializing in full-stack development with hands-on experience in the MERN stack 
        (MongoDB, Express.js, React.js, Node.js). Strong foundation in Data Structures & Algorithms using C++. 
        I build scalable web applications, RESTful APIs, and responsive user interfaces that feel fast and intentional.</p>

      </div>


      {/*  boxes */}
     <div className="grid grid-cols-2 not-md:w-[110%] md:grid-cols-4 gap-4 mt-5 ">

  <div className="shadow-xl/30 px-6 py-5 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg">
    <h2 className="text-green-500 font-extrabold text-2xl mb-1">
      <CountUp
  from={0}
  to={10} duration={.8} > </CountUp>
      +
      </h2>
    <div className="text-gray-400 text-xs font-semibold tracking-wider">
      PROJECTS BUILT
    </div>
  </div>

  <div className=" shadow-xl/30 px-6 py-5 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg">
    <h2 className="text-green-500 font-extrabold text-2xl mb-1">MERN</h2>
    <div className="text-gray-400 text-xs not-md:-mx-3  font-semibold tracking-wider">
      SPECIALIZATION
    </div>
  </div>

  <div className="shadow-xl/30 px-6 py-5 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg">
    <h2 className="text-green-500 font-extrabold text-2xl mb-1">DSA</h2>
    <div className="text-gray-400 text-xs font-semibold tracking-wider">
      <CountUp
  from={0}
  to={250} duration={.8} > </CountUp>+ QUESTIONS
    </div>
  </div>

  <div className="shadow-xl/30 px-6 py-5 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg">
    <h2 className="text-green-500 font-extrabold text-2xl mb-1">Open</h2>
    <div className="text-gray-400 text-xs font-semibold tracking-wider">
      TO WORK
    </div>
  </div>

</div>

 {/* intro section — about */}


{/* Projects Section */}
<div id="projects" className='scroll-mt-22'><Projects /></div>

{/* education section */}
<div id="education" className='scroll-mt-22'><Education /></div>

{/* Skills Section */}
<div id="skills" className='scroll-mt-22'><Skills /></div>

{/* Contact section */}
<div id="contact" className='scroll-mt-22'><Contact /></div>
</div>  

   

  </>
  )
}

export default Section2