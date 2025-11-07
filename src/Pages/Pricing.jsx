import React from 'react'
import PricingTop from './Pricing/PricingTop'
import PricingList from './Pricing/PricingList'

const Pricing = () => {
  return (
    <>
    <section className='grid place-items-center bg-zinc-100 py-10! '>
        <div className='flex flex-col gap-10 sm:gap-15 w-[83vw] sm:w-[75vw] md:w-[90vw] lg:w-[90vw] xl:w-5/6'>
            <PricingTop/>
            <PricingList/>
        </div>
    </section>
    </>
  )
}

export default Pricing