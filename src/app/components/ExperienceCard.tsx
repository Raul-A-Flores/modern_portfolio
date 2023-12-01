'use client'

import React from 'react'
import { motion, scroll } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
        
        <div 
          className=' cursor-pointer overflow-hidden
          transition-opacity duration-200 flex flex-col p-10 
          opacity-40 hover:opacity-100 
          snap-center bg-[#292929] rounded-lg items-center space-y-7 
          flex-shrink-0  sm:w-[450px] sm:h-[500px] md:w-[500px] md:h-[500px] xl:h-[650px] xl:w-[550px]'>
            <motion.img 
              initial={{
                y:-100,
                opacity: 0
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y:0}}
              viewport={{once: true}}
              src='/c7abd26efe0a34123d090d1138d5d8e5.png'
              className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            />

            <div className='px-0 md:pd-10'>
              <h4 className='text-4xl font-light'>CEO of Flores</h4>
              <p className='font-bold text-2xl mt-1'>Flores</p>
              <div className='flex space-x-2 my-2'>
                 <img 
                  alt='alt'
                  src=''
                  className='h-10 w-10 rounded-full'
                  />
                <img 
                  alt='alt'
                  src=''
                  className='h-10 w-10 rounded-full'
                  /> 

              </div>
              <p className='uppercase py-5 text-gray-300'>Started as</p>
              <ul className='list-disc space-y-4 ml-5 text-lg overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                <li>This is some example of work i have done</li>
                <li>This is some example of work i have done</li>
                <li>This is some example of work i have done</li>
                <li>This is some example of work i have done</li>
                <li>This is some example of work i have done</li>


              </ul>
            </div>
            </div>
    
  )
}

export default ExperienceCard