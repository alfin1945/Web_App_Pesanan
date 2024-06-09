// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Pesanan() {
//     const [orders, setOrders] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(8); // Jumlah item per halaman, bisa disesuaikan

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/pembayaran/'); // Sesuaikan endpoint API sesuai kebutuhan Anda
//                 setOrders(response.data);
//                 setIsLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setIsLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     // pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div className='m-10'>
//             <table className="w-full text-sm border text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr className='text-center'>
//                         <th className="py-3 border">Nama Pemesan</th>
//                         <th className="py-3 border">No Meja</th>
//                         <th className="py-3 border">Total Harga</th>
//                         {/* <th className="py-3 border">Keterangan</th> */}
//                         {/* <th className="py-3 border">Nomor Whatsapp  </th> */}
//                         <th className="py-3 border">Pembayaran</th>
//                         <th className="py-3 border">Pesanan</th>
//                         <th className="py-3 border">Confirm</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map(order => (
//                         <tr key={order.id} className='text-center'>
//                             <td className='border'>{order.nama_pemesan}</td>
//                             <td className='border'>{order.pesanan.nomor_meja}</td>
//                             <td className='border'>{order.pesanan.total_harga}</td>
//                             {/* <td className='border'>{order.pesanan.keterangan}</td> */}
//                             <td className='border'>{order.metode}</td>
//                             <td className='border'>
//                                 {order.pesanan.items.map(item => (
//                                     <div key={item.id} className='mb-2'>
//                                         {/* <img src={item.menu.gambar} alt={item.menu.nama} className='w-14 h-14 inline-block mr-2' /> */}
//                                         <div className='inline-block'>
//                                             <p className='font-bold'>{item.menu.nama}</p>
//                                             <p>Harga: {item.menu.harga}</p>
//                                             {/* <p>Kategori: {item.menu.kategori_detail.nama_kategori}</p> */}
//                                             <p>Jumlah: {item.jumlah_menu}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </td>
//                             <td>
//                                 <button className='py-1 px-2 bg-yellow-400'>cetak</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Pagination */}
//             <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={orders.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// }

// const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//     return (
//         <nav>
//             <ul className='flex justify-center space-x-2'>
//                 {pageNumbers.map(number => (
//                     <li key={number} className='page-item'>
//                         <button
//                             onClick={() => paginate(number)}
//                             className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//                         >
//                             {number}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );

// }
// export default Pesanan;


// // coba
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import * as FaIcons from "react-icons/fa";

// function Pesanan() {
//     const [orders, setOrders] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(8); // Jumlah item per halaman, bisa disesuaikan

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/pembayaran/'); // Sesuaikan endpoint API sesuai kebutuhan Anda
//                 setOrders(response.data);
//                 setIsLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setIsLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     // pagination logic
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div className='mt-7 mx-10'>
//             <div className='border-b-2'>
//                 <p className='text-slate-500 text-xl font-semibold'>Tabel Pesanan</p>
//             </div>
//             <div className='mt-5'>
//             <table className="w-full text-sm border text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr className='text-center'>
//                         <th className="py-3 border">Nama Pemesan</th>
//                         <th className="py-3 border">No Meja</th>
//                         <th className="py-3 border">Total Harga</th>
//                         <th className="py-3 border">Pembayaran</th>
//                         <th className="py-3 border">Pesanan</th>
//                         <th className="py-3 border">Confirm</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentItems.map(order => {
//                         // Calculate total price for the order
//                         const totalPrice = order.pesanan.items.reduce((sum, item) => sum + (item.menu.harga * item.jumlah_menu), 0);

//                         return (
//                             <tr key={order.id} className='text-center'>
//                                 <td className='border'>{order.nama_pemesan}</td>
//                                 <td className='border'>{order.pesanan.nomor_meja}</td>
//                                 <td className='border'>{totalPrice}</td>
//                                 <td className='border'>{order.metode}</td>
//                                 <td className='border'>
//                                     {order.pesanan.items.map(item => (
//                                         <div key={item.id} className='mb-2'>
//                                             <div className='inline-block'>
//                                                 <p className='font-bold'>{item.menu.nama}</p>
//                                                 <p>Harga: {item.menu.harga}</p>
//                                                 <p>Jumlah: {item.jumlah_menu}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </td>
//                                 <td>
//                                     <button className='py-1 px-2 bg-yellow-400 text-white text-xl rounded'><FaIcons.FaPrint /></button>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>

//             {/* Pagination */}
//             <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={orders.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//         </div>
//     );
// }

// const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//     return (
//         <nav>
//             <ul className='flex justify-center space-x-2'>
//                 {pageNumbers.map(number => (
//                     <li key={number} className='page-item'>
//                         <button
//                             onClick={() => paginate(number)}
//                             className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-[#12EB2D] text-white' : 'bg-white text-[#12EB2D]'}`}
//                         >
//                             {number}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }
// export default Pesanan;


// code untuk handle pesanan via whatsapp
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Pesanan() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Jumlah item per halaman, bisa disesuaikan

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/pembayaran/'); // Sesuaikan endpoint API sesuai kebutuhan Anda
                setOrders(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, []);

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSendWhatsApp = (order) => {
        const phoneNumber = order.nomor_hp; // Tambahkan nomor telepon di data pesanan jika belum ada
        const orderDetails = order.pesanan.items.map(item => (
            `${item.menu.nama} (Harga: ${item.menu.harga}, Jumlah: ${item.jumlah_menu})`
        )).join('\n');

        const message = `Halo ${order.nama_pemesan},\n\nBerikut adalah detail pesanan Anda:\n${orderDetails}\n\nTotal Pembayaran yang akan dibayarkan: ${order.pesanan.total_harga}\n\nTerima kasih telah memesan di restoran kami!\n\n\n\n Salam cocoday Happy Enjoy`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='m-10'>
            <div className='border-b-2'>
                <p className='font-semibold text-xl text-slate-500'>Tabel Pesanan</p>
            </div>
            <div className='mt-7'>
                <table className="w-full text-sm border text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th className="px-6 py-3 border">Nama Pemesan</th>
                            <th className="px-6 py-3 border">Nomor WA</th>
                            <th className="px-6 py-3 border">Nomor Meja</th>
                            <th className="px-6 py-3 border">Total Bayar</th>
                            <th className="px-6 py-3 border">Pembayaran</th>
                            <th className="px-6 py-3 border">Pesanan</th>
                            <th className='px-6 py-3 border'>Tindakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(order => (
                            <tr key={order.id} className='text-center'>
                                <td className='border'>{order.nama_pemesan}</td>
                                <td className='border'>{order.nomor_hp}</td>
                                <td className='border'>{order.pesanan.nomor_meja}</td>
                                <td className='border'>{order.pesanan.total_harga}</td>
                                <td className='border'>{order.metode}</td>
                                <td className='border'>
                                    {order.pesanan.items.map(item => (
                                        <div key={item.id} className='mb-2'>
                                            <div className='inline-block'>
                                                <p className='font-bold'>{item.menu.nama}</p>
                                                <p>Harga: {item.menu.harga}</p>
                                                <p>Kategori: {item.menu.kategori_detail.nama_kategori}</p>
                                                <p>Jumlah: {item.jumlah_menu}</p>
                                            </div>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    <button className='py-1 px-2 bg-yellow-400' onClick={() => handleSendWhatsApp(order)}>Kirim WA</button>
                                    {/* <button className='py-1 px-2 bg-yellow-400'>Cetak</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={orders.length}
                paginate={paginate}
                currentPage={currentPage}
            />
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
                            className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-[#12EB2D] text-white' : 'bg-white text-blue-500'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pesanan;
