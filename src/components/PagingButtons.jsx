import { useDispatch, useSelector } from "react-redux"
import { fetchAnimesByFilters } from "../store/animeSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import FiltersContext from "../context/FiltersContext";
const PagingButtons = () => {
  const { filteredResultsPages } = useSelector(state => state.animes);
  const { filters, setFilters } = useContext(FiltersContext);
  const dispatch = useDispatch();
  const currentPage = filters.page;

  const pages = [
    currentPage > 1 ? currentPage - 1 : currentPage,
    currentPage,
    currentPage < filteredResultsPages ? currentPage + 1 : currentPage,
  ];

  const pageBtnClass = (page) =>
    `h-10 px-4 rounded-xl cursor-pointer
     ${page === currentPage
       ? "bg-[#e45f3a] text-white"
       : "bg-[#ffffff14] text-gray-400 hover:text-[#e45f3a]"}`;

useEffect(() => {
  dispatch(fetchAnimesByFilters({filters}));
}, [filters]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setFilters(prev => ({ ...prev, page: currentPage - 1 }));
    }
  };

  const handleNextClick = () => {
    if (currentPage < filteredResultsPages) {
      setFilters(prev => ({ ...prev, page: currentPage + 1 }));
    }
  };

  const handleClick = (page) => {
    setFilters(prev => ({ ...prev, page }));
  };

  return (
    <div className="flex my-8 justify-center relative z-10">
      <div className="flex gap-3">

        <button onClick={handlePrevClick} disabled={currentPage === 1} className="bg-[#ffffff14] h-10 px-4 rounded-xl text-gray-400 hover:text-[#e45f3a] disabled:opacity-40"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {pages.map(page => (
          <button key={page} onClick={() => handleClick(page)} className={pageBtnClass(page)}
          >
            {page}
          </button>
        ))}

        <button onClick={handleNextClick} disabled={currentPage === filteredResultsPages} className="bg-[#ffffff14] h-10 px-4 rounded-xl text-gray-400 hover:text-[#e45f3a] disabled:opacity-40"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default PagingButtons;
