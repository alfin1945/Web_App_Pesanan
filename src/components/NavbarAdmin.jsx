import React from 'react'
import { BsBook, BsDoorClosed} from 'react-icons/bs'

function NavbarAdmin() {
  return (
    <div className='bg-[#4CEB12] border-b h-16 w-full flex items-center justify-between px-10 shadow-xl'>
      <div className='flex items-center space-x-2'>
        <div>
          <BsBook className='text-white text-4xl' />
        </div>
        <div className='text-white text-2xl font-bold'>
          COCODAY
        </div>
      </div>
      <button className='text-white text-3xl font-extrabold'>
        <BsDoorClosed />
      </button>
    </div>
  )
}

export default NavbarAdmin