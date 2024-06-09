import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MenuAdmin() {
    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Jumlah item per halaman, bisa disesuaikan

    // Fetch menu data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/menu/');
                setMenu(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle delete action
    const handleDelete = async (id) => {
        try {
            setIsLoading(true);
            await axios.delete(`http://127.0.0.1:8000/api/menu/${id}`);
            setMenu(menu.filter(item => item.id !== id));
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menu.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mt-7 mx-10'>
            <div className='border-b-2'>
                <p className='text-slate-500 text-xl font-semibold'>Tabel Menu</p>
            </div>
            <div className='mt-5'>
                <div className='flex justify-end'>
                    <Link to="/TambahMenu" className='bg-blue-600 py-1 px-2 rounded text-white'>
                        Tambah Menu
                    </Link>
                </div>
                <div className='mt-2'>
                    <table className="w-full text-sm border text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-center'>
                                <th scope="col" className="py-3 border">Nama Menu</th>
                                <th scope="col" className="py-3 border">Gambar</th>
                                <th scope="col" className="py-3 border">Harga</th>
                                <th scope="col" className=" py-3 border" >Jenis</th>
                                <th scope="col" className="py-3 border">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item) => (
                                <tr className='text-center' key={item.id}>
                                    <td className='border uppercase'>{item.nama}</td>
                                    <td className='border flex justify-center'>
                                        <img src={item.gambar} alt={item.nama} className='w-8 h-8 m-2' />
                                    </td>
                                    <td className='border'>{item.harga}</td>
                                    {/* <td className='border'>{item.kategori?.nama_detail.nama_kategori || 'Tidak ada kategori'}</td> */}
                                    <td className='border'>{item.kategori_detail.nama_kategori}</td>
                                    <td className='space-x-2 border'>
                                        <Link to={`/UpdateMenu/${item.id}`} className='bg-yellow-400 py-1 px-2 rounded text-white'>
                                            EDIT
                                        </Link>
                                        <button onClick={() => handleDelete(item.id)} className='bg-red-500 py-1 px-2 rounded text-white'>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={menu.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
}

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='flex justify-center space-x-2'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-[#12EB2D] text-white' : 'bg-white text-[#12EB2D]'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuAdmin;
