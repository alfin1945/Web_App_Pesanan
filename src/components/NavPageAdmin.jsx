import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardAdmin from '../pages/DashboardAdmin'
import MenuAdmin from '../pages/MenuAdmin'
import PesananAdmin from '../pages/PesananAdmin'
import TransaksiAdmin from '../pages/TransaksiAdmin'
import PagesNotFound from '../pages/PagesNotFound'
import TambahMenuAdmin from '../pages/TambahMenuAdmin'
import UpdateMenuAdmin from '../pages/UpdateMenuAdmin'


function NavPageAdmin() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DashboardAdmin />} />
                <Route path='/MenuAdmin' element={<MenuAdmin />} />
                <Route path='/PesananAdmin' element={<PesananAdmin />} />
                <Route path='/TransaksiAdmin' element={<TransaksiAdmin />} />
                <Route path='/TambahMenu' element={<TambahMenuAdmin />} />
                {/* <Route path='/UpdateMenu' element={<UpdateMenuAdmin />} /> */}
                <Route path='/UpdateMenu/:id' element={<UpdateMenuAdmin />} />
                <Route path='*' element={<PagesNotFound />} />
            </Routes>
        </div>
    )
}

export default NavPageAdmin