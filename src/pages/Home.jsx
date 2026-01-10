import { SquareArrowUpRight,Mic2Icon, Trophy, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import HomeHero from "../components/HomeHero"
import Updates from "../components/Updates"
import FilterCard from "../components/FilterCard"
import Tops from "../components/Tops"
import Share from "../components/Share"

const Home = () => {
  return (
    <>
      <HomeHero/>
      <div className="mt-10 md:mt-24 md:ml-10 md:w-[70%] mb-7 mx-5">
        <div className="md:hidden mb-5 bg-[#11161b] p-3 rounded-xl">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex shrink-0 justify-center items-center">
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
        <div className="flex justify-between text-white">
        <h2 className="font-bold text-2xl ">LATEST UPDATES</h2>
        <div className="flex items-center space-x-3">
          <button type="button" className="cursor-pointer hover:text-green-600">ALL</button>
          <button type="button" className="cursor-pointer hover:text-green-600">DUBBED</button>
          <div className="flex gap-2">
            <button className="w-6 h-6 flex justify-center items-center rounded-full overflow-hidden bg-white hover:bg-green-600 cursor-pointer"><ChevronLeft className="h-4 w-4 text-black"/></button>
            <button className="w-6 h-6 flex justify-center items-center rounded-full overflow-hidden bg-white hover:bg-green-600 cursor-pointer"><ChevronRight className="h-4 w-4 text-black"/></button>
          </div>
        </div>
        </div>
        <div className="mt-8 w-full grid gap-3 grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
          Array.from({ length: 16 }).map((_,ind)=>{
              return <FilterCard url={"/images/filterimage.jpg"} key={ind} />
            })
        }
        </div>
        <div className="w-full flex flex-wrap justify-center gap-3 md:justify-between">

        <Updates/>
        <Updates/>
        <Updates/>
        </div>
        <div className="md:hidden w-full mt-5">

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
              [1,2,3,4,5,6,7,8,9,10].map((num)=>{
                return <Tops num={num} key={num}/>
          }) 
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
