import React from 'react'
import HomeImg from "../../assets/home.jpg"

const HomeTwo = () => {
  return (
        <section id='homeTwo' className='grid place-items-center p-5! py-10! bg-zinc-50'>
        <figure className='w-[80vw] sm:w-[85vw] md:w-[90vw] 2xl:w-5/6 flex flex-col md:flex-row items-center gap-10 lg:gap-15'>
            <div className='md:w-180 md:h-150 rounded-lg'>
                <img className='rounded-lg' src={HomeImg} alt="" />
            </div>
            <figcaption className='flex flex-col gap-6 sm:gap-8 md:w-180'>
                <p className='text-xl sm:text-2xl'>—{/* alt + 0151 */} OUR STORY</p>
                <h1 className='text-xl sm:text-3xl w-5/6 md:text-2xl lg:text-3xl xl:text-4xl xl:w-5/6 font-bold'>Our team comes with the experience and knowledge</h1>
                <div className=' bg-zinc-200 grid grid-cols-3 gap-2 p-3! md:gap-2 lg:gap-4  md:p-2! lg:p-3! rounded-sm'>
                    <button className='px-1! py-1! text-[12px] sm:text-base sm:py-2! lg:py-3! bg-blue-500 rounded-sm text-white font-bold cursor-pointer'>Who We Are</button>
                    <button className='px-1! py-1! text-[12px] sm:text-base sm:py-2! lg:py-3! bg-white rounded-sm font-bold hover:bg-blue-500 hover:text-white cursor-pointer'>Our Vision</button>
                    <button className='px-1! py-1! text-[12px] sm:text-base sm:py-2! lg:py-3! bg-white rounded-sm font-bold hover:bg-blue-500 hover:text-white cursor-pointer'>Our History</button>
                </div>
                <p className='text-zinc-600 text-sm sm:text-md lg:text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.</p>
                <p className='text-zinc-600 text-sm md:text-md lg:text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour.</p>
            </figcaption>
        </figure>

    </section>
  )
}

export default HomeTwo