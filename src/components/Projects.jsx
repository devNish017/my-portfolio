import React from 'react'
import projects from "../lib/projects.js"
import { RxGithubLogo } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <>
    <div className='flex flex-col gap-2.5 mt-6'>
        <h2 className='text-2xl font-bold '> 🚀 Projects</h2>

      {/* yaha pe is div ke andr project ke boxes banenege  */}
        <div className=' w-[95%] flex flex-wrap justify-center 
                  
                  '>
{/* bg-white/5  backdrop-blur-md text-green-500 border border-white/10  p-6 shadow-lg flex flex-col items-center gap-4 py-1 px-3 rounded-xl font-bold */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-15 
          
          '>
            {
              
              projects.map((item)=>(
                
                <div 
                 key={item.id}
                 className='not-md:max-h-fit not-md:max-w-80 not-md:pb-5 mx-auto pb-2.5  h-fit w-100  border rounded-2xl
                 bg-white/5  backdrop-blur-md shadow-xl/30  
                 '
                 >
                  <div className='  flex flex-col  px-2.5 pt-4.5'>
                    <div  className='relative'>
                      <img
                      className='h-70 shadow-2xl  w-full rounded-2xl  ' 
                      src={item.image} alt="" srcset="" />

                       <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

                       <div>
                      <h2 className='my-1.5 absolute bottom-1.5 left-3 font-bold text-xl text-white  z-20 '>{item.title}</h2>
                    </div>
                    </div>

                    

                    <div className='flex gap-1.5 my-1.5  flex-wrap'>
                      {
                      item.tech.map((data,index)=>(
                        <div
                        key={index}
                         className='bg-white/5  backdrop-blur-md text-green-500 border border-white/10  p-6 shadow-lg flex flex-col items-center gap-4 my-2 font-bold rounded-full px-3 py-1.5 text-[10px] '>
                           {data}
                        </div>
                      ))
                      }
                    </div>

                    <div className='flex justify-between my-1.5 relative'>
                      <a className='  bg-white/5  backdrop-blur-md text-green-500 border border-white/10  p-6 shadow-lg flex flex-col items-center gap-4 py-1 px-3 rounded-xl font-bold' href={item.github} target='_blank'>
                      <span className='flex  '> 
                        <RxGithubLogo className='text-2xl  '/>
                        <p className='text-sm ml-1.5 mt-1'>Github</p> 
                        </span></a>

                      <a className='shadow-xl/30  bg-white/5  backdrop-blur-md text-green-500 border border-white/10  p-6 shadow-lg flex flex-col items-center gap-4 py-1 px-3 rounded-xl font-bold' href={item.live} target='_blank'>
                      <span className='flex  '> 
                        <FiArrowUpRight className='text-2xl  '/>
                        <p className='text-sm ml-1.5 mt-1'>Live</p> 
                        </span></a>

                      
                    </div>

                  </div>

                </div>

              ))
            }
            
          </div>
         
        </div>

    </div>
    </>
  )
}

export default Projects