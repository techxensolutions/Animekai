import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../store/UserSlice';

function AdminLayout() {
    const [darkMode, setDarkMode] = useState(false);
  const { isAuthorized, loading, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [loading, isAuthorized]);

  return (
    
    <>
        <div className={`flex min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
        <AdminHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            <Outlet />
        </main>
          </div>
          </div>
    </>
  )
}

export default AdminLayout
