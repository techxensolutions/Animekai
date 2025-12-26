import heroitems from "../data/heroitems.json"
import { useEffect, useState } from 'react'
import HeroItemDetails from './HeroItemDetails';
const HomeHero = () => {
  const [currentIndex,setCurrentIndex] = useState(0);
  useEffect(()=>{
    const interval=setInterval(() => {
      setCurrentIndex((prev)=>(prev+1)%heroitems.length);
    }, 3000);
    return ()=>clearInterval(interval);
  },[]);
  const currentItem=heroitems[currentIndex];
  return (
    <>
      <section key={currentIndex} className={`min-h-screen bg-cover bg-center relative flex items-center pl-8 transition-all duration-75 ease-in-out animate-fade`} style={{ backgroundImage: `url(${currentItem.image})` }}>
      <div className='herogradient inset-0 h-full w-full absolute'/>
      <div className='text-white text-xl absolute bottom-5 right-9 flex gap-4 items-center'>
        <button>&lt;</button>
        <div className='space-x-3'>
        <span className='text-3xl'>{currentIndex+1}</span>
        <span>/</span>
        <span>5</span>
        </div>
        <button>&gt;</button>
      </div>
      <HeroItemDetails currentIndex={currentIndex} currentItem={currentItem} />
      </section>
    </>
  )
}

export default HomeHero
