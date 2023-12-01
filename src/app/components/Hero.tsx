'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {

    const [text,count] = useTypewriter({

        words: [
        'Hola, me llamo Raul Flores',
        'A person who knows how to code'],
    
        loop: true, 
        delaySpeed:2000
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles>
    {/*   <img 
            src='/c7abd26efe0a34123d090d1138d5d8e5.png'
            alt=''
            className='relative rounded-full object-cover mx-auto'
          /> */}
        
      </BackgroundCircles>
          <div>

            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor  cursorColor='#F7AB0A'/>
            </h1>
            <div>
              <button className='heroButton'>About</button>
              <button className='heroButton'>Experience</button>
              <button className='heroButton'>Skills</button>
              <button className='heroButton'>Projects</button>

            </div>
          </div>
    </div>
  )
}

export default Hero