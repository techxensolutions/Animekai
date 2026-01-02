import { Mic2Icon } from "lucide-react"
import { Link } from "react-router-dom"

const Tops = ({num}) => {
  return (
    <>
      <li>
              <Link to={'/'} className="flex w-full p-4 py-7 gap-3 items-center bg-[url('/images/top.jpg')] relative bg-position-[100%] bg-no-repeat bg-size-[40%] overflow-hidden transition-all toplink">
              <div className="h-8 w-8 border border-gray-400 rounded-full flex justify-center items-center">{num}</div>
              <div className="flex flex-col">
                <span className="text-lg">
                  Patlabor: The mobile poli...
                </span>
                <div className="flex gap-2">
                <span className='bg-[#e45f3a1e] text-[10px] p-px text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
                </div>
              </div>
              </Link>
            </li>
    </>
  )
}

export default Tops
