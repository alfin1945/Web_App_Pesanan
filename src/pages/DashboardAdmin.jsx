import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [menuCount, setMenuCount] = useState(0);
    const [pesananCount, setpesananCount] = useState(0);
    // const [processingOrdersCount, setProcessingOrdersCount] = useState(0);
    const [pesananSelesai, setPesananSelesai] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const menuResponse = await axios.get('http://127.0.0.1:8000/api/menu/');
                const pesananCountResponse = await axios.get('http://127.0.0.1:8000/api/pesanan/');
                // const processingOrdersResponse = await axios.get('http://127.0.0.1:8000/api/pesanan/processing/count/');
                const pesananSelesaiResponse = await axios.get('http://127.0.0.1:8000/api/pembayaran/');

                setMenuCount(menuResponse.data.length);
                setpesananCount(pesananCountResponse.data.length);
                // setProcessingOrdersCount(processingOrdersResponse.data.count);
                setPesananSelesai(pesananSelesaiResponse.data.length);


                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mx-10 mt-5'>
            <div className='border-b-2'>
                <p className='text-xl font-semibold text-slate-500'>Dashboard</p>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold'>Jumlah Menu</h2>
                    <p className='text-2xl'>{menuCount}</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold'>Pesanan</h2>
                    <p className='text-2xl'>{pesananCount}</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold'>Total Transaksi</h2>
                    {/* <p className='text-2xl'>{processingOrdersCount}</p> */}
                    <p className='text-2xl'>{pesananSelesai}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


