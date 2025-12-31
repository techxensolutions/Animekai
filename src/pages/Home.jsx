import { SquareArrowUpRight,Mic2Icon } from "lucide-react"
import HomeHero from "../components/HomeHero"
import Updates from "../components/Updates"

const Home = () => {
  return (
    <>
      <HomeHero/>
      <div className="mt-24 ml-10 w-[70%]">
        <h2 className="font-bold text-2xl text-white">LATEST UPDATES</h2>
        <div className="w-full flex justify-between">

        <Updates/>
        <Updates/>
        <Updates/>
        </div>
      </div>
    </>
  )
}

export default Home
