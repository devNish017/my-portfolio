import React from 'react'
import { Marquee } from "@/components/ui/marquee"
const Skills = () => {
  return (
    <>
     <div>
      <div className="flex items-center gap-2 mt-6">
        <span className="text-2xl">👨‍💻</span>
        <h1 className="text-2xl font-bold">Technology Stacks</h1>
      </div>

      <div className='mt-7'>

        <div className="flex flex-wrap gap-4 justify-center space-y-6 not-md:w-[110%] w-full">

<Marquee pauseOnHover className=" h-15 md:h-22">
  <img src="https://skillicons.dev/icons?i=html" alt="Html5" />
  <img src="https://skillicons.dev/icons?i=css" alt="Css" />
  <img src="https://skillicons.dev/icons?i=npm" alt="npm" />
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" />
  <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJS" />
  <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
  <img src="https://skillicons.dev/icons?i=express" alt="Express" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" />
  <img src="https://skillicons.dev/icons?i=git" alt="Git" />
  </Marquee>

  <Marquee pauseOnHover reverse className=" h-12  md:h-18">
  <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
  <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
  <img src="https://skillicons.dev/icons?i=redis" alt="Redis" />
  <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
  <img src="https://skillicons.dev/icons?i=netlify" alt="netlify" />
  <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
  <img src="https://skillicons.dev/icons?i=c" alt="C" />
  <img src="https://skillicons.dev/icons?i=java" alt="Java" />
  <img src="https://skillicons.dev/icons?i=python" alt="Python" />
  <img src="https://skillicons.dev/icons?i=notion" alt="Notion" />
  <img src="https://skillicons.dev/icons?i=vscode" alt="Vscode" />
  <img src="https://skillicons.dev/icons?i=idea" alt="Intelij" />
  </Marquee>
</div>
      </div>

      

          

         
    </div>
    </>
  )
}

export default Skills