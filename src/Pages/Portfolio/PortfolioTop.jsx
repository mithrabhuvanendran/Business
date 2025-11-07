import React from 'react'

const PortfolioTop = () => {
  return (
     <div className="flex flex-col items-center justify-center gap-5">
        <button className="border-2 py-2! px-4! rounded-3xl text-blue-500">
          Our Portfolio
        </button>
        <h1 className="text-3xl sm:text-4xl font-bold">Our Recent Works</h1>
        <p className="text-[14px] w-5/6 sm:text-base sm:w-4/6 lg:w-3/6 xl:w-2/6 text-center text-zinc-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
  )
}

export default PortfolioTop