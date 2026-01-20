import FiltersBar from "../components/FiltersBar"
import FilterCard from "../components/FilterCard"

const FiltersPage = () => {
  return (
    <>
    <div className='pt-40 filterspage'>
      <FiltersBar/>
      <div className="m-10 mt-16 grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-white gap-5" style={{position:"relative",zIndex:9}}>

      {
          Array.from({ length: 30 }).map((_,ind)=>{
              return <FilterCard url={"/images/filterimage2.jpg"} key={ind} />
            })
        }
        </div>
    </div>
    </>
  )
}

export default FiltersPage
