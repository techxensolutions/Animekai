import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URI = import.meta.env.VITE_BACKEND_URI;
export const registerUser = createAsyncThunk(
  "user/register",
  async (formData,thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/user/register`,formData,{withCredentials:true});
        toast.success("Registered Successfully!")
        console.log('register: ', response.data)
        return response.data;
      } catch (error) {
        toast.error("Error in Registration")
        console.log('Error in login: ', error)
        return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
      }
    }
  );
  export const loginUser = createAsyncThunk(
  "user/login",
  async (formData,thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URI}/api/user/login`,formData,{withCredentials:true});
      toast.success("Logged In Successfully!")
      console.log('login: ', response.data)
      return response.data;
    } catch (error) {
      toast.error("Error in Login")
        console.log('Error in login: ', error)
      return thunkAPI.rejectWithValue(error.response?.data.error || error.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to Login";
      });
      builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to Register";
      });
  },
});

export default userSlice.reducer