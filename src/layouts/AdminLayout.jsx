import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

function AdminLayout() {
    const [darkMode, setDarkMode] = useState(false);
  
  return (
    <>
        <div className={`flex min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
        <AdminHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            <Outlet />
          </div>
          </div>
    </>
  )
}

export default AdminLayout
