import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  navigate: boolean;
}

const initialState: IState = {
  navigate: false,
};

const NavigationSlice = createSlice({
  name: "Navigation",
  initialState,
  reducers: {
    ToggleNavigate: (state, action: PayloadAction<boolean>) => {
      state.navigate = action.payload;
    },
  },
});

export default NavigationSlice.reducer;
export const { ToggleNavigate } = NavigationSlice.actions;
