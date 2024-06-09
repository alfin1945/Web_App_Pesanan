import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TambahMenuAdmin() {
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
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nama', namaMenu);
        formData.append('gambar', gambar);
        formData.append('harga', harga);
        formData.append('kategori', kategori);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/menu/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                setNamaMenu('');
                setGambar(null);
                setHarga('');
                setKategori('');

                alert('Menu berhasil ditambahkan');

                navigate('/MenuAdmin');

            } else {
                throw new Error('Gagal tambah menu');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Gagal ditambahkan');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className='border-b-2 border-slate-400 mx-7 mt-3'>
                <p className='text-xl font-semibold uppercase text-slate-400'>Form Tambah Menu</p>
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
                                Gambar Menu:
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
                            <button type='submit' className='bg-blue-700 py-1 rounded-sm px-4 text-white font-semibold'>
                                Tambah
                            </button>
                            <Link to={'/MenuAdmin'} className='bg-green-500 py-1 rounded-sm px-4 text-white font-semibold'>
                                Kembali
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahMenuAdmin;
