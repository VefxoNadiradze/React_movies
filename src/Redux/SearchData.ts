import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface SearchI {
  value: string;
}

const initialState: SearchI = {
  value: "",
};

const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    getInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export default SearchSlice.reducer;
export const { getInputValue } = SearchSlice.actions;
