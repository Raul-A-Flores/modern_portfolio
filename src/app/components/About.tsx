'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='about top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{
          opacity: 0,
      }}
      whileInView={{opacity:1}}
      viewport={{once: true}}
      src='/c7abd26efe0a34123d090d1138d5d8e5.png'
      className='-mb-20 md:mb-20 fled-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95'
      transition={{
          duration:1.2
          
      }}/>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a {" "}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          Heres is some bullshit about me 
        </p>

      </div>
    </div>
  )
}

export default About