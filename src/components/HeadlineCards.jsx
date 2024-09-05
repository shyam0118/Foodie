import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Culinary Delights Unleashed</p>
                <p className='text-xl px-2'>Tasty Tidbits</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Gastronomic Adventures Await You</p>
                <p className='text-xl px-2'>Flavor Fusion</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Indulge in Tantalizing Taste</p>
                <p className='text-xl px-2'>Epicurean Elegance</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Savor the Flavorful Creations</p>
                <p className='text-xl px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='text-xl px-2'>New Restaurants</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg" alt="" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Vegetable Salad With Wheat Bread</p>
                <p className='text-xl px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-200 hover:text-black transition duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards