import React, { useEffect, useState } from 'react'
import Breadcrums from '../components/Breadcrums'
import { ChevronDown, ChevronLeft, ChevronRight, Menu, MessagesSquare, Mic2Icon, Share, Trophy } from 'lucide-react'
import Updates from '../components/Updates'
import FilterCard from '../components/FilterCard'
import Tops from '../components/Tops'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import AnimeDescription from '../components/AnimeDescription'
import EpisodeNumbers from '../components/EpisodeNumbers'

const BASE_URI = import.meta.env.VITE_BACKEND_URI;

const WatchMovie = () => {
  const {slug} = useParams();
  const [episode,setEpisode] = useState(null);
  const [episodes,setEpisodes] = useState([]);
  const [anime,setAnime] = useState(null);
  const [loading,setLoading] = useState(false);
  const [start,setStart] = useState(1);
  const [end,setEnd] = useState(12);
  const [latest,setLatest] = useState([]);
  
  const fetchEpisode = async () => {
    try {
    setLoading(true);
    const response = await axios.get(`${BASE_URI}/api/episode/${slug}`);
    let ep=response.data
    console.log('updates', ep)
    setEpisode(ep.episode);
    setAnime(ep.anime);
      } catch (error) {
      console.log('Error in Latest: ', error)
  }
  }
  const fetchAllEpisodes = async () => {
    if (!anime) return;
  try {
        setLoading(true);
    const response2 = await axios.get(`${BASE_URI}/api/episodes/${anime._id}?start=${start}&end=${end}`);
    let ep2=response2.data
    console.log('Episodes are:', ep2)
    setEpisodes(ep2.episodes);
    setLoading(false)
      } catch (error) {
      console.log('Error in Latest: ', error)
  }
  }
  useEffect(()=>{
    fetchEpisode()
  },[slug])
  useEffect(()=>{
    fetchAllEpisodes()
  },[anime, start, end])
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
  
  return (
    <>
      <div className={`${loading ? "":"pt-40"} filterspage min-h-screen`}>
    {loading ? <div className="text-white font-black text-3xl my-16 text-center h-screen flex justify-center items-center">Loading...</div> :
    (<>
      <div className='flex gap-8 mx-8' style={{zIndex:10,position:"relative"}}>
        <div className='w-[75%]'>
          <div className='rounded-t-2xl bg-[#0C1116] inset-0 p-3'> 
            <Breadcrums anime={anime}/>
          </div>
          <iframe className="w-full h-122 overflow-hidden inset-0" src={episode?.link?.sub[0] || "/sample.mp4"} width={"100%"} height={"100%"} frameborder={"0"} allowFullScreen></iframe>
          <div className='rounded-b-2xl bg-[#0C1116] inset-0 p-4'> 
            <div className='flex justify-between'>
              <span className='font-bold text-white'>You are watching Episode {episode?.episodeNumber}</span>
              <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC {anime?.totalSubbed || 0}</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>{anime?.totalDubbed || 0}</span></span>
              </div>
            </div>
            <p className='text-gray-400 text-sm mt-3'>If current server doesn't work please try other servers beside</p>
          </div>
        </div>
        <EpisodeNumbers episodes={episodes} episode={episode} fetchEpisode={fetchEpisode}/>
      </div>
      <AnimeDescription anime={anime}/>
      </>)}
    <div className="mb-7 mx-5 flex gap-8" style={{zIndex:10,position:"relative"}}>
      <div className='flex-1'>
        <span className='flex gap-3'>
        <h2 className='text-2xl text-white font-bold'>Comments</h2>
        <span className='bg-[#E45F3A] px-1 text-white h-fit rounded-sm text-sm'>On</span>
        </span>
        <div className='flex justify-between items-center text-white my-5'>
          <div className='text-lg font-bold flex gap-1'>
            <MessagesSquare className='h-6 w-6'/>
            <span>Comments</span>
          </div>
          <div className='text-sm'>
            <span>Sort By</span>
          </div>
        </div>
      </div>
        <div className="rounded-2xl overflow-hidden bg-[#0C1116] p-2 w-[25%]">
                <Tops latest={latest} />
        </div>
      </div>
    </div>
    </>
  )
}

export default WatchMovie
