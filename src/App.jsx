import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <main className='max-w-screen overflow-hidden'>
    <Outlet/>
    </main>
  )
}

export default App
