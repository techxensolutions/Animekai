import { Info, Mic2Icon, Play } from "lucide-react"
import { useRef, useState } from "react"
import { Link } from "react-router-dom";

const FilterCard = ({anime}) => {
  const [showInfoIcon,setShowInfoIcon] = useState(false);
  const [showInfo,setShowInfo] = useState(false);
  const [translatePlay,setTranslatePlay] = useState(false);
  const [infoSide, setInfoSide] = useState("right");
  const cardRef = useRef(null);
  const handleInfoEnter = () => {
  if (!cardRef.current) return

  const rect = cardRef.current.getBoundingClientRect()
  const infoWidth = 288;

  const overflowRight = rect.right + infoWidth > window.innerWidth

  setInfoSide(overflowRight ? "left" : "right")
  setShowInfo(true)
}

  return (
    <>
        <Link to={`/watch/${"Watch Movie".replaceAll(" ","-").toLowerCase()}`} ref={cardRef} className="relative hover:cursor-pointer" onMouseEnter={()=>setShowInfoIcon(true)} onMouseLeave={()=>setShowInfoIcon(false)}>
          {
            showInfoIcon && <span className={`rounded-full bg-[#b83c19] text-white absolute z-10 right-2 top-2`} onMouseEnter={handleInfoEnter} onMouseLeave={()=>setShowInfo(false)}><Info className="h-8 w-8"/></span>
          }
        <div className={`bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden relative h-60`} style={{backgroundImage:`url('${anime?.image || "/images/filterimage.jpg"}')`}}>

        </div>
        <p className="font-bold text-[13px] text-white my-1">{anime?.title.slice(0,23)+"..." || "Title"}</p>
        <div className="flex justify-between">

        <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC {anime.totalSubbed}</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-4 w-4 mr-1'/><span>{anime.totalDubbed}</span></span>
              </div>
              <span className="font-bold text-sm text-white">{anime.Type}</span>
        </div>
        <div className={`
    bg-[#b83c19] p-4 rounded-lg absolute top-0 w-72
    transition-all duration-300 cursor-default
    ${showInfo ? "opacity-100 z-10" : "opacity-0 -z-10"}
    ${infoSide === "right"
      ? "left-[calc(100%+2px)]"
      : "right-[calc(100%+2px)]"}
  `} onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)}>
          <h1 className="font-bold text-white">{anime.title}</h1>
          <p className="text-sm text-gray-400">3-nen Z-gumi Ginpachi-sensei</p>
          <div className="my-2 bg-black/50 rounded-full">
            <span className="bg-[#b83c19] ml-1 px-1 text-sm font-semibold rounded-full text-white">PG-13</span>
          </div>
          <p className="text-sm text-gray-400">
            {anime.synopsis.slice(0,110)+"..." || "Synopsis"}
          </p>
          <div className="text-sm my-3 text-white">
            <p>
              <span className="text-gray-400">Aired:</span>
              <span>{anime.Aired}</span>
            </p>
            <p>
              <span className="text-gray-400">Status:</span>
              <span>{anime.Status}</span>
            </p>
            <p>
              <span className="text-gray-400">Genres:</span>
              <span>
                {
                  anime.genres.join(", ")
            }
            </span>
            </p>
          </div>
          <button onMouseEnter={()=>setTranslatePlay(true)} onMouseLeave={()=>setTranslatePlay(false)} className="bg-gray-900 rounded-full p-3 text-lg font-bold flex justify-between w-full items-center">
            <span className="text-white">
              WATCH NOW
            </span>
            <Play className={`h-5 w-5 ${translatePlay ? "-translate-x-4 text-green-600" : "translate-0 text-white"} transition-all duration-200 delay-100`} fill={`${translatePlay ? "green" : "white"}`}/>
          </button>
        </div>
        </Link>
    </>
  )
}

export default FilterCard
