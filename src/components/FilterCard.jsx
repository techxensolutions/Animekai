import { Mic2Icon } from "lucide-react"

const FilterCard = ({url}) => {
  return (
    <>
        <div>

        <div className={`bg-[url('${url}')] bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden relative h-80`}>

        </div>
        <p className="font-bold text-sm text-white">My Status as an Assass...</p>
        <div className="flex justify-between">

        <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px flex items-center text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
              </div>
              <span className="font-bold text-sm text-white">TV</span>
        </div>
        </div>
    </>
  )
}

export default FilterCard
