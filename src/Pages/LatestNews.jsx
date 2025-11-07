import React from 'react'
import LatestNewsTop from './LatestNews/LatestNewsTop'
import LatestNewsCard from './LatestNews/LatestNewsCard'

const LatestNews = () => {
  return (
    <>
        <section className='grid place-items-center py-10!'>
            <div className='flex flex-col gap-5'>
                <LatestNewsTop/>
                <LatestNewsCard/>
            </div>
        </section>
    </>
  )
}

export default LatestNews