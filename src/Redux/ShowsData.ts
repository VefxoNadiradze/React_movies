import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  } | null;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
      name: string;
    };
  };
}

export const getShowsData = createAsyncThunk("getShowsData", async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  return data.slice(0, 50);
});

interface ShowDataI {
  isLoading: boolean;
  data: Show[];
  error: boolean;
  filteredData: Show[];
}

const initialState: ShowDataI = {
  isLoading: false,
  data: [],
  error: false,
  filteredData: [],
};

const ShowsData = createSlice({
  name: "Shows",
  initialState,
  reducers: {
    FilterShows: (state, action) => {
      if (action.payload === "All genres") {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter((shows) => {
          return shows.genres && shows.genres.includes(action.payload);
        });
      }
    },
    FilterShowsYear: (state, action) => {
      state.filteredData = state.data.filter((movies) => {
        if (action.payload.minPrice == "" && action.payload.maxPrice == "") {
          return (state.filteredData = state.data);
        }
        return (
          Number(movies.premiered.slice(0, 4)) >= action.payload.minPrice &&
          Number(movies.premiered.slice(0, 4)) <= action.payload.maxPrice
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShowsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShowsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(getShowsData.rejected, (state) => {
      state.error = true;
    });
  },
});

export default ShowsData.reducer;
export const { FilterShows, FilterShowsYear } = ShowsData.actions;
