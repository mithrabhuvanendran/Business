import React from 'react'
import PortfolioTop from './Portfolio/PortfolioTop'
import PortfolioCard from './Portfolio/PortfolioCard'

const Portfolio = () => {
  return (
    <section className='grid place-items-center py-10!'>
    <div className=' flex flex-col gap-5'>
        <PortfolioTop/>
        <PortfolioCard/>
    </div>
    </section>
  )
}

export default Portfolio