import React from 'react'

const Education = () => {
  return (
    <div className='mt-5 mb-5 '>
      <div className="flex items-center gap-2 mb-4 ">
        <span className="text-2xl">🎓</span>
        <h1 className="md:text-2xl font-bold">Education</h1>
      </div>

      {/* MCA */}
      <div className=" not-md:w-[110%]   mt-4 shadow-xl/30 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-5 ">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="h-3 w-3 rounded-full mr-2 bg-green-500"></div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start gap-3">
              <h2 className="font-bold text-sm md:text-xl leading-tight">
                Master of Computer Applications
              </h2>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold whitespace-nowrap">
                2024 - 2026
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              Allenhouse Institute of Technology, Kanpur
            </p>
          </div>
        </div>
      </div>

      {/* BCA */}
      <div className="shadow-xl/30 not-md:w-[110%] mt-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-5 ">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="h-3 w-3 mr-2 rounded-full bg-green-500"></div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start gap-3">
              <h2 className="font-bold text-sm md:text-xl leading-tight">
                Bachelor of Computer Applications
              </h2>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold whitespace-nowrap">
                2020 - 2023
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              Allenhouse Institute of Technology, Kanpur
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education