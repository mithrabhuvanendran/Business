import React from 'react'

const LatestNewsTop = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-3">
        <button className="border-2 border-blue-600 text-blue-600 font-bold rounded-4xl px-5! py-2!">
          Latest News
        </button>
        <h1 className="text-3xl text-center sm:text-4xl font-bold">Latest News & Blog</h1>
        <p className="text-[14px] sm:text-base w-5/6 sm:w-4/6 md:w-4/6 lg:w-3/6 text-center text-zinc-600">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. 
        </p>
      </div>
    </>
  )
}

export default LatestNewsTop