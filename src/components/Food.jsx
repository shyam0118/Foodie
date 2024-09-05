import React, { useState } from 'react'
import { data } from '../data/Data'

const Food = () => {

  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(data.filter((items) => {
      return items.category === category;
    })
    )
  }

  const filterPrice = (price) => {
    setFoods(data.filter((items) => {
      return items.price === price;
    })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='flex flex-col lg:flex-row md:flex-row justify-between'>
        <div>
          <p className='font-bold text-grey-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap' >
            <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chickens</button>
          </div>
        </div>
        <div>
          <p className='font-bold text-grey-700'>Filter Price</p>
          <div className='flex justify-between '>
            <button onClick={() => filterPrice('$5')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$5</button>
            <button onClick={() => filterPrice('$10')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$10</button>
            <button onClick={() => filterPrice('$50')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$50</button>
            <button onClick={() => filterPrice('$200')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$100</button>
            <button onClick={() => filterPrice('$500')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$200</button>
            <button onClick={() => filterPrice('$100')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$500</button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-2'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-lg'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food