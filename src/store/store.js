import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import animeReducer from "./animeSlice"
import userReducer from "./userSlice"
const rootReducer = combineReducers({
  animes: animeReducer,
  user: userReducer
})
const store=configureStore({
    reducer: rootReducer
})
export default store