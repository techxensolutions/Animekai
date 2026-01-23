import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import animeReducer from "./animeSlice"
const rootReducer = combineReducers({
  animes:animeReducer
})
const store=configureStore({
    reducer: rootReducer
})
export default store