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
import useWindowWidth from '@/hook/windowHook';


const imageVariant = {
  hidden: {
    scale: 1.6,
    y: 50,
  },
  show: {
    scale: 1,
    y: 0
  }
}

const vairantDiv = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
  },
}


const Home = () => {

  const width = useWindowWidth()

  return (
    <main className="bg-primary grid gap-4 grid-rows-4 md:grid-cols-2 lg:grid-cols-3 text-text p-2 xl:px-10">
      <motion.div variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 1}} initial="hidden" animate="show" className="bg-secondary rounded-xl lg:col-span-3 md:col-span-2 font-bold text-[52px] text-center">
        <h1 aria-label='heading of the page scrupulous'>Scrupulous</h1>
      </motion.div>

      <motion.div  variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 1.5}} initial="hidden" animate="show" className=" md:scale-x-105 overflow-hidden h-[300px] row-span-6 rounded-xl">
        <Projects />
      </motion.div>

      <motion.div variants={width ? imageVariant : {}} initial="hidden" animate="show" transition={{ease:"backInOut", duration: 2}} className="bg-secondary p-3 w-full h-[300px] row-span-6 rounded-xl relative overflow-hidden flex items-center justify-center">
        {/* Background text */}
        <h2 className="text-[95px] font-extralight absolute inset-0 flex  justify-center text-center">
          Mussadiq
        </h2>

        {/* Foreground image */}
        <Image
          src={"/img.png"}
          alt="image hero"
          className="drop-shadow-3xl lg:scale-125 xl:scale-100 sm:scale-100 scale-130 xs:scale-100 relative z-10"
          width={400}
          height={400}
          priority={true}
        />

        {/* Side text */}
        <p className="text-base absolute -right-2 bottom-10 -rotate-90">
          Man behind it
        </p>
      </motion.div>


      <motion.div  variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 3.5}} initial="hidden" animate="show" className="bg-secondary p-3  md:h-full max-w-[730px] min-w-[100px] md:row-span-10 row-span-9 col-span-1 h-full rounded-xl">
        <PricingSlider /> 
      </motion.div>
      
      <motion.div  variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 2.25}} initial="hidden" animate="show" className="bg-secondary p-3  w-full text-[18px]  h-[300px] row-span-5 rounded-xl">
        <p aria-label='description about scrupulous'>At Scrupulous, we believe in turning ideas into impactful digital experiences. As a freelancing agency, we specialize in web development, design, and creative digital solutions — built with precision, passion, and integrity. Our goal is simple: deliver work that not only looks good but also works seamlessly, helping you grow with confidence.</p>  
      </motion.div>
      
      <motion.div className="bg-contact text-secondary  p-3  relative  h-[300px] row-span-5 rounded-xl hover:bg-text duration-500 ease-in-out" variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 3}} initial="hidden" animate="show">
        <Link target='_blank' className='w-full h-full' href={"https://mussadiqkhan.vercel.app/hire-me"} >
          <FiArrowUpRight className='text-4xl absolute right-3 top-3'/>
          <h3 aria-label='contact me' className='text-[60px] font-extralight absolute bottom-3 italic'>Contact me</h3>
        </Link>
      </motion.div>
      

      <motion.div aria-label='icons links to social media'  variants={width ? vairantDiv : {}} transition={{duration: 1, ease: "backInOut", delay: 4}} initial="hidden" animate="show" className="bg-secondary p-3  flex justify-evenly items-center  row-span-2 w-full rounded-xl">
        <SocialIcon label='github icon' network='github' bgColor='transparent' url='https://github.com/mussadiqkhan6886' />
        <SocialIcon label='instagram icon' network='instagram' bgColor='transparent' url='https://www.instagram.com/the__scrupulous/?__pwa=1' />
        <SocialIcon label='linkedin icon' network='linkedin' bgColor='transparent' url='https://www.linkedin.com/in/mussadiq-khan-2815aa34a/' />
        <SocialIcon label='whatsapp icon' network='whatsapp' bgColor='transparent' url='https://wa.me/+923189328584' />
        <Link href='https://mussadiqkhan.vercel.app'>
          <FaUser className='text-xl' />
        </Link>
      </motion.div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: false
  }
} 

export default Home

