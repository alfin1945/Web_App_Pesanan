import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateMenuAdmin() {
    const { id } = useParams(); // Mengambil ID menu dari URL
    const [namaMenu, setNamaMenu] = useState('');
    const [gambar, setGambar] = useState(null);
    const [harga, setHarga] = useState('');
    const [kategori, setKategori] = useState('');
    const [kategoriOptions, setKategoriOptions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Mengambil daftar kategori dari API
        axios.get('http://127.0.0.1:8000/api/kategori/')
            .then(response => {
                setKategoriOptions(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

        // Mengambil data menu yang ada berdasarkan ID
        axios.get(`http://127.0.0.1:8000/api/menu/${id}/`)
            .then(response => {
                const menu = response.data;
                setNamaMenu(menu.nama);
                setHarga(menu.harga);
                setKategori(menu.kategori);
                // Gambar tidak di-set di sini karena akan ditangani secara terpisah
            })
            .catch(error => {
                console.error('Error fetching menu:', error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nama', namaMenu);
        if (gambar) {
            formData.append('gambar', gambar);
        }
        formData.append('harga', harga);
        formData.append('kategori', kategori);

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/menu/${id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                setNamaMenu('');
                setGambar(null);
                setHarga('');
                setKategori('');

                alert('Menu berhasil diperbarui');

                navigate('/MenuAdmin');

            } else {
                throw new Error('Gagal memperbarui menu');
            }
        } catch (error) {
            console.error('Error:', error);
            
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className='border-b-2 border-slate-400 mx-7 mt-3'>
                <p className='text-xl font-semibold uppercase text-slate-400'>Form Update Menu</p>
            </div>
            <div className='flex justify-center items-center mt-16'>
                <div className='w-full max-w-xl border border-white shadow-xl bg-gradient-to-br from-white to-white/70 rounded-sm p-6'>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <label htmlFor='namaMenu' className='text-brown block mb-1'>
                                Nama Menu:
                            </label>
                            <input
                                type='text'
                                id='namaMenu'
                                className='border-2 border-coffe rounded block w-full py-1 px-3 bg-transparent'
                                value={namaMenu}
                                onChange={(e) => setNamaMenu(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='gambar' className='text-brown block mb-1'>
                                Gambar Menu (Opsional):
                            </label>
                            <input
                                type='file'
                                name='gambar'
                                id='gambar'
                                className='w-full py-1 rounded-sm text-beige file:bg-brown file:text-earth'
                                accept='image/*'
                                onChange={(e) => setGambar(e.target.files[0])}
                            />
                        </div>
                        <div>
                            <label htmlFor='harga' className='text-brown block mb-1'>
                                Harga Menu:
                            </label>
                            <input
                                type='number'
                                name='harga'
                                id='harga'
                                className='block w-full py-1 rounded-sm px-3 bg-transparent border-2 border-coffe'
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='kategori' className='text-brown block mb-1'>
                                Kategori Menu:
                            </label>
                            <select
                                name='kategori'
                                id='kategori'
                                className='block w-full py-1 rounded-sm px-3 bg-transparent border-2 border-coffe'
                                value={kategori}
                                onChange={(e) => setKategori(e.target.value)}
                            >
                                <option value=''>--Pilih Kategori--</option>
                                {kategoriOptions.map(option => (
                                    <option key={option.id} value={option.id}>{option.nama_kategori}</option>
                                ))}
                            </select>
                        </div>
                        <div className='space-x-2'>
                            <button type='submit' className='bg-blue-700 py-2 rounded-sm px-4 text-white font-semibold'>
                                Update
                            </button>
                            <button
                                type='button'
                                onClick={() => navigate('/MenuAdmin')}
                                className='bg-green-500 py-2 rounded-sm px-4 text-white font-semibold'
                            >
                                Kembali
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateMenuAdmin;
