import { SquareArrowUpRight } from 'lucide-react'
import UpdateItem from './UpdateItem'

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

              return <li key={k} >
                <UpdateItem/>
          </li>
        })
          }
        </ul> 
    </div>
    </>
  )
}

export default Updates
