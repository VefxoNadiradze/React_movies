import { configureStore } from "@reduxjs/toolkit";
import MovieData from "./MovieData";
import ShowsData from "./ShowsData";

const store = configureStore({
  reducer: {
    Movies: MovieData,
    Shows: ShowsData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
