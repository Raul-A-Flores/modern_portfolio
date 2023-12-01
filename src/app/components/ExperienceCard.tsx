'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article 
    className=' cursor-pointer overflow-hidden
    transition-opacity duration-20 flex flex-col p-10 opacity-40 hover:opacity-100 
    snap-center bg-[#292929] rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
      <motion.img 
        initial={{
          y:-100,
          opacity: 0
        }}
        src='/c7abd26efe0a34123d090d1138d5d8e5.png'
        transition={{duration: 1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />

      <div className='px-0 md:pd-10'>
        <h4 className='text-4xl font-light'>CEO of Flores</h4>
        <p className='font-bold text-2xl mt-1'>Flores</p>
        <div className='flex space-x-2 my-2'>

        </div>
        <p className='uppercase py-5 text-gray-300'>Started as</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>

        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard