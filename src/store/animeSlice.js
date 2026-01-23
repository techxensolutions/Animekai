import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URI = import.meta.env.VITE_BACKEND_URI;
export const fetchAnimes = createAsyncThunk(
  "animes/fetchAnimes",
  async (_,thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URI}/api/anime`);
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
    console.log('Filters are: ', filters )
    try {
      const response = await axios.post(`${BASE_URI}/api/filter`,filters);
      console.log('Filtered: ', response.data )
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
    }
  }
);
// export const fetchProductByID = createAsyncThunk(
//   "products/fetchProductById",
//   async ({id},thunkAPI) => {
//     try {
//       const response = await axios.get(`${BASE_URI}/product/fetch/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data.message || error.message);
//     }
//   }
// );
// export const fetchProductByCategory = createAsyncThunk(
//   "products/fetchProductByCategory",
//   async ({category},thunkAPI) => {
//     try {
//       const response = await axios.get(`${BASE_URI}/product/fetchrelated/${category}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data.message || error.message);
//     }
//   }
// );

const animeSlice = createSlice({
  name: "animes",
  initialState: {
    animes: [],
    animeById: null,
    filteredAnimes:[],
    relatedAnimes:[],
    filteredResultsPages:0,
    totalFilteredResults:0,
    loading: true,
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
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch animes";
      });
    //   builder
    //   .addCase(fetchProductByID.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //     state.productById = null;
    //   })
    //   .addCase(fetchProductByID.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.productById = action.payload;
    //   })
    //   .addCase(fetchProductByID.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload || "Failed to fetch product by ID";
    //   });
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
    //   builder
    //   .addCase(fetchProductByCategory.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchProductByCategory.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.relatedProducts = action.payload;
    //   })
    //   .addCase(fetchProductByCategory.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload || "Failed to fetch products";
    //   });
  },
});

export default animeSlice.reducer