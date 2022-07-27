import React from 'react'
import { AiFillGithub,AiOutlineInstagram,AiFillMail,AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
        <div className='max-w-full max-h-[200px] bg-orange-500 p-3'>
            <h1 className='text-center text-white font-semibold text-xl font-mono '>Follow Us On</h1>
                <div className='flex justify-center gap-10 pt-4'>
                    <a href="https://github.com/MUSHTHAK2899">
                        <AiFillGithub size={30}/>
                    </a>
                    <a href="https://instagram.com/mushthak._?igshid=YmMyMTA2M2Y=">
                        <AiOutlineInstagram size={30}/>
                    </a>
                    <a href="mailto:mushthak2899@gmail.com">
                        <AiFillMail size={30}/>
                    </a>
                </div>
             <div className=''>
             <h1 className='font-sm flex items-center justify-center mt-2 pt-2'><AiOutlineCopyright/> Copyright 2022</h1>
             </div>
             <h1 className='text-center font-mono text-sm text-gray-800 '>All rights reserved.Powered by the Mushthak.</h1>

        </div>
    </div>
  )
}

export default Footer