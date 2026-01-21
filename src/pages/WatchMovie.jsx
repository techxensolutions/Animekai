import React from 'react'
import Breadcrums from '../components/Breadcrums'
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Mic2Icon, Share, Trophy } from 'lucide-react'
import Updates from '../components/Updates'
import FilterCard from '../components/FilterCard'
import Tops from '../components/Tops'

const WatchMovie = () => {
  return (
    <>
    <div className='pt-40 filterspage min-h-screen'>
      <div className='flex gap-8 mx-8' style={{zIndex:10,position:"relative"}}>
        <div className='w-[70%]'>
          <div className='rounded-t-2xl bg-[#0C1116] inset-0 p-3'> 
            <Breadcrums/>
          </div>
          <video src="/sample.mp4" className='inset-0' controls autoPlay></video>
          <div className='rounded-b-2xl bg-[#0C1116] inset-0 p-4'> 
            <div className='flex justify-between'>
              <span className='font-bold text-white'>You are watching Episode 1</span>
              <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
              </div>
            </div>
            <p className='text-gray-400 text-sm mt-3'>If current server doesn't work please try other servers beside</p>
          </div>
        </div>
        <div className='w-[30%] rounded-2xl bg-[#0C1116] p-4'>
          <div className='flex justify-between'>
            <span className='text-sm text-white font-bold'>Episodes:</span>
            <div className='flex gap-1'>
              <div className='relative text-gray-400 z-20'>
                <span className='absolute left-1'>#</span>
              <input type="text" className='rounded-md bg-gray-800 pl-5 w-40' placeholder='Find'/>
              </div>
              <button className='rounded-sm p-1 bg-gray-800'><Menu className='h-3 w-3 text-gray-900 bg-gray-400 rounded-sm'/></button>
            </div>
          </div>
          <div className='flex justify-between p-1 bg-gray-800 rounded-md my-5'>
            <ChevronLeft className='h-5 w-5 text-gray-400'/>
            <div className='text-white flex gap-2'>
              <div>
              <span>1</span>
              <span>/</span>
              <span>12</span>
              </div>
            <ChevronDown className='h-5 w-5 text-gray-400'/>
            </div>
            <ChevronRight className='h-5 w-5 text-gray-400'/>
          </div>
          <div className='flex gap-2 flex-wrap px-4 mx-auto w-[95%]'>
            {
              [1,2,3,4,5,6,7,8,9,10,11,12].map((val)=>{
                return <button key={val} className='bg-gray-800 hover:bg-[#E45F3A] h-12 w-13 rounded-lg text-lg text-white font-bold'>
              {val}
            </button>
              })
            }
          </div>
        </div>
      </div>
      <div className='m-8 flex rounded-2xl overflow-hidden' style={{zIndex:10,position:"relative"}}>
        <div className='inset-0 p-6 bg-[url("/images/filterimage2.jpg")] backdrop-blur-2xl'>

        <img src="/images/filterimage2.jpg" alt="" width={"150px"} height={"auto"} />
        </div>
        <div className='flex-1 bg-[#0C1116] inset-0 pl-6'>
          <h1 className='text-white font-bold text-lg'>A Gatherer's Adventure in Isekai</h1>
            <div className="flex gap-2 my-3">
                 <span className='text-[10px] p-px flex items-center border bg-[#E45F3A] rounded-md'>PG-13</span>
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
              </div>
              <p className='text-white text-xs text-justify w-[80%]'>
                Takeru Kamishiro is a normal guy with an ordinary office job but finds himself summoned to another world. Takeru starts his new life in "Madeus," a world with swords and magic, fully equipped with multiple skills! Not only does he have enhanced physical and amazing magic abilities, but also the power to "search" for valuable items. With the cheat skills he's been provided, Takeru starts his new adventure in the new isekai!!
              </p>
        </div>
      </div>
    <div className="mb-7 mx-5" style={{zIndex:10,position:"relative"}}>
        <div className="w-[30%] mt-5 ml-auto rounded-2xl overflow-hidden bg-[#0C1116]">

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
          <ul className="text-white space-y-2 p-2">
            {
              [1,2,3,4,5,6,7,8,9,10].map((num)=>{
                return <Tops num={num} key={num}/>
          }) 
            }
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default WatchMovie
