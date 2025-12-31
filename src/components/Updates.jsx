import { Mic2Icon, SquareArrowUpRight } from 'lucide-react'

const Updates = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>

     <div className="flex justify-between mt-10">
        <h2 className="font-bold text-2xl text-white">New Releases</h2>
        <SquareArrowUpRight fill="white" className="text-black rounded-xl w-8 h-8"/>
        </div>
        <ul className="rounded-xl overflow-hidden text-white bg-[#11161b]">
          {[1,2,3,4,5,6].map((k)=>{

              return <li key={k} className="p-3 py-4 flex gap-3 hover:bg-[#1B2027]">
            <div className="w-16 h-16 rounded-full overflow-hidden flex justify-center items-center">
              <img src="/images/sharing.gif" alt="sharing" className="w-16 h-16"/>
            </div>
            <div className="flex flex-col font-bold justify-between">
              <p>My status as an assassin...</p>
              <div className="flex justify-between">

              <div className="flex gap-2">
                 <span className='bg-[#e45f3a1e] text-[10px] p-px text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
              </div>
              <span className="text-sm text-gray-300">TV</span>
              </div>
            </div>
          </li>
        })
          }
        </ul> 
    </div>
    </>
  )
}

export default Updates
