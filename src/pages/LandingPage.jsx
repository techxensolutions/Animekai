import { MenuIcon, Share2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Share from "../components/Share";
import { useDispatch } from "react-redux";
import FiltersContext from "../context/FiltersContext";
import {initialFilters} from "../context/FiltersContext";
import { fetchAnimesByFilters } from "../store/animeSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { draftFilters, setDraftFilters, setAppliedFilters } = useContext(FiltersContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (type,name) => {
    const name_array=[];
    const new_filters={...initialFilters,[type]:[...name_array,name]};
    setDraftFilters(new_filters);
    console.log('Drafts in Landing page', new_filters)
    dispatch(fetchAnimesByFilters({filters:new_filters}))
  }
  return (
    <>
      <header className="max-sm:relative flex justify-center items-center py-7 text-white">
        {isOpen ? <X onClick={()=>setIsOpen(false)} className="sm:hidden h-5 w-5 absolute top-2 right-2"/>
        :<MenuIcon onClick={()=>setIsOpen(true)} className="sm:hidden h-5 w-5 absolute top-2 right-2"/>}
        <nav className={`${isOpen ? "" : "max-sm:hidden"} mx-auto`}>
          <ul className="max-sm:flex-col max-sm:text-center flex gap-8">
                <li>
                  <Link to={"/Home"} className="hover:text-[#ee559ce5]">
                  Home
                  </Link>
                  </li>
                <li>
                  <Link to={`/filter?type=${"Movies".replaceAll(" ","-").toLowerCase()}`} onClick={()=>handleClick("type","Movie")} className="hover:text-[#ee559ce5]">
                  Movies
                  </Link>
                  </li>
                <li>
                  <Link to={`/filter?type=${"TV Series".replaceAll(" ","-").toLowerCase()}`} onClick={()=>handleClick("type","TV")} className="hover:text-[#ee559ce5]">
                  TV Series
                  </Link>
                  </li>
                <li>
                  <Link to={`/filter?status=${"New Releases".replaceAll(" ","-").toLowerCase()}`} onClick={()=>handleClick("status","Not aired yet")} className="hover:text-[#ee559ce5]">
                  New Releases
                  </Link>
                  </li>
                <li>
                  <Link to={`/filter?status=${"Ongoing".replaceAll(" ","-").toLowerCase()}`} onClick={()=>handleClick("status","Currently Airing")} className="hover:text-[#ee559ce5]">
                  Onngoing
                  </Link>
                  </li>
          </ul>
        </nav>
      </header>
      <Hero/>
      <Share/>
      
      <Content/>
    </>
  );
};

export default Home;
