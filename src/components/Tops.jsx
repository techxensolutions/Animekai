import { Mic2Icon } from "lucide-react"
import { Link } from "react-router-dom"

const Tops = ({anime,num}) => {
  return (
    <>
      <li>
              <Link to={'/'} className="rounded-lg flex w-full p-4 py-7 gap-3 items-center relative bg-position-[100%] bg-no-repeat bg-size-[40%] overflow-hidden transition-all toplink" style={{backgroundImage:`url('${anime?.image || "/images/filterimage.jpg"}')`}}>
              <div className="h-8 w-8 border border-gray-400 rounded-full flex justify-center items-center">{num}</div>
              <div className="flex flex-col">
                <span className="text-lg">
                  {anime?.title.slice(0,25)+"..." || "Title"}
                </span>
                <div className="flex gap-2">
                <span className='bg-[#e45f3a1e] text-[10px] p-px text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC {anime?.totalSubbed || 0}</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-4 w-4 mr-1'/><span>{anime?.totalDubbed || 0}</span></span>
                </div>
              </div>
              </Link>
            </li>
    </>
  )
}

export default Tops
