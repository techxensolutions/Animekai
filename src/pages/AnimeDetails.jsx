'use client'

import React, { useEffect, useReducer, useState } from 'react'
import { Star, Clock, Calendar, Users, Play, Plus, Share2, Heart } from 'lucide-react'
import AnimeDetailsHero from '../components/AnimeDetailsHero'
import AnimeDetailsSection from '../components/AnimeDetailsSections'
import EpisodesList from '../components/EpisodesList'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const BASE_URI = import.meta.env.VITE_BACKEND_URI;

const initialState = {
  animeDetails: null,
  episodes: [],
  isFavorited: false,
  loadingAnime: false,
  loadingEpisodes: false,
  error: null,
};

function animeReducer(state, action) {
  switch (action.type) {
    case 'FETCH_ANIME_START':
      return { ...state, loadingAnime: true };
    case 'FETCH_ANIME_SUCCESS':
      return { ...state, loadingAnime: false, animeDetails: action.payload };
    case 'FETCH_EPISODES_START':
      return { ...state, loadingEpisodes: true };
    case 'FETCH_EPISODES_SUCCESS':
      return { ...state, loadingEpisodes: false, episodes: action.payload };
    case 'ERROR':
      return { ...state, loadingAnime: false, loadingEpisodes: false, error: action.payload };
    default:
      return state;
  }
}

export default function AnimeDetailsPage() {
const { slug } = useParams();
  const [state, dispatch] = useReducer(animeReducer, initialState);

  const { animeDetails, episodes, start, end, loadingAnime, loadingEpisodes } = state;

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      dispatch({ type: 'FETCH_ANIME_START' });
      try {
        const response = await axios.get(`${BASE_URI}/api/anime/${slug}`);
        console.log('Details', response)
        dispatch({ type: 'FETCH_ANIME_SUCCESS', payload: response.data.anime });
    } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
    }
};
fetchAnimeDetails();
}, [slug]);

useEffect(() => {
    const fetchAllEpisodes = async () => {
        if (!animeDetails?._id) return;
        
        dispatch({ type: 'FETCH_EPISODES_START' });
        try {
            const response = await axios.get(
                `${BASE_URI}/api/episodes/${animeDetails._id}`
            );
            console.log('Episodes', response.data.episodes)
        dispatch({ type: 'FETCH_EPISODES_SUCCESS', payload: response.data.episodes });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    };

    fetchAllEpisodes();
  }, [animeDetails?._id, start, end]);

  return (
     loadingAnime || loadingEpisodes ? (<div className="h-screen flex justify-center items-center">
      <img src="/images/loading.svg" alt="" />
      </div>) :

        (
            <>
            <div className='min-h-screen bg-gray-900 text-gray-200'>
            
            <AnimeDetailsHero
            posterImage={animeDetails?.image}
            bannerImage={animeDetails?.image}
            title={animeDetails?.title}
            alternativeTitle={animeDetails?.Japanese}
            dub={animeDetails?.totalDub}
            type={animeDetails?.Type}
            episodes={animeDetails?.episodes}
            sub={animeDetails?.totalSub}
            isFavorited={initialState.isFavorited}
            onFavoriteToggle={() => dispatch({ type: 'TOGGLE_FAVORITE' })}
            />
            
            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
            <div className='grid gap-8 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
            <AnimeDetailsSection title='Synopsis'>
            <p className='leading-relaxed text-gray-400'>{animeDetails?.synopsis}</p>
            </AnimeDetailsSection>
            
            <AnimeDetailsSection title='Information'>
            <div className='grid gap-6 sm:grid-cols-2'>
            <div>
            <h4 className='mb-2 text-sm font-semibold text-gray-400'>Type</h4>
                  <p className='text-gray-200'>{animeDetails?.Type}</p>
                  </div>
                  <div>
                  <h4 className='mb-2 text-sm font-semibold text-gray-400'>Episodes</h4>
                  <p className='text-gray-200'>{animeDetails?.episodes?.length}</p>
                  </div>
                  <div>
                  <h4 className='mb-2 text-sm font-semibold text-gray-400'>Status</h4>
                  <p className='text-gray-200'>{animeDetails?.Status}</p>
                  </div>
                  <div>
                  <h4 className='mb-2 text-sm font-semibold text-gray-400'>Aired</h4>
                  <p className='text-gray-200'>{animeDetails?.Aired}</p>
                </div>
                </div>
                </AnimeDetailsSection>
                
                <EpisodesList episodes={episodes} />
                </div>
                
          <div>
            <div className='space-y-3'>
              <Link to={`/watch/${animeDetails?.episodes?.[0]?.slugs[0]}`} className='w-full bg-blue-600 flex justify-center py-3 rounded-md items-center hover:bg-blue-600/90'>
                <Play className='mr-2 h-4 w-4' />
                Watch Now
              </Link>
              <button
              className='cursor-pointer w-full border-gray-200 text-gray-200 hover:bg-gray-800 flex justify-center py-3 rounded-md items-center'
              >
              <Plus className='mr-2 h-4 w-4' />
              Add to List
              </button>
              <button
              className='cursor-pointer w-full border-gray-200 text-gray-200 hover:bg-gray-800 flex justify-center py-3 rounded-md items-center'
              >
              <Share2 className='mr-2 h-4 w-4' />
              Share
              </button>
              </div>
          </div>
        </div>
        </div>
        </div>
        </>
    )
    )
}
