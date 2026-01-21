import { Info, Mic2Icon, Play } from "lucide-react"
import { useRef, useState } from "react"
import { Link } from "react-router-dom";

const FilterCard = ({url}) => {
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
        <div className={`bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden relative h-80`} style={{backgroundImage:`url('${url}')`}}>

        </div>
        <p className="font-bold text-sm text-white">My Status as an Assass...</p>
        <div className="flex justify-between">

        <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
              </div>
              <span className="font-bold text-sm text-white">TV</span>
        </div>
        <div className={`
    bg-[#b83c19] p-4 rounded-lg absolute top-0 w-72
    transition-all duration-300 cursor-default
    ${showInfo ? "opacity-100 z-10" : "opacity-0 -z-10"}
    ${infoSide === "right"
      ? "left-[calc(100%+2px)]"
      : "right-[calc(100%+2px)]"}
  `} onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)}>
          <h1 className="font-bold text-lg">Gintama - Mr. Ginpachi...</h1>
          <p className="text-sm text-gray-400">3-nen Z-gumi Ginpachi-sensei</p>
          <div className="my-2 bg-black/50 rounded-full">
            <span className="bg-[#b83c19] ml-1 px-1 text-sm rounded-full">PG-13</span>
          </div>
          <p className="text-sm text-gray-400">
            Let's walk and talk. Can you get up? The Gnosia lie. Pretending to be human, they'll get in close, trick and ...
          </p>
          <div className="text-sm my-3">
            <p>
              <span className="text-gray-400">Aired:</span>
              <span>Oct 7, 2025 to ?</span>
            </p>
            <p>
              <span className="text-gray-400">Aired:</span>
              <span>Not yet aired</span>
            </p>
            <p>
              <span className="text-gray-400">Genres:</span>
              <span>Comedy</span>
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
