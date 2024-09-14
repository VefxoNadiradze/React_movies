import { configureStore } from "@reduxjs/toolkit";
import MovieData from "./MovieData";

const store = configureStore({
  reducer: {
    Movies: MovieData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
