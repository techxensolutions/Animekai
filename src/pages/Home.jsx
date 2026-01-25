import { SquareArrowUpRight,Mic2Icon, Trophy, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import HomeHero from "../components/HomeHero"
import Updates from "../components/Updates"
import FilterCard from "../components/FilterCard"
import Tops from "../components/Tops"
import Share from "../components/Share"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URI = import.meta.env.VITE_BACKEND_URI;

const Home = () => {
  const {animes,loading} = useSelector(state=>state.animes);
  const [page,setPage] = useState(1);
  const [upcomings,setUpcomings] = useState([]);
  const [completed,setCompleted] = useState([]);
  const [latest,setLatest] = useState([]);
  const [updates,setUpdates] = useState([]);
  useEffect(()=>{
    const fetchUpdates=async ()=>{
      try {
      const response = await axios.get(`${BASE_URI}/api/latest/episode?page=${page}&limit=20`);
      let upd_animes=response.data.episodes
      console.log('updates', upd_animes)
      setUpdates(upd_animes);
    } catch (error) {
        console.log('Error in Latest: ', error)
    }
    }
    fetchUpdates();
  },[page])
  useEffect(()=>{
    const fetchLatest=async ()=>{
      try {
      const response = await axios.get(`${BASE_URI}/api/latest/anime`);
      let lat_animes=response.data.animes
      console.log('latest', lat_animes)
      setLatest(lat_animes);
    } catch (error) {
        console.log('Error in Latest: ', error)
    }
    }
    fetchLatest();
  },[])
  useEffect(()=>{
    const fetchUpcomings=async ()=>{
      try {
      const response = await axios.get(`${BASE_URI}/api/animelist?status=Currently+Airing&limit=6`);
      console.log('Upcomings', response.data.animes)
      let up_animes=response.data.animes
      setUpcomings(up_animes);
    } catch (error) {
        console.log('Error: ', error)
    }
    }
    fetchUpcomings();
  },[])
  useEffect(()=>{
    const fetchCompleted=async ()=>{
      try {
      const response = await axios.get(`${BASE_URI}/api/animelist?status=Finished+Airing&limit=6`);
      console.log('Upcomings', response.data.animes)
      let com_animes=response.data.animes
      setCompleted(com_animes);
    } catch (error) {
        console.log('Error: ', error)
      return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
    }
    }
    fetchCompleted();
  },[])
  return (
    loading ? (
      <div className="h-screen flex justify-center items-center">
      <div className="text-white font-black text-3xl my-16 text-center">Loading...</div>
      </div>
    ):
    (

      <>
      <HomeHero latest={latest}/>
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
          updates.map((episode,ind)=>{
              return <FilterCard anime={episode.anime_info} key={episode.anime_id} />
            })
        }
        </div>
        <div className="w-full flex flex-wrap justify-center gap-3 md:justify-between">

        <Updates animes={upcomings} title={"New Release"} />
        <Updates animes={upcomings} title={"Upcoming"} />
        <Updates animes={completed} title={"Completed"} />
        </div>
        <div className="md:hidden w-full mt-5">

<Tops latest={latest}/>
        </div>
      </div>
    </>
    )
  )
}

export default Home
