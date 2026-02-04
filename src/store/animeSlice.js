import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URI = import.meta.env.VITE_BACKEND_URI;
export const fetchAnimes = createAsyncThunk(
  "animes/fetchAnimes",
  async ({id,page},thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/admin/anime?page=${page}&limit=20`,{id},
        {withCredentials:true}
      );
      console.log('Animes', response.data)
      return response.data;
    } catch (error) {
        console.log('Error: ', error)
      return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
    }
  }
);
export const fetchAnimesByFilters = createAsyncThunk(
  "animes/fetchAnimesByFilters",
  async ({filters},thunkAPI) => {
    console.log('Applied Filters', filters)
    try {
      const response = await axios.post(`${BASE_URI}/api/filter`,filters);
      console.log('Filtered: ', response.data )
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
    }
  }
);

const animeSlice = createSlice({
  name: "animes",
  initialState: {
    animes: [],
    totalPages:1,
    animeById: null,
    filteredAnimes:[],
    relatedAnimes:[],
    filteredResultsPages:1,
    totalFilteredResults:0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimes.fulfilled, (state, action) => {
        state.loading = false;
        state.animes = action.payload.animes;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch animes";
      });
      builder
      .addCase(fetchAnimesByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimesByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredAnimes = action.payload.results;
        state.totalFilteredResults = action.payload.total;
        state.filteredResultsPages = action.payload.totalPages;
      })
      .addCase(fetchAnimesByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export default animeSlice.reducer