import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
      <img className='w-11 h-11 rounded-full' src="https://cdn-www.bluestacks.com/bs-images/Icon_com.sixjoy.game_.blue_.jpg" alt="Profile" />
      <div className='flex flex-col'>
        <span className='font-bold text-md text-black'>
            Alihan Öztürk
        </span>
        <span className='text-gray-dark text-sm '>
            @kalemdengi
        </span>
      </div>
      <div className='flex space-x-1'>
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
      </div>
    </div>
  )
}

export default UserBox
