import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import SidebarAdmin from './SidebarAdmin'
import NavPageAdmin from './NavPageAdmin'

function MainPageAdmin() {
  return (
    <div>
        <div>
            <NavbarAdmin />
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#4CEB12] h-screen shadow-xl'>
                <SidebarAdmin />
            </div>
            <div className='col-span-10 bg-white h-screen'>
                <NavPageAdmin />
            </div>
        </div>
    </div>
  )
}

export default MainPageAdmin