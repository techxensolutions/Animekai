import FiltersBar from "../components/FiltersBar"
import FilterCard from "../components/FilterCard"
import { useDispatch, useSelector } from "react-redux"
import { useContext, useEffect } from "react";
import { fetchAnimesByFilters } from "../store/animeSlice";
import FiltersContext, { initialFilters } from "../context/FiltersContext";
import PagingButtons from "../components/PagingButtons";
import { useParams, useSearchParams } from "react-router-dom";
const FiltersPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const { draftFilters, setDraftFilters, setAppliedFilters } = useContext(FiltersContext);
  const {filteredAnimes,loading} = useSelector(state=>state.animes);
  const dispatch = useDispatch();
  useEffect(()=>{
    const name_array=[];
    const new_filters={...initialFilters,[type ? "type" : "status"]:[...name_array,type ? type : status==="new_releases" ? "Not yet aired" : "Currently Airing"]};
    setDraftFilters(new_filters);
    console.log('Drafts in Landing page', new_filters)
    dispatch(fetchAnimesByFilters({filters:new_filters}))
  },[])
//   useEffect(() => {
//   dispatch(fetchAnimesByFilters({filters:draftFilters}));
// }, [draftFilters, dispatch]);

  return (
    <>
    <div className='pt-40 filterspage'>
      <FiltersBar/>
      { 
      loading ? 
      <div className="text-white font-black text-3xl my-16 text-center">Loading...</div> :
        <div className="m-10 mt-16 grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-white gap-5" style={{position:"relative",zIndex:9}}>

      {
        filteredAnimes.map((anime)=>{
          return <FilterCard anime={anime} key={anime._id} />
        })
        }
        </div>
      }
        <PagingButtons/>
    </div>
    </>
  )
}

export default FiltersPage
