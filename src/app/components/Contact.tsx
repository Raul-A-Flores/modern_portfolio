'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs ={
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

const Contact = (props: Props) => {

    const {register, handleSubmit, formState: {errors}, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) =>{
      window.location.href = `mailto:raul.alexander.floress@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }



  return (
   <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

    
    <div className='flex flex-col space-y-10'>
      <h4 className='text-4xl font-semibold text-center'>
        I have got just what you need.{' '}
        <span className='decoration-[#F7AB0A]/10 underline'>Lets Talk</span>
      </h4>
      <div className='flex items-center space-x-5'>
        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
        <p className='text-2xl'>+1320213023</p>
      </div>
      <div className='flex items-center space-x-5'>
        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
        <p className='text-2xl'>flore@gmail.com</p>
      </div>
      <div className='flex items-center space-x-5'>
        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'  />
        <p className='text-2xl'>123 Dev lane</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
          <input {...register('name')} placeholder='Name' type='text' className='contactInput'/>
          <input{...register('email')} placeholder='Email' type='text' className='contactInput'/>
        </div>
        <input {...register('subject')} placeholder='Subject' type='text' className='contactInput'/>
        <textarea {...register('message')} placeholder='Your Message' className='contactInput'/>
        <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
      </form>

    </div>
   </div>
  )
}

export default Contact