import React, { useEffect, useState } from 'react'
import CardTwo from '../../Component/CardTwo'

const TeamCard = () => {
    const [data, setData] = useState({})
    const [activeCategory, setActiveCategory] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("./cardtwo.json")
                const fetchedData = await response.json()
                console.info(fetchedData);
                setData(fetchedData)

                const teamMembers = Object.keys(fetchedData)[0]
                setActiveCategory(fetchedData[teamMembers])
                // console.info(fetchedData[teamMembers]);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, [])
  return (
    <>
        <CardTwo category = {activeCategory} />
    </>
  )
}

export default TeamCard