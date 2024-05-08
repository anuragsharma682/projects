import React from 'react'
import pic from '../assets/pic.jpg'
import laptop from '../assets/laptop.jpg'
const Home_main = () => {
  return (
    <div>
        <div className='z-10'>
        <img src={pic} className=' w-full h-[880px] z-10' alt="" />
        </div>
        <div className='bg-black/65 h-[880px] relative -mt-[880px] z-20'>
        </div>
        <div className='h-[880px] -mt-[880px] flex justify-center items-center relative z-30 flex-col gap-14' >
            <p className='text-8xl font-extrabold text-white '>Welcome</p>
            <div className='flex flex-col justify-center items-center gap-7'>
            <p className='text-4xl font-bold text-white'>Feast your eyes on a good book</p>
                <div className='flex flex-col items-center justify-center gap-4'>
                <img className='h-72 rounded-3xl' src={laptop} alt="" />
            <p className='text-3xl font-bold text-white'>The store where you can browse, buy and read books in minutes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home_main