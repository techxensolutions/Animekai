import { useEffect, useState } from 'react'
import HeroItemDetails from './HeroItemDetails';
import Tops from './Tops';
import Share from "./Share";
import { Mic2Icon, Trophy } from "lucide-react";
import axios from "axios";

const BASE_URI = import.meta.env.VITE_BACKEND_URI;


const HomeHero = ({latest}) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const [featured,setFeatured] = useState([]);
  useEffect(()=>{
    const fetchFeatured=async ()=>{
      try {
      const response = await axios.get(`${BASE_URI}/api/admin/featured`);
      console.log('featured', response.data)
      let feat_animes=response.data;
      setFeatured(feat_animes);
    } catch (error) {
        console.log('Error in Latest: ', error)
    }
    }
    fetchFeatured();
  },[])
  useEffect(()=>{
    const interval=setInterval(() => {
      setCurrentIndex((prev)=>(prev+1)%featured.length);
    }, 3000);
    return ()=>clearInterval(interval);
  },[featured]);
  const currentItem=featured[currentIndex]?.anime;
  return (
    <>
      <section key={currentIndex} className={`min-h-[calc(100vh+60px)] bg-cover bg-no-repeat bg-center relative flex items-center max-md:justify-center box-border transition-all duration-75 ease-in-out animate-fade overflow-x-hidden`} style={{ backgroundImage: `url(${currentItem?.image})` }}>
      <div className='herogradient inset-0 h-full w-full absolute'/>
      <div className='text-white text-xl absolute z-10 bottom-16 right-9 flex gap-4 items-center'>
        <button>&lt;</button>
        <div className='space-x-3'>
        <span className='text-3xl'>{currentIndex+1}</span>
        <span>/</span>
        <span>5</span>
        </div>
        <button>&gt;</button>
      </div>
      {currentItem && <HeroItemDetails currentIndex={currentIndex} currentItem={currentItem} />}
      </section>
      <div className="relative z-1 w-full">

      <div className="hidden md:block absolute -bottom-18 left-5 bg-[#11161b] p-3 rounded-xl md:w-[70%]">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
              <img src="/images/sharing.gif" alt="sharing" className="w-12 h-12"/>
            </div>
            <div className="flex flex-col max-w-40">
              <span className="font-semibold text-xl text-green-500">Love this site?</span>
              <span className="text-white text-sm">Share it and let others now!</span>
            </div>
            </div>
            <Share/>
          </div>
        </div>
        <div className="hidden md:block absolute -top-[calc(100%+45px)] right-5 bg-[#11161b] p-3 rounded-xl w-[25%] tops">
          <div className="p-2 flex items-center justify-between">

          <div className="flex items-center gap-4 text-white">
            <Trophy className="w-8 h-8 bg-[#E45F3A] p-2 rounded-full"/>
          <span className="font-bold text-2xl">Top 10</span>
          </div>
          <select name="toptime" className="bg-[#E45F3A] p-2 text-white font-semibold rounded-lg">
            <option value="now">NOW</option>
            <option value="day">DAY</option>
            <option value="week">WEEK</option>
            <option value="month">MONTH</option>
          </select>
          </div>
          <ul className="text-white space-y-2">
            {
              latest.map((anime,ind)=>{
                return <Tops anime={anime} num={ind+1} key={anime._id}/>
              }) 
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomeHero
