import React, { useRef } from 'react'
import { useState } from 'react';
import emailjs from "@emailjs/browser";

import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { ImGithub } from "react-icons/im";

import { CoolMode } from "@/components/ui/cool-mode"


const Contact = () => {
      
     const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone:"",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_y1xfn22",
      "template_3w5vp68",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "9jCcu2y28qqX23NBg"
    )
    .then(() => {
      // alert("Message sent successfully!");
      

      setFormData({
        name: "",
        email: "",
        phone:"",
        message: "",
      });

      
    })
    .catch((error) => {
      console.log("Email js error",error);
      alert("Failed to send message");
    });
};


  return (
    <>
    <div className='mt-6'>
         <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl"><FaRegPaperPlane/></span>
        <h1 className="text-2xl font-bold">Contact</h1>
      </div>
     <div className='text-xl font-bold text-green-500 mb-3'>Let's Get in Touch!</div>

     <div className='flex not-md:flex-col gap-5.5 not-md:mt-6'>
        {/* left box */}
        <div className=' not-md:w-[110%]  w-[40%] h-[80%] flex   flex-col justify-between gap-3 md:gap-2'>
            {/* mail box 1 */}
 <a className='text-md not-md:w-full not-md:text-sm font-bold' href="mailto:nishantdwivedi017@gmail.com" target='_blank'> 

            <div className=' shadow-xl/30 rounded-md flex  items-center bg-white/5  backdrop-blur-md   px-4 py-2 '>
                <div>
                    <MdOutlineMailOutline className='text-green-500 text-3xl'/>
                </div>

                <div className='ml-2.5'>
                    <h2 className='text-md text-gray-400'>Email</h2>
                    <p>nishantdwivedi017@gmail.com</p>
                </div>

            </div>
            </a>

            {/* linkedin box 2 */}

     <a className='text-md not-md:w-full not-md:text-sm font-bold' href="https://github.com/devNish017" target='_blank'>
   
            <div className='shadow-xl/30 rounded-md flex  items-center bg-white/5  backdrop-blur-md   px-4 py-2 '>
                <div>
                    <ImGithub className='text-green-500 text-3xl'/>
                </div>

                <div className='ml-2.5'>
                    <h2 className='text-md text-gray-400'>Github</h2>
                    <p>devNish017</p>
                </div>

            </div>
            </a>
               {/* box 3 */}
            <div className=' shadow-xl/30 not-md:w-full not-md:text-sm rounded-md bg-white/5  backdrop-blur-md  flex justify-center items-center  px-4 py-2 '>
                <div>
                    <MdLocationPin className='text-green-500 text-3xl '/>
                </div>

                <div className='ml-2.5'>
                    <h2 className='text-md text-gray-400'>Address</h2>
                    <p className='text-md font-bold' >Noida Sector-63,Uttar Pradesh, India</p>
                </div>

            </div>
            
        </div>



        {/* right box */}
        <form 
        onSubmit={sendEmail}
        className='flex flex-col gap-3 md:ml-8  w-[120%]  md:w-[60%] justify-center'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
             placeholder='Name'
             required

            className=' bg-white/5  backdrop-blur-md  rounded-md  w-[90%]  pl-3 text-gray-400 h-9 border-0 outline hover:outline-green-500'  />

            <input
  className='bg-white/5 text-gray-400  backdrop-blur-md  rounded-md w-[90%]  pl-3 h-9  border-0 outline hover:outline-green-500'
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder='Email'
  required
/>
        <input className='rounded-md  w-[90%] text-gray-400 bg-white/5  backdrop-blur-md  pl-3 h-9 border-0 outline hover:outline-green-500' 
        type="number" name="phone" value={formData.phone} onChange={handleChange} id="" placeholder='Mobile No.' />
           
           
           <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message..."
  rows="3"
  required
  className="w-[90%] rounded-xl pl-3 bg-white/5  backdrop-blur-md  text-gray-400 border-0 p-4 outline hover:outline-green-500 focus:outline-green-500"
/>


          <button
  type="submit"
  
  className=' w-[90%] flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-md'
>
  <FaRegPaperPlane />
  Send Message
</button>


        </form>


     </div>

    </div>

    
    </>
  )
}

export default Contact