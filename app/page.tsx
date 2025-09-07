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

      <div className=" scale-x-105 overflow-hidden h-[300px] row-span-6 rounded">
        <Projects />
      </div>

      <div className="bg-secondary p-3 w-full h-[300px] row-span-6 rounded relative overflow-hidden flex items-center justify-center">
        {/* Background text */}
        <h2 className="text-[85px] font-extralight absolute inset-0 flex items-center justify-center text-center opacity-20">
          Mussadiq
        </h2>

        {/* Foreground image */}
        <Image
          src={"/img.png"}
          alt="image"
          className="drop-shadow-2xl relative z-10"
          width={400}
          height={400}
          priority={true}
        />

        {/* Side text */}
        <p className="text-base absolute -right-2 bottom-10 -rotate-90">
          Man behind it
        </p>
      </div>


      <div className="bg-secondary p-3  md:h-full md:row-span-10 lg:row-span-9 row-span-20 h-[500px] rounded">4</div>
      <div className="bg-secondary p-3  w-full  h-[300px] row-span-5 rounded">
        <p>At Scrupulous, we believe in turning ideas into impactful digital experiences. As a freelancing agency, we specialize in web development, design, and creative digital solutions — built with precision, passion, and integrity. Our goal is simple: deliver work that not only looks good but also works seamlessly, helping you grow with confidence.</p>  
      </div>
      
      <div className="bg-secondary p-3  relative  h-[300px] row-span-5 rounded">
        <h2 className='text-3xl absolute bottom-3'>Contact Me</h2>
      </div>
      

      <div className="bg-secondary p-3  row-span-2 w-full rounded">7</div>
    </main>
  )
}

export default Home
