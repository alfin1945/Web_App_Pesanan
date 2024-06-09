import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardDapur from '../pages/DashboardDapur'
import MenuDapur from '../pages/MenuDapur'
import PesananDapur from '../pages/PesananDapur'

function NavPageDapur() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DashboardDapur />} />
            <Route path='/MenuDapur' element={<MenuDapur />} />
            <Route path='/PesananDapur' element={<PesananDapur />} />
        </Routes>
    </div>
  )
}

export default NavPageDapur