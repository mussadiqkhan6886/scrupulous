import React from 'react'

const Home = () => {
  return (
    <main className="bg-primary grid gap-4 grid-rows-4 md:grid-cols-2 lg:grid-cols-3 text-text p-3">
      <div className="bg-secondary p-3  rounded lg:col-span-3 md:col-span-2 text-center">1</div>
      <div className="bg-secondary p-3 h-[300px] row-span-5 md:col-span-1 rounded">2 </div>
      <div className="bg-secondary p-3 h-[300px] row-span-5 md:col-span-1 rounded">3 </div>
      <div className="bg-secondary p-3  md:h-full md:row-span-10 lg:row-span-9 row-span-20 h-[500px] rounded">4</div>
      <div className="bg-secondary p-3 lg:w-[92%] w-full mr-2 h-[300px] row-span-6 rounded">5 </div>
      <div className="bg-secondary p-3 lg:scale-x-125 md:scale-x-100 md:mr-0 lg:mr-12 lg:ml-3 h-[300px] row-span-6 rounded">6 </div>
      <div className="bg-secondary p-3  row-span-2 rounded">7</div>
    </main>
  )
}

export default Home
