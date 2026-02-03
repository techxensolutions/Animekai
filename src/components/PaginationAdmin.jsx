import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FiltersContext from '../context/FiltersContext';
import { fetchAnimes, fetchAnimesByFilters } from '../store/animeSlice';

const PaginationAdmin = () => {
  const { hasNextPage, nextCursor } = useSelector(state => state.animes);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const pages = [
    currentPage === 1 ? currentPage : !hasNextPage ? currentPage-2 : currentPage - 1,
    currentPage === 1 ? currentPage+1 : !hasNextPage ? currentPage-1 : currentPage,
    currentPage === 1 ? currentPage + 2 : !hasNextPage ? currentPage : currentPage+1 
  ];
  useEffect(() => {
    dispatch(fetchAnimes({cursor:nextCursor}));
  }, [dispatch, currentPage]);

  const pageBtnClass = (page) =>
    `h-10 px-4 rounded-xl cursor-pointer
     ${page === currentPage
       ? "bg-[#e45f3a] text-white"
       : "bg-[#ffffff14] text-gray-400 hover:text-[#e45f3a]"}`;


  const handlePrevClick = () => {
    if (currentPage > 1) {
        setCurrentPage(prev=>prev-1)
        //   setAppliedFilters(prev => ({ ...prev, page: currentPage - 1 }));
        //   dispatch(fetchAnimesByFilters({filters:appliedFilters}));
    }
};

  const handleNextClick = () => {
      if (hasNextPage === true) {
        setCurrentPage(prev=>prev+1)
    //   setAppliedFilters(prev => ({ ...prev, page: currentPage + 1 }));
    //   dispatch(fetchAnimesByFilters({filters:appliedFilters}));
    }
  };

  const handleClick = (page) => {
    // setAppliedFilters(prev => ({ ...prev, page }));
    // dispatch(fetchAnimesByFilters({filters:appliedFilters}));
  };

  return (
    <div className="flex my-8 justify-center relative z-9">
      <div className="flex gap-3">

        <button onClick={handlePrevClick} disabled={currentPage === 1} className="border border-gray-400 h-10 px-4 rounded-xl text-gray-400 hover:text-[#e45f3a] disabled:opacity-40"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {pages.map(page => (
          <button key={page} disabled={currentPage===page} onClick={() => handleClick(page)} className={pageBtnClass(page)}
          >
            {page}
          </button>
        ))}

        <button onClick={handleNextClick} disabled={hasNextPage === false} className="border border-gray-400 h-10 px-4 rounded-xl text-gray-400 hover:text-[#e45f3a] disabled:opacity-40"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}

export default PaginationAdmin
