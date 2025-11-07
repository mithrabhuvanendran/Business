import React from 'react'
import TeamTop from './Team/TeamTop'
import TeamCard from './Team/TeamCard'

const Team = () => {
  return (
    <>
    <section className='grid place-items-center py-10!'>
        <div className='flex flex-col gap-10 sm:gap-15 w-[80vw] sm:w-[75vw] md:w-[90vw] xl:w-5/6'>
            <TeamTop/>
            <TeamCard/>
        </div>
    </section>
    </>
  )
}

export default Team