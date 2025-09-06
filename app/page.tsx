import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <main className="bg-primary grid gap-4 grid-rows-4 md:grid-cols-2 lg:grid-cols-3 text-contact p-3 px-10">
      <div className="bg-secondary p-3  rounded lg:col-span-3 md:col-span-2 font-bold text-5xl text-center">Scrupulous</div>

      <div className="bg-secondary p-3 lg:scale-x-135 md:scale-x-100 lg:ml-15 h-[300px] row-span-6 rounded">2 </div>

      <div className="bg-secondary p-3 lg:scale-x-80 scale-x-100 w-full lg:ml-8 md:ml-0 h-[300px] row-span-6 rounded relative overflow-hidden">
        <h2 className='text-[85px] left-10 font-extralight  absolute top-1'>Mussadiq</h2>
        <p className='text-base rotate-270 bottom-10 absolute -right-2'>Man behind it</p>
        <Image src={"/img.png"} alt='image' className='drop-shadow-2xl' width={400} height={400} priority={true} />  
      </div>

      <div className="bg-secondary p-3  md:h-full md:row-span-10 lg:row-span-9 row-span-20 h-[500px] rounded">4</div>
      <div className="bg-secondary p-3 lg:scale-x-90 scale-x-100 w-full  -ml-6 h-[300px] row-span-5 rounded">5 </div>
      
      <div className="bg-secondary p-3 lg:scale-x-125 md:scale-x-100  md:mr-0 lg:mr-12 lg:ml-7 h-[300px] row-span-5 rounded">
        <h2 className='text-3xl'>Contact Me</h2>
      </div>
      

      <div className="bg-secondary p-3  row-span-2 w-full rounded">7</div>
    </main>
  )
}

export default Home
