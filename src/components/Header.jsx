import { ChevronDown, Filter, Menu, Search, Shuffle, User2, Users2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useScrollVisibility } from '../hooks/useScrollVisibility'
import { useDispatch } from 'react-redux'
import { fetchAnimes } from '../store/animeSlice'

const Header = () => {
  const dispatch = useDispatch();
    const [showDropdown,setShowDropdown] = useState(false);
    const [showGenres,setShowGenres] = useState(false);
    const [showTypes,setShowTypes] = useState(false);
    const visible=useScrollVisibility();
    const genres = ["Action","Adventure","Cars","Comedy","Dementia","Demons","Drama","Ecchi","Fantasy","Game","Herem","Hintai","Historical","Horror","Josei","Kids","Magic","Martial Arts","Mecha","Military"]
    const types = ["TV","Movie","OVA","ONA","Special"]

    useEffect(()=>{
      dispatch(fetchAnimes())
    },[])
  return (
    <>
    <header className={`bg-[#0C1116] box-border flex justify-between m-4 mx-6 rounded-2xl p-3 fixed z-2 top-0 right-0 left-0 transition-all delay-100 duration-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
        <div className='flex gap-3 items-center relative'>
      <Menu onClick={()=>setShowDropdown(prev=>!prev)} className='text-white cursor-pointer'/>
        <Link to={"/"}>
        <img src="/images/logo.png" alt="logo" width={"150px"} height={"auto"} />
        </Link>
      {
        showDropdown && <div className='max-[835px]:hidden w-48 overflow-hidden bg-[#181d22] absolute z-3 left-0 top-[calc(100%+15px)] text-white rounded-md'>
        <button onClick={()=>setShowGenres(prev=>!prev)} className='flex justify-between w-full items-center cursor-pointer font-bold hover:bg-[#2A2F38] p-3 text-sm'>
          <span>GENRES</span>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${showGenres===true ? "rotate-180" : ""}`}/>
        </button>
        <div className='w-full flex flex-wrap'>

        {
          showGenres && genres.map((item)=>{
            
            return <Link key={item} to={"/"} className='block w-1/2 hover:bg-[#2A2F38] p-2 text-gray-300 text-xs'>
        {item}
        </Link>
          })
        }
        </div>
        <button onClick={()=>setShowTypes(prev=>!prev)} className='flex justify-between w-full items-center cursor-pointer font-bold hover:bg-[#2A2F38] p-3 text-sm'>
          <span>Types</span>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${showTypes===true ? "rotate-180" : ""}`}/>
        </button>

        {
          showTypes && types.map((item)=>{
            
            return <Link key={item} to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-xs'>
        {item}
        </Link>
          })
        }
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        NEW RELEASES
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        UPDATES
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        ONGOING
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        RECENT
        </Link>
      </div>
      }
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
          <div className='flex gap-4 max-[835px]:hidden'>

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
        </div>
    </header>

    <div className={`transition-all duration-200 min-[835px]:hidden fixed top-0 ${showDropdown===true ? "translate-x-0" : "-translate-x-full"} w-screen h-screen overflow-hidden bg-[#181d22] z-1000 text-white rounded-md flex flex-col overflow-y-scroll`}>
            <X onClick={()=>setShowDropdown(false)} className='w-7 h-7 font-bold absolute top-6 left-4 hover:cursor-pointer'/>
        <button onClick={()=>setShowGenres(prev=>!prev)} className='flex justify-between w-full items-center cursor-pointer font-bold hover:bg-[#2A2F38] p-3 text-sm mt-16'>
          <span>GENRES</span>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${showGenres===true ? "rotate-180" : ""}`}/>
        </button>
        <div className='w-full flex flex-wrap'>

        {
          showGenres && genres.map((item)=>{
            
            return <Link key={item} to={"/"} className='block hover:bg-[#2A2F38] p-2 text-gray-300 text-xs'>
        {item}
        </Link>
          })
        }
        </div>
        <button onClick={()=>setShowTypes(prev=>!prev)} className='flex justify-between w-full items-center cursor-pointer font-bold hover:bg-[#2A2F38] p-3 text-sm'>
          <span>Types</span>
          <ChevronDown className={`w-5 h-5 transition-all duration-300 ${showTypes===true ? "rotate-180" : ""}`}/>
        </button>

        {
          showTypes && types.map((item)=>{
            
            return <Link key={item} to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-xs'>
        {item}
        </Link>
          })
        }
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        NEW RELEASES
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        UPDATES
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        ONGOING
        </Link>
        <Link to={"/"} className='block w-full hover:bg-[#2A2F38] p-2 text-gray-300 text-sm'>
        RECENT
        </Link>
        <div className='w-full flex gap-4 min-[835px]:hidden max-[835px]:justify-center max-[835px]:flex-wrap'>

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
      </div>
    </>
  )
}

export default Header
