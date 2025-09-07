'use client';

import React from 'react'
import {motion}  from "framer-motion"
import Image from 'next/image'
import { Projects } from '@/components/Projects';

const imageVariant = {
  hidden: {
    scale: 130,
    x: 50,
    y: 50,
  },
  show: {
    scale: 100,
    x: 0,
    y: 0
  }
}

const Home = () => {
  return (
    <main className="bg-primary grid gap-4 grid-rows-4 md:grid-cols-2 lg:grid-cols-3 text-contact p-2 lg:px-10">
      <div className="bg-secondary p-3  rounded lg:col-span-3 md:col-span-2 font-bold text-5xl text-center">Scrupulous</div>

      <div className=" overflow-hidden lg:scale-x-135 md:scale-x-100 lg:ml-15 h-[300px] row-span-6 rounded">
        <Projects />
      </div>

      <div  className="bg-secondary p-3 lg:scale-x-80 scale-x-100 w-full lg:ml-8 md:ml-0 h-[300px] row-span-6 rounded relative overflow-hidden">
        <h2 className='text-[85px] left-20 font-extralight  absolute top-1'>Mussadiq</h2>
        <p className='text-base rotate-270 bottom-10 absolute -right-2'>Man behind it</p>
        <Image src={"/img.png"} alt='image' className='drop-shadow-2xl' width={400} height={400} priority={true} />  
      </div>

      <div className="bg-secondary p-3  md:h-full md:row-span-10 lg:row-span-9 row-span-20 h-[500px] rounded">4</div>
      <div className="bg-secondary p-3 lg:scale-x-90 scale-x-100 w-full  -ml-6 h-[300px] row-span-5 rounded">5 </div>
      
      <div className="bg-secondary p-3 lg:scale-x-125 md:scale-x-100 relative md:mr-0 lg:mr-12 lg:ml-7 h-[300px] row-span-5 rounded">
        <h2 className='text-3xl absolute bottom-3'>Contact Me</h2>
      </div>
      

      <div className="bg-secondary p-3  row-span-2 w-full rounded">7</div>
    </main>
  )
}

export default Home
