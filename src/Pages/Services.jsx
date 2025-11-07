import React from 'react'
import ServicesTop from './Services/ServicesTop'
import ServicesList from './Services/ServicesList'

const Services = () => {
  return (
        <section className='grid place-items-center py-10! '>
          <div className='flex flex-col gap-5 sm:gap-10 w-[90vw] sm:w-[85vw] md:w-[95vw] lg:w-[90vw] xl:w-5/6'>
            <ServicesTop/>
            <ServicesList/>
          </div>
        </section>
  )
}

export default Services