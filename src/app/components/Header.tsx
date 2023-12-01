'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
                
            }}
            
            className='flex flex-row items-center'>

            <SocialIcon 
            fgColor='gray'
            bgColor='transparent'
            url='https://x.com/raul__floress'
            />
            <SocialIcon 
            fgColor='gray'
            bgColor='transparent'
            url='https://github.com'
            />
    </motion.div>

    <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
                
            }}>
                <SocialIcon 
                fgColor='gray'
                bgColor='transparent'
                network='email'
                className='cursor-pointer'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

            </motion.div>
    </header>
  )
}

export default Header