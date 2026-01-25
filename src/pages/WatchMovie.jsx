import React, { useEffect, useState } from 'react'
import Breadcrums from '../components/Breadcrums'
import { ChevronDown, ChevronLeft, ChevronRight, Menu, Mic2Icon, Share, Trophy } from 'lucide-react'
import Updates from '../components/Updates'
import FilterCard from '../components/FilterCard'
import Tops from '../components/Tops'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

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
          <iframe class="w-full h-122 overflow-hidden inset-0" src={episode?.link?.sub[0] || "/sample.mp4"} width={"100%"} height={"100%"} frameborder={"0"} allowFullScreen></iframe>
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
          <div className='flex gap-2 justify-evenly flex-wrap px-4 mx-auto w-[95%]'>
            {
             episodes.length > 0 ? (episodes.map((ep,index)=>{
                return <Link to={`/watch/${ep.slugs[0]}`} onClick={()=>fetchEpisode()} key={ep._id} className={`hover:bg-[#E45F3A] flex justify-center items-center h-13 w-14 rounded-lg text-lg text-white font-bold ${episode.episodeNumber===ep.episodeNumber ? "bg-[#E45F3A]":"bg-gray-800"}`}>
              {ep.episodeNumber}
            </Link>
              })) : <div className="text-white text-center w-full">Loading episodes...</div>
            }
          </div>
        </div>
      </div>
      <div className='m-8 flex rounded-2xl overflow-hidden' style={{zIndex:10,position:"relative"}}>
        <div className={`inset-0 p-6 backdrop-blur-2xl`} style={{backgroundImage: `url('${anime?.image || "/images/filterimage2.jpg"}')`}}>

        <img src={anime?.image || "/images/filterimage2.jpg"} alt="" width={"150px"} height={"auto"} />
        </div>
        <div className='flex-1 bg-[#0C1116] inset-0 pl-6'>
          <h1 className='text-white font-bold text-lg'>{anime?.title || "Title"}</h1>
            <div className="flex gap-2 my-3">
                 {anime?.Rating && <span className='text-[10px] p-px flex items-center border bg-[#E45F3A] rounded-md'>{anime.Rating.slice(" ")[0]}</span>}
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC {anime?.totalSubbed || 0}</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-4 w-4 mr-1'/><span>{anime?.totalDubbed || 0}</span></span>
              </div>
              <p className='text-white text-xs text-justify w-[80%]'>
                {anime?.synopsis}
              </p>
        </div>
      </div></>)}
    <div className="mb-7 mx-5" style={{zIndex:10,position:"relative"}}>
        <div className="w-[30%] mt-5 ml-auto rounded-2xl overflow-hidden bg-[#0C1116] p-2">
                <Tops latest={latest} />
        </div>
      </div>
    </div>
    </>
  )
}

export default WatchMovie
