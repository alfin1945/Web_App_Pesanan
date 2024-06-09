import React, { useRef } from 'react';
import Label from './Elements/Form/Label';
import MainPageAdmin from './MainPageAdmin';
import MainPageDapur from './MainPageDapur';

function Login() {
  const userName = useRef();
  const password = useRef();

  const getUserName = localStorage.getItem("userNameData");
  const getPassword = localStorage.getItem("passwordData");
  const getUserRole = localStorage.getItem("userRole");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userName.current.value;
    const pass = password.current.value;

    
    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("userNameData", user);
      localStorage.setItem("passwordData", pass);
      localStorage.setItem("userRole", "admin");
    // } else if (user === "user" && pass === "user123") {
    } else if (user === "dapur" && pass === "dapur123") {
      localStorage.setItem("userNameData", user);
      localStorage.setItem("passwordData", pass);
      localStorage.setItem("userRole", "dapur");
    }
    window.location.reload();
  }

  return (
    <div>
      {
        getUserName && getPassword ?
          (getUserRole === "admin" ? <MainPageAdmin /> : <MainPageDapur />) :
          <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-blue-800 w-full max-w-md p-6 rounded-lg shadow-lg'>
              <div className='flex justify-start mb-5 text-white font-semibold border-b border-white pb-2'>
                Login
              </div>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Label title="UserName:" htmlFor="username" />
                  <input type="text" className="w-full py-2 border rounded-sm text-white border-white bg-transparent px-3 placeholder:text-slate-300" placeholder="Masukkan Username" ref={userName} required />
                </div>
                <div>
                  <Label title="Password:" htmlFor="password" />
                  <input type="password" className="w-full py-2 border rounded-sm text-white border-white bg-transparent px-3 placeholder:text-slate-300" placeholder="*****" ref={password} required />
                </div>
                <button type="submit" className='w-full py-2 bg-blue-600 font-semibold text-white rounded hover:bg-transparent hover:border-white hover:border'>LOGIN</button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}

export default Login;
