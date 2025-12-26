import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

function BlankLayout() {

  return (
    <>
    <main className='max-w-screen overflow-hidden'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default BlankLayout
