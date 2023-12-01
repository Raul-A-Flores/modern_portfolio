import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between'>
        <div>
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
        </div>

        <div>
            <SocialIcon 
            fgColor='gray'
            bgColor='transparent'
            network='email'
            className='cursor-pointer'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </div>
    </header>
  )
}

export default Header