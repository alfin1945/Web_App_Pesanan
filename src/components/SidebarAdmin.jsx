import React from 'react';
import { SidebarDataAdmin } from '../data/SidebarDataAdmin';
import { NavLink } from 'react-router-dom';

function SidebarAdmin() {
    const activeLink = 'flex justify-start items-center space-x-3 my-3 rounded text-xl pl-3 font-medium w-full h-10 text-[#4CEB12] bg-white';
    const normalLink = 'flex justify-start items-center space-x-3 my-3 rounded text-xl pl-3 font-medium w-full h-10 hover:bg-white hover:text-[#4CEB12] ';

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='text-white mt-5 mx-5'>
            {
                SidebarDataAdmin.map((item, index) => (
                    <div key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </NavLink>
                    </div>
                ))
            }

            <button
                onClick={handleClick}
                className='flex items-center justify-center text-center mt-14 py-1 uppercase font-semibold rounded-full bg-red-600 w-32'
            >
                admin
            </button>
        </div>
    );
}

export default SidebarAdmin;
