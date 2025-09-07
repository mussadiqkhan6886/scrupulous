'use client';

import React from 'react'
import {motion}  from "framer-motion"
import Image from 'next/image'
import { Projects } from '@/components/Projects';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";
import {SocialIcon} from "react-social-icons"
import { FaUser } from "react-icons/fa";
import PricingSlider from '@/components/Prices';


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
      <div className="bg-secondary p-3  rounded-xl lg:col-span-3 md:col-span-2 font-bold text-5xl text-center">Scrupulous</div>

      <div className=" scale-x-105 overflow-hidden h-[300px] row-span-6 rounded-xl">
        <Projects />
      </div>

      <div className="bg-secondary p-3 w-full h-[300px] row-span-6 rounded-xl relative overflow-hidden flex items-center justify-center">
        {/* Background text */}
        <h2 className="text-[95px] font-extralight absolute inset-0 flex  justify-center text-center">
          Mussadiq
        </h2>

        {/* Foreground image */}
        <Image
          src={"/img.png"}
          alt="image"
          className="drop-shadow-2xl lg:scale-125 xl:scale-100 sm:scale-100 scale-130 xs:scale-100 relative z-10"
          width={400}
          height={400}
          priority={true}
        />

        {/* Side text */}
        <p className="text-base absolute -right-2 bottom-10 -rotate-90">
          Man behind it
        </p>
      </div>


      <div className="bg-secondary p-3  md:h-full md:row-span-10 lg:row-span-9 row-span-20 h-[500px] rounded-xl">
        <PricingSlider /> 
      </div>
      
      <div className="bg-secondary p-3  w-full text-[18px]  h-[300px] row-span-5 rounded">
        <p>At Scrupulous, we believe in turning ideas into impactful digital experiences. As a freelancing agency, we specialize in web development, design, and creative digital solutions — built with precision, passion, and integrity. Our goal is simple: deliver work that not only looks good but also works seamlessly, helping you grow with confidence.</p>  
      </div>
      
      <Link target='_blank' href={"https://mussadiqkhan.vercel.app/hire-me"} className="bg-contact text-secondary  p-3  relative  h-[300px] row-span-5 rounded-xl hover:bg-text duration-500 ease-in-out">
        <FiArrowUpRight className='text-4xl absolute right-3 top-3'/>
        <h2 className='text-[60px] font-extralight absolute bottom-3 italic'>Contact me</h2>
      </Link>
      

      <div className="bg-secondary p-3  flex justify-evenly items-center  row-span-2 w-full rounded-xl">
        <SocialIcon label='github icon' network='github' bgColor='transparent' url='https://github.com/mussadiqkhan6886' />
        <SocialIcon label='instagram icon' network='instagram' bgColor='transparent' url='https://www.instagram.com/the__scrupulous/?__pwa=1' />
        <SocialIcon label='linkedin icon' network='linkedin' bgColor='transparent' url='https://www.linkedin.com/in/mussadiq-khan-2815aa34a/' />
        <SocialIcon label='whatsapp icon' network='whatsapp' bgColor='transparent' url='https://wa.me/+923189328584' />
        <Link href='https://mussadiqkhan.vercel.app'>
          <FaUser className='text-xl' />
        </Link>
      </div>
    </main>
  )
}

export default Home
