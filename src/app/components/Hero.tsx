'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

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
          <div className='z-20'>

            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor  cursorColor='#F7AB0A'/>
            </h1>
            <div>
              <Link href='#about'>
                <button className='heroButton'>About</button>
              </Link>
              <Link href='#experience'>
              <button className='heroButton'>Experience</button>
              </Link>
              <Link href='#skills'>
              <button className='heroButton'>Skills</button>
              </Link>
              <Link href='#projects'>
              <button className='heroButton'>Projects</button>
              </Link>

            </div>
          </div>
    </div>
  )
}

export default Hero