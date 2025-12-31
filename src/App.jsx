import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <main className='min-w-screen overflow-hidden'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
