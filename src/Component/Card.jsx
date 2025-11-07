import React from 'react'

const Card = ({category}) => {
  return (
    <section className='grid place-items-center '>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 px-5! py-10! gap-5 w-[90vw] sm:w-[85vw] lg:w-[90vw] xl:w-5/6'>
        {category.length > 0 && category.map((item) => (
          <figure key={item.id} className='flex flex-col gap-3 overflow-hidden rounded-lg hover:rounded-lg'>
            <div className='h-75 overflow-hidden rounded-lg hover:rounded-lg'>
                <img className='rounded-lg hover:rounded-lg hover:scale-110 hover:rotate-1 hover:transition duration-200 ease-in cursor-pointer ' src={item.img} alt="" />
            </div>
            <figcaption className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>{item.name}</h1>
                <p className=''>{item.description} </p>
            </figcaption>
        </figure>
        ))}
    </div>
    </section>
  )
}

export default Card