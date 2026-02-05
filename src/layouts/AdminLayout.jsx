import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../store/userSlice';
import AnimesList from '../components/AnimesList';
import Details from '../components/Details';
import AdsSection from '../components/AdsSection';
import Slider from '../components/Slider';

function AdminLayout() {
    const [darkMode, setDarkMode] = useState(false);
  const { loading, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
const dispatch = useDispatch();
const [currentPage, setCurrentPage] = useState('animes');

  const renderPage = () => {
    switch (currentPage) {
      case 'animes':
        return <AnimesList />;
      case 'details':
        return <Details onBack={() => setCurrentPage('animes')} />;
      case 'ads':
        return <AdsSection />;
      case 'slider':
        return <Slider />;
      default:
        return <AnimesList />;
    }
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [loading, user]);

  return (
    
    <>
        <div className={`flex min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
          <AdminSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="flex-1 flex flex-col">
        <AdminHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            {renderPage()}
        </main>
          </div>
          </div>
    </>
  )
}

export default AdminLayout
