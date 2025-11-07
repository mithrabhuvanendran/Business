import React from 'react'
import Card from '../../Component/Card'

const latestNews = [
    {
        id: 1,
        name: "Make your team a Design driven company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://picsum.photos/500/300?random=30"
    },
    {
        id: 2,
        name: "The newest web framework that changed the world",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://picsum.photos/500/300?random=31"
    },
    {
        id: 3,
        name: "5 ways to improve user retention for your startup",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        img: "https://picsum.photos/500/300?random=32"
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