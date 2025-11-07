import React, { useEffect, useState } from 'react'
import Card from '../../Component/Card';

const PortfolioCard = () => {
    const [data, setData] = useState({});
    const [activeCategory, setActiveCategory] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("./card.json");
                const fetchedData = await response.json(); 
                setData(fetchedData);

                const firstProduct = Object.keys(fetchedData)[0] // To have AllWork persist, once refreshed
                setActiveCategory(fetchedData[firstProduct])
                console.info(firstProduct); // allWork

            } catch (err) {
                console.error(err);   
            }
        }
        
        fetchData()

    }, [])

    const handleCategory = (key) => {
        const selectedProduct = data[key]
        console.log(key);
        console.log(selectedProduct);
        setActiveCategory(selectedProduct)
    }

    return (
        <>
            <div className='flex justify-center'> 
                <nav className='w-5/6 md:w-4/6'>
                    <ul className='flex flex-wrap gap-3 sm:flex-nowrap items-center justify-around'>
                        {Object.keys(data).map((productKey) => (
                            <li key={productKey} onClick={() => handleCategory(productKey)} className='text-zinc-600 font-bold uppercase cursor-pointer hover:text-blue-600'>{productKey}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Card category = {activeCategory}/>
        </>
  )
}

export default PortfolioCard