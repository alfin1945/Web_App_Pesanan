// // coba
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function PesananDapur() {
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
//                         <th className="py-3 border">Pembayaran</th>
//                         <th className="py-3 border">Pesanan</th>
//                         <th className="py-3 border">Konfirmasi</th>
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
//                                     <button className='py-1 px-2 bg-blue-700 rounded text-white'>Pesanan Proses</button>
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
// export default PesananDapur;



import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PesananDapur() {
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

    const handleConfirm = async (orderId) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/pembayaran/${orderId}/`, { status: 'sudah selesai' }); // Sesuaikan endpoint API sesuai kebutuhan Anda
            setOrders(orders.map(order => order.id === orderId ? { ...order, status: 'sudah selesai' } : order));
        } catch (error) {
            console.error('Error updating order status', error);
        }
    };

    // pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='m-10'>
            <table className="w-full text-sm border text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-center'>
                        <th className="py-3 border">Nama Pemesan</th>
                        <th className="py-3 border">No Meja</th>
                        <th className="py-3 border">Total Harga</th>
                        <th className="py-3 border">Pembayaran</th>
                        <th className="py-3 border">Keterangan</th>
                        <th className="py-3 border">Pesanan</th>
                        {/* <th className="py-3 border">Konfirmasi</th> */}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(order => {
                        // Calculate total price for the order
                        const totalPrice = order.pesanan.items.reduce((sum, item) => sum + (item.menu.harga * item.jumlah_menu), 0);

                        return (
                            <tr key={order.id} className='text-center'>
                                <td className='border'>{order.nama_pemesan}</td>
                                <td className='border'>{order.pesanan.nomor_meja}</td>
                                <td className='border'>{totalPrice}</td>
                                <td className='border'>{order.metode}</td>
                                <td className='border'>{order.pesanan.keterangan}</td>
                                <td className='border'>
                                    {order.pesanan.items.map(item => (
                                        <div key={item.id} className='mb-2'>
                                            <div className='inline-block'>
                                                <p className='font-bold'>{item.menu.nama}</p>
                                                {/* <p>Harga: {item.menu.harga}</p> */}
                                                <p>Jumlah: {item.jumlah_menu}</p>
                                            </div>
                                        </div>
                                    ))}
                                </td>
                                {/* <td>
                                    {order.status === 'sudah selesai' ? (
                                        <button className='py-1 px-2 bg-green-500 rounded text-white' disabled>Selesai</button>
                                    ) : (
                                        <button 
                                            onClick={() => handleConfirm(order.id)} 
                                            className='py-1 px-2 bg-blue-700 rounded text-white'
                                        >
                                            Pesanan Proses
                                        </button>
                                    )}
                                </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

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
                            className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default PesananDapur;
