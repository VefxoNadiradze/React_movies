import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  searchToggle: boolean;
}

const initialState: IState = {
  searchToggle: false,
};

const SearchToggleSlice = createSlice({
  name: "Searchtoggle",
  initialState,
  reducers: {
    searchOn: (state, action: PayloadAction<boolean>) => {
      state.searchToggle = action.payload;
    },
  },
});

export default SearchToggleSlice.reducer;
export const { searchOn } = SearchToggleSlice.actions;
