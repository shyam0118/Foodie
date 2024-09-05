import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { MdFavorite, MdHelp, MdOutlineDeliveryDining } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left section */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Food<span className='font-bold text-orange-200'>ie</span>
                </h1>
                <div className='flex lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-orange-200 text-black rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* search input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg;w-[500px]'>
                <AiOutlineSearch size={30} />
                <input type='text' placeholder='Search foods' className='bg-transparent p-2 focus:outline-none' />
            </div>
            {/* cart button */}
            <button className='bg-orange-200 text-black hidden md:flex p-2 items-center rounded-full'>
                <BsFillCartFill /> <span className='px-1'>Cart</span>
            </button>
            {/* Mobile menu */}

            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'> </div> : ''}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl py-2 px-2'>
                    Food<span className='font-bold'>ie</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex items-center' ><MdOutlineDeliveryDining size={25} className='mr-4' />Orders</li>
                        <li className='text-xl py-4 flex items-center' ><MdFavorite size={25} className='mr-4' />Favorite</li>
                        <li className='text-xl py-4 flex items-center' ><FaWallet size={25} className='mr-4' />Wallet</li>
                        <li className='text-xl py-4 flex items-center' ><AiFillTag size={25} className='mr-4' />Promotions</li>
                        <li className='text-xl py-4 flex items-center' ><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
                        <li className='text-xl py-4 flex items-center' ><FaUserFriends size={25} className='mr-4' />Invite</li>
                        <li className='text-xl py-4 flex items-center' ><MdHelp size={25} className='mr-4' />Help</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar