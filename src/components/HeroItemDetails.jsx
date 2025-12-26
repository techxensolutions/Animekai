import { Bookmark, Mic2Icon } from 'lucide-react'

const ItemDetails = ({currentItem,currentIndex}) => {
  return (
    <>
     <div key={currentIndex} className='max-sm:mt-12 relative w-full text-white space-y-6 sm:self-end sm:mb-20 animate-fade transition-all duration-100'>
      <h1 className='text-5xl font-bold'>{currentItem.name}</h1>
      <div className='flex gap-2 items-center'>
        <span className='bg-[#e45f3a1e] text-[10px] p-px text-[#E45F3A] border border-[#E45F3A] rounded-md'>CC 8</span>
        <span className='bg-green-600/20 text-[10px] p-px text-green-600 border border-green-600 rounded-md flex items-center'><Mic2Icon className='h-3 w-3'/><span>1211</span></span>
        <span className='font-bold'>
            TV
        </span>
        <span>
            {currentItem.categories.join(", ")}
        </span>
      </div>
      <p className='w-1/2 text-sm leading-6.5'>
        {currentItem.description}
      </p>
      <div className='bg-black/80 p-4 rounded-xl flex justify-between max-w-[90%] sm:max-w-[50%] md:max-w-[30%]'>
      <div className='flex flex-col gap-2 font-bold'>
        <span className='text-gray-400 text-sm'>Rating</span>
        <span className='text-white text-lg'>{currentItem.rating}</span>
      </div>
      <div className='flex flex-col gap-2 font-bold'>
        <span className='text-gray-400 text-sm'>Release</span>
        <span className='text-white text-lg'>{currentItem.released}</span>
      </div>
      <div className='flex flex-col gap-2 font-bold'>
        <span className='text-gray-400 text-sm'>Quality</span>
        <span className='text-white text-lg'>{currentItem.quality}</span>
      </div>
      </div>
      <div className='flex gap-12 items-center flex-wrap'>
        <button className='bg-[#E45F3A] text-2xl px-12 py-2 rounded-lg'>
            Watch Now
        </button>
        <Bookmark className='h-7 w-7'/>
      </div>
      </div> 
    </>
  )
}

export default ItemDetails
