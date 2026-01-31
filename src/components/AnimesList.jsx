'use client';

import React from "react"

import { useState } from 'react';
import { Search, Eye, Edit2, Trash2 } from 'lucide-react';

const initialAnimes = [
  {
    id: 1,
    title: "My Status as an Assassin Obviously Exceeds the Hero's",
    genres: ['Action', 'Adventure', 'Fantasy'],
    episodes: 13,
  },
  {
    id: 2,
    title: 'Gintama - Mr. Ginpachi\'s Zany Class',
    genres: ['Comedy'],
    episodes: 12,
  },
  {
    id: 3,
    title: 'A Gatherer\'s Adventure in Isekai',
    genres: ['Adventure', 'Fantasy'],
    episodes: 12,
  },
  {
    id: 4,
    title: 'Plus-sized Misadventures in Love!',
    genres: ['Comedy', 'Romance'],
    episodes: 12,
  },
  {
    id: 5,
    title: 'A Mangaka\'s Weirdly Wonderful Workplace',
    genres: ['Comedy'],
    episodes: 13,
  },
  {
    id: 6,
    title: 'Amila to Cocora',
    genres: ['Slice of Life'],
    episodes: 13,
  },
  {
    id: 7,
    title: 'Koupen-chan',
    genres: ['Slice of Life'],
    episodes: 43,
  },
  {
    id: 8,
    title: 'Theatre of Darkness: Yamishibai 15',
    genres: ['Avant Garde', 'Horror', 'Supernatural'],
    episodes: 13,
  },
  {
    id: 9,
    title: 'Gachiakuta',
    genres: ['Action', 'Fantasy'],
    episodes: 24,
  },
  {
    id: 10,
    title: 'Hands Off: Sawaranaide Kotesashi-kun',
    genres: ['Sports', 'Ecchi'],
    episodes: 12,
  },
];

export default function AnimesList() {
  const [animes, setAnimes] = useState(initialAnimes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimes, setSelectedAnimes] = useState([]);

  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAnimes(filteredAnimes.map((a) => a.id));
    } else {
      setSelectedAnimes([]);
    }
  };

  const handleSelectAnime = (id) => {
    setSelectedAnimes((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    setAnimes((prev) => prev.filter((a) => a.id !== id));
    setSelectedAnimes((prev) => prev.filter((a) => a !== id));
  };

  const handleDeleteSelected = () => {
    setAnimes((prev) => prev.filter((a) => !selectedAnimes.includes(a.id)));
    setSelectedAnimes([]);
  };

  const genreColors = {
    Action: 'bg-blue-500',
    Adventure: 'bg-blue-600',
    Fantasy: 'bg-purple-500',
    Comedy: 'bg-blue-500',
    Romance: 'bg-pink-500',
    'Slice of Life': 'bg-cyan-500',
    'Avant Garde': 'bg-indigo-600',
    Horror: 'bg-red-600',
    Supernatural: 'bg-purple-600',
    Sports: 'bg-green-500',
    Ecchi: 'bg-purple-500',
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleDeleteSelected}
          disabled={selectedAnimes.length === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
        >
          Delete Selected
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors">
          Add Anime
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="px-4 py-3 w-12">
                <input
                  type="checkbox"
                  checked={
                    selectedAnimes.length === filteredAnimes.length &&
                    filteredAnimes.length > 0
                  }
                  onChange={handleSelectAll}
                  className="w-4 h-4 cursor-pointer"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Genres
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Episodes
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimes.map((anime) => (
              <tr
                key={anime.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedAnimes.includes(anime.id)}
                    onChange={() => handleSelectAnime(anime.id)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium">
                  {anime.title}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {anime.genres.map((genre) => (
                      <span
                        key={genre}
                        className={`${genreColors[genre] || 'bg-blue-500'} text-white text-xs px-2 py-1 rounded`}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-800 font-medium">
                  {anime.episodes}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(anime.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
