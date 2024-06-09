import React from 'react'
import NavbarDapur from './NavbarDapur';
import SidebarDapur from './SidebarDapur';
import NavPageDapur from './NavPageDapur';

function MainPageDapur() {
  return (
    <div>
        <div>
            <NavbarDapur />
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#4CEB12] h-screen shadow-xl'>
                <SidebarDapur />
            </div>
            <div className='col-span-10 bg-white h-screen'>
                <NavPageDapur />
            </div>
        </div>
    </div>
  )
}

export default MainPageDapur;