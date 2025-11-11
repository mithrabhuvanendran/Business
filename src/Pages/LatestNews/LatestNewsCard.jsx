import React from 'react'
import Card from '../../Component/Card'

const latestNews = [
    {
        id: 1,
        name: "Make your team a Design driven company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://res.cloudinary.com/ddfhe3fan/image/upload/v1762775446/ux-indonesia-pqzRfBhd9r0-unsplash_nzxsms.jpg"
    },
    {
        id: 2,
        name: "The newest web framework that changed the world",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://res.cloudinary.com/ddfhe3fan/image/upload/v1762775450/tom-podmore-TwEhgfCWISA-unsplash_kxnvof.jpg"
    },
    {
        id: 3,
        name: "5 ways to improve user retention for your startup",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://res.cloudinary.com/ddfhe3fan/image/upload/v1762775479/ux-indonesia-w00FkE6e8zE-unsplash_1_gbchoh.jpg"
    },
]

const LatestNewsCard = () => {
  return (
    <>
        <Card category = {latestNews}/>
    </>
  )
}

export default LatestNewsCard