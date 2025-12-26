import { Filter, Menu, Search, Shuffle, User2, Users2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

const Header = () => {
    
  return (
    <header className='bg-[#0C1116] flex justify-between m-4 mx-6 rounded-2xl p-3 fixed z-2 top-0 right-0 left-0'>
        <div className='flex gap-3 items-center '>
      <Menu className='text-white'/>
      <img src="/images/logo.png" alt="logo" width={"150px"} height={"auto"} />
        </div>
        <div className='flex items-center gap-4'>
            <div className="relative w-full">
            <input
              type="text"
              className="w-full p-2 bg-[#181d22] text-white rounded-xl pl-9 pr-14 focus:outline-none"
              placeholder="Search anime"
            />
            <Search className="absolute text-white z-11 h-4 w-4 top-3 left-2" />
            <div className="absolute text-white top-3 right-2 flex items-center hover:text-[#fd7e14]">
              <Filter fill="white" className="w-4 h-4 " />
              <span className='text-sm'>Filter</span>
            </div>
          </div>
          <Link to={"/"} >
          <Users2 className='h-7 w-7 text-white'/>
          </Link>
          <Link to={"/"} >
          <Shuffle className='h-7 w-7 text-white'/>
          </Link>
          <LanguageToggle/>
          <Link to={"/"} className='rounded-full bg-gray-800 p-2'>
          <User2 className='w-5 h-5 text-white'/>
          </Link>
        </div>
    </header>
  )
}

export default Header
