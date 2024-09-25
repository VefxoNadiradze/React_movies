import { configureStore } from "@reduxjs/toolkit";
import MovieData from "./MovieData";
import ShowsData from "./ShowsData";
import NavigationSlice from "./Navigation";
import SearchToggleSlice from "./SearchOnOf";
import SearchSlice from "./SearchData";

const store = configureStore({
  reducer: {
    Movies: MovieData,
    Shows: ShowsData,
    Navigate: NavigationSlice,
    SearchOnOf: SearchToggleSlice,
    Searching: SearchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
